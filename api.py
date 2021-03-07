import io
import os
import time
import copy

from flask import (Flask, current_app, make_response, request, send_file,
                   session)
from flask.helpers import flash
from flask.templating import render_template
from flask.wrappers import Response
from gevent import pywsgi
from werkzeug.utils import redirect

import cqu_ics
import scu_ics

app = Flask(__name__)
app.config['SERVER_NAME'] = 'luxru.top'


app.secret_key = os.urandom(48)

with app.app_context():
    current_app.scu_stu_dict = {
    }
    current_app.scu_stu_id = 0
    current_app.scu_time_expeire = 10*60
    current_app.cqu_context = {
        'title_str': '获取CQU 课表 ICS',
        'lazy':True,
        'source_type': 'Excel',
        "help":"统一认证号",
        'need_captcha': False
    }
    current_app.scu_context = {
        'title_str': '获取SCU 课表 ICS',
        'lazy':False,
        'source_type': 'Json',
        "help":"学号",
        'need_captcha': True,
    }


def scuShouldDelete(time_begin,time_expeire,time_compare)->bool:
    ret = False
    if time_begin+time_expeire < time_compare:
        ret = True
    return ret

def scuCreateStuAnyway(stu_id=None):
    with app.app_context():
        time_now = time.time()
        if stu_id is None:
            current_app.scu_stu_dict[current_app.scu_stu_id] = (scu_ics.get_stu(),time_now,current_app.scu_time_expeire)
            stu_id = session['stu_id'] = current_app.scu_stu_id
            current_app.scu_stu_id += 1
        else:
            current_app.scu_stu_dict[stu_id] = (scu_ics.get_stu(),time_now,current_app.scu_time_expeire)
            session['stu_id'] = stu_id
    return stu_id

def scuCheckAndDelete()->int:
    count = 0
    time_compare = time.time()
    temp = copy.copy(current_app.scu_stu_dict)
    with app.app_context():
        for k,v in temp.items():
            if scuShouldDelete(v[1],v[2],time_compare):
                current_app.scu_stu_dict.pop(k)
                count += 1
    return count

def cquIcsGetIcsByUname(uname: str, upasswd: str) -> Response:
    try:
        s = cqu_ics.cquIcs(
            cqu_ics.getCquClassListByUname(uname, upasswd))
        return send_file(
            io.BytesIO(bytes(s, encoding='utf-8')),
            attachment_filename=(os.urandom(24).hex()+'.ics'),
            as_attachment=True
        ), 200
    except ValueError as exp:
        flash(message=str(exp), category="error")
        return redirect('/', code=302)


def cquIcsGetIcsByExcel(html: str) -> Response:
    try:
        # TODO 不想写了写了写了
        s = cqu_ics.cquIcs(cqu_ics.getCquClassListByHtml(html))
        return send_file(
            io.BytesIO(bytes(s, encoding='utf-8')),
            attachment_filename=(os.urandom(24).hex()+'.ics'),
            as_attachment=True
        ), 200
    except ValueError as exp:
        flash(message=str(exp), category="error")
        return redirect('/', code=302)

@app.route('/', subdomain="cqu", methods=['GET', 'POST'])
def cquIcs():
    try:
        ret = None
        if request.method == "GET":
            ret = render_template("index.html", **current_app.cqu_context)
        elif request.method == "POST":
            html = request.form.get("content", type=str, default=None)
            if html != None:
                flash(message="请求方法不允许", category="error")
            else:
                uname = request.form.get("j_username", type=str, default=None)
                upasswd = request.form.get(
                    "j_password", type=str, default=None)
                ret = cquIcsGetIcsByUname(uname=uname, upasswd=upasswd)
        else:
            flash(message="请求方法不允许", category="error")
            ret = render_template("index.html", **current_app.cqu_context)
    except Exception as exp:
        flash(message=str(exp), category="error")
        return redirect('/', code=302)
    else:
        return ret


def scuIcsGetIcsByUname(uname, upasswd, captcha, stu_id):
    try:
        uname = request.form['j_username']
        upasswd = request.form['j_password']
        captcha = request.form['j_captcha']
        stu: scu_ics.sub.StuStudent = current_app.scu_stu_dict.pop(stu_id)
        session.pop('stu_id')
        class_list = stu[0].getListByLogin(
            uname=uname, upawd=upasswd, captcha=captcha)
        s = scu_ics.scuIcs(class_list=class_list)
        return send_file(
            io.BytesIO(bytes(s, encoding='utf-8')),
            attachment_filename=(os.urandom(24).hex()+'.ics'),
            as_attachment=True
        ), 200
    except ValueError as exp:
        flash(message=str(exp), category="error")
        return redirect('/', code=302)


def scuIcsGetIcsByJson(json, stu_id):
    try:
        json = request.form['content']
        stu: scu_ics.sub.StuStudent = current_app.scu_stu_dict.pop(stu_id)
        session.pop('stu_id')
        class_list = stu[0].getListByJson(result=json)
        s = scu_ics.scuIcs(class_list=class_list)
        return send_file(
            io.BytesIO(bytes(s, encoding='utf-8')),
            attachment_filename=(os.urandom(24).hex()+'.ics'),
            as_attachment=True
        ), 200
    except ValueError as exp:
        flash(message=str(exp), category="error")
        return redirect('/', code=302)


@app.route('/', subdomain="scu", methods=['GET', 'POST'])
def scuIcs():
    try:
        scuCheckAndDelete()
        ret = None
        stu_id: int = session.get('stu_id')
        stu_id  = scuCreateStuAnyway(stu_id=stu_id)
        if request.method == "GET":
            args= {'randomid':os.urandom(16).hex().upper()}
            args.update(current_app.scu_context)
            ret = render_template("index.html", **args)
        elif request.method == "POST":
            json_ = request.form.get("content", type=str, default=None)
            if json_ != None:
                ret = scuIcsGetIcsByJson(json=json_, stu_id=stu_id)
            else:
                uname = request.form.get("j_username", type=str, default=None)
                upasswd = request.form.get(
                    "j_password", type=str, default=None)
                captcha = request.form.get("j_captcha", type=str, default=None)
                ret = scuIcsGetIcsByUname(
                    uname=uname, upasswd=upasswd, captcha=captcha, stu_id=stu_id)
        else:
            flash(message="请求方法不允许", category="error")
            ret = render_template("index.html", **current_app.scu_context)
    except Exception as exp:
        flash(message=str(exp), category="error")
        return redirect('/', code=302)
    else:
        return ret


@app.route('/captcha.jpg', subdomain="scu", methods=['GET'])
def scuCaptcha():
    try:
        stu_id: int = session.get('stu_id')
        if stu_id is None:
            current_app.scu_stu_dict[current_app.scu_stu_id] = (scu_ics.get_stu(),time.time(),current_app.scu_time_expeire)
            stu_id = session['stu_id'] = current_app.scu_stu_id
            current_app.scu_stu_id += 1
        stu: scu_ics.sub.StuStudent = current_app.scu_stu_dict[stu_id]
        captcha = stu[0].getCaptcha()
        response = make_response(captcha)
        response.headers['Content-Type'] = 'image/gif'
        return response
    except Exception as exp:
        flash(message=str(exp), category="error")
        return redirect('/', code=302)


@app.errorhandler(Exception)
def all_exception_handler(e):
    from werkzeug.exceptions import HTTPException
    if isinstance(e, HTTPException):
        flash(message=str(e.description), category="message")
    else:
        flash(message="服务器内部错误", category="message")
        e.code = 500
    flash(message="请刷新页面后重试", category="message")
    return redirect('/')


if __name__ == '__main__':
    server = pywsgi.WSGIServer(('127.0.0.1', 7997), app)
    server.serve_forever()

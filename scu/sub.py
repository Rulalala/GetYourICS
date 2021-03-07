# -*- coding = utf-8 -*-
# yxr 计算机网络课程设计大作业——课程表爬取
import hashlib
import io
import json
import os
from typing import List

import pandas  # excel操作
import requests
from PIL import Image

'''
    爬取网页
    解析数据
    保存数据
'''

base_dir = os.path.dirname(__file__)


class StuStudent(object):
    def __init__(self,) -> None:
        self.head = {
            # "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            # "Upgrade-Insecure-Requests": "1",
            # "Host": "zhjw.scu.edu.cn",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.75 Safari/537.36",
        }
        self.Urls = {
            "index": "http://zhjw.scu.edu.cn/index.jsp",
            "login": "http://zhjw.scu.edu.cn/login",
            "cn": "http://zhjw.scu.edu.cn",
            "course_list": "http://zhjw.scu.edu.cn/student/courseSelect/thisSemesterCurriculum/callback",
            "captcha": "http://zhjw.scu.edu.cn/img/captcha.jpg",
            "auth": "http://zhjw.scu.edu.cn/j_spring_security_check",
            "Curriculum": "http://zhjw.scu.edu.cn/student/courseSelect/thisSemesterCurriculum/index",
        }
        # requests.get(Urls["login"], headers=head)  # 发送GET请求
        self.session = requests.Session()
        self.head = self.session.headers.update(self.head)
        self.islogin = False

    def getCaptcha(self) -> bytes:
        res = self.session.get(self.Urls["captcha"])  # 获取验证码
        return res.content

    def getCaptchaCodeByYourself(self, captcha):
        img = Image.open(io.BytesIO(captcha))
        img.show()
        captcha = input("ENTER THE CAPTCHA\n")
        return captcha

    def __login(self, uname: str, upawd: str, captcha: str) -> None:
        username = uname
        passwd = upawd
        m = hashlib.md5()
        m.update(passwd.encode('utf-8'))
        passwd = m.hexdigest()
        form = {
            "j_username": username,
            "j_password": passwd,
            "j_captcha": captcha,
            "_spring_security_remember_me": "on"
        }
        res = self.session.post(
            self.Urls["auth"], data=form, headers=self.head)
        # TODO 增加验证登录是否成功
        if 'zhjw.scu.edu.cn/login' in res.url:
            raise ValueError("用户名/密码/验证码错误")
        elif 'http://zhjw.scu.edu.cn/' == res.url:
            self.islogin = True

    def getListByLogin(self, uname: str, upawd: str, captcha: str) -> List[str]:
        self.__login(uname, upawd, captcha)
        if not self.islogin:
            raise ValueError("登陆失败")
        res = self.session.get(
            self.Urls["course_list"], headers=self.head).text
        result = self.getListByJson(res)
        # for n in result:
        #     print(n)  # 打印一遍提取结果
        return result

    def getListByJson(self, result: str) -> list:
        try:
            data = json.loads(result)
            ret = []
            for j in readcourse2(data):
                    ret.append(j)
        except Exception:
            raise ValueError("无法解析html内容")
        else:
            return ret


def time_to_list(time_str: str) -> List[int]:
    '''strat-end'''
    ret = []
    if '-' in  time_str:
        t = time_str.split('-')
        ret = [int(x) for x in t]
        ret = [x for x in range(ret[0], ret[-1]+1)]
    elif ',' in  time_str:
        t = time_str.split(',')
        ret = [int(x) for x in t]
    else:
        raise ValueError("无法解析html内容")
    return ret

    


def week_to_list(week_str: str) -> List[int]:
    s = week_str.split('周')
    d = time_to_list(s[0])
    t_odd = []
    t_even = []
    for x in d:
        if x % 2 != 0:
            t_even.append(x)
        else:
            t_odd.append(x)
    if '单' in s:
        d = t_even
    elif "双" in s:
        d = t_odd
    elif "上" in s:
        pass
    return d


def readcourse2(data):  # 解析数据
    list1 = []
    for x in data['xkxx']:
        for class1 in x.values():
            timeList = class1['timeAndPlaceList']
            for i in timeList:
                teachername = class1['attendClassTeacher']  # 任课教师
                unit = class1['unit']  # 学分
                classtime_01=i['classWeek'] #000000000010101010000000
                campusName = i['campusName']  # 上课校区
                teachingBuildingName = i['teachingBuildingName']  # 上课教学楼
                classroomName = i['classroomName']  # 上课教室
                weekDescription = i['weekDescription']  # 上课周次
                classDay = i['classDay']  # 上课在一周中的哪一天
                classSessions = i['classSessions']  # 开始小节
                continuingSession = i['continuingSession']  # 持续小节
                coureName = i['coureName']  # 课程名
                coureNumber = i['coureNumber']  # 课程号
                coureSequenceNumber = i['coureSequenceNumber']  # 课序号
                coursePropertiesName = i['coursePropertiesName']  # 课程属性
                if classDay != 7:
                    # 四川大学按照一周的开始是周天，因此不是周天的课向后一周，开学第一周提前一周
                    weekDescription = week_to_list(
                weekDescription)
                    for x in range(len(weekDescription)):
                        weekDescription[x]+=1
                else:
                    weekDescription = week_to_list(
                weekDescription)
                # i = [coureNumber, coureSequenceNumber, coureName, teachername, coursePropertiesName, unit, classSessions,
                #  continuingSession, campusName, teachingBuildingName, classroomName, weekDescription, classDay]
                ret_list = [coureName, teachername, '-'.join([campusName, teachingBuildingName, classroomName]), '-'.join([coureSequenceNumber, coureNumber]), weekDescription, classDay, time_to_list(str(classSessions)+'-'+str(int(continuingSession)+int(classSessions)-1))]
                list1.append(ret_list)
    return list1


def saving(lists):
    courseattri = lists
    df = pandas.DataFrame(courseattri,
                          columns=['课程号', '课序号', '课程名称', '任课教师', '课程属性', '学分', '开始节次', '持续小节', '校区', '教学楼', '教室',
                                   '上课周次', '星期'])
    df.to_excel("coursetable.xlsx", index=False)


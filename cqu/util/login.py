import requests
import time
import re
import  json
from Crypto.Cipher import AES
import base64

class Student(object):
    # 设置延迟
    def wait_time(self):
        import random
        time.sleep(1 + random.randint(0, 10) / 10)

    def login(self):
        # ! url+?service=http%3A%2F%2Fmy.cqu.edu.cn%2Fauthserver%2Fauthentication%2Fcas
        # /html/head/script[2]
        url = 'http://authserver.cqu.edu.cn/authserver/login?service=http://my.cqu.edu.cn/authserver/authentication/cas'
        res = self.get(url=url)
        text = res.text
        pwdDefaultEncryptSalt = re.findall(r'.*pwdDefaultEncryptSalt.*?"(.*)"',text)[0].encode("utf-8")
        lt = re.findall(r'.*input.*name="lt".*value="(.*)".*>?',text)[0]
        dllt = re.findall(r'.*input.*name="dllt".*value="(.*)".*>?',text)[0]
        execution = re.findall(r'.*input.*name="execution".*value="(.*)".*>?',text)[0]
        _eventId = re.findall(r'.*input.*name="_eventId".*value="(.*)".*>?',text)[0]
        rmShown = re.findall(r'.*input.*name="rmShown".*value="(.*)".*>?',text)[0]
        pwd = "ao"*32 + self.password
        iv  = ("ao"*8).encode('utf-8')
        def pad(text):
            text_length = len(text)
            amount_to_pad = AES.block_size - (text_length % AES.block_size)
            if amount_to_pad == 0:
                amount_to_pad = AES.block_size
            p = chr(amount_to_pad)
            return text + p * amount_to_pad
        def encrypt(raw):
            raw = pad(raw).encode('utf-8')
            cipher = AES.new(key=pwdDefaultEncryptSalt,mode=AES.MODE_CBC,iv=iv)
            return base64.b64encode(cipher.encrypt(raw))
        encrypt_pwd = encrypt(pwd)
        payload = {
            'username':self.username,
            'password': encrypt_pwd,
            'rememberMe': 'on',
            'lt': lt,
            'dllt': dllt,
            'execution': execution,
            '_eventId': _eventId,
            'rmShown': rmShown,
        }
        res = self.post(url,data=payload)
        if "您提供的用户名或者密码有误" in res.text:
            raise ValueError("用户名或密码错误")
        else:
            return
        # hashlib.

    def loginEnroll(self):
        url =  r"http://my.cqu.edu.cn/authserver/oauth/authorize?client_id=enroll-prod&response_type=code&scope=all&state=&redirect_uri=http%3A%2F%2Fmy.cqu.edu.cn%2Fenroll%2Ftoken-index"
        res = self.get(url)
        if  "http://my.cqu.edu.cn/enroll/token-index?code=" not in  res.url:
            raise SystemError("异常返回")
        url = "http://my.cqu.edu.cn/authserver/oauth/token"
        i = res.url.index("code=")
        payload = {
            'client_id':'enroll-prod',
            'client_secret':'app-a-1234',
            'code':res.url[i+5:i+5+6],
            'redirect_uri':'http://my.cqu.edu.cn/enroll/token-index',
            'grant_type':'authorization_code',
        }
        res = self.post(url,data=payload,headers={
            'accessToken': '[object Object]',
            'Authorization': 'Basic ZW5yb2xsLXByb2Q6YXBwLWEtMTIzNA=='
            })
        if "access_token"  not in  res.text  or  res.status_code !=   200  or res.headers['Content-Type']!='application/json;charset=UTF-8':
            raise SystemError("异常返回")
        ret_dict = json.loads(res.text)
        self.token = ret_dict['access_token']
        self.enroll_header =  {'Authorization':'Bearer '+self.token}
        return

    def getBasicInfo(self):
        url  =  "http://my.cqu.edu.cn/authserver/simple-user"
        res  =  self.get(url,headers=self.enroll_header)
        if res.status_code !=   200  or res.headers['Content-Type']!='application/json;charset=UTF-8':
            raise SystemError("异常返回")
        ret_dict = json.loads(res.text)
        return ret_dict

    def getSubJson(self):
        url = "http://my.cqu.edu.cn/enroll-api/timetable/student/{}".format(self.basicInfo['code'])
        res = self.get(url,headers=self.enroll_header)
        if res.status_code !=   200  or res.headers['Content-Type']!='application/json;charset=UTF-8':
            raise SystemError("异常返回")
        ret_dict = json.loads(res.text)
        if ret_dict['status'] != 'success':
            raise SystemError("异常返回")
        return ret_dict

    # 封装get和post请求
    def get(self, url, params=None, headers=None):
        if headers == None:
            headers = self.__session.headers
        else:
            headers = self.__session.headers.update(headers)
            headers = self.__session.headers
        headers.update({'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36"})
        res = self.__session.get(url, params=params, headers=headers)
        while res.status_code != 200:
            self.wait_time()
            res = self.__session.get(url, params=params, headers=headers)
        return res

    def post(self, url, data=None, headers=None):
        if headers == None:
            headers = self.__session.headers
        else:
            headers = self.__session.headers.update(headers)
            headers = self.__session.headers
        headers.update({'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36"})
        res = self.__session.post(url, data=data, headers=headers)
        while res.status_code != 200:
            self.wait_time()
            res = self.__session.post(url, data=data, headers=headers)
        return res

    def __init__(self, username, password, proxies=None):
        self.username = username
        self.password = password
        self.proxies = proxies
        self.headers = {
            'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36"
        }
        self.__session = requests.session()
        self.login()
        self.loginEnroll()
        self.basicInfo = self.getBasicInfo()

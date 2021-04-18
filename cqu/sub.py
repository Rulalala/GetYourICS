import copy
from typing import List, Tuple

from lxml import etree

from .util import login

# 相对导入根据的是__name__与__package__的值

class CQU_Subject(object):
    def __init__(self):
        self.cqu_class_time = [None, (8, 30), (9, 25), (10, 30), (11, 25), (13, 30), (14, 25),
                  (15, 20), (16, 25), (17, 20), (19, 00), (19, 55), (20, 50), (21, 45)]

    def getSubByExcel(self,excel):
        try:
            # TODO 完成这里的编写
            pass
        except Exception:
            raise ValueError("无法解析Excel内容")
        else:
            return

    def getSubByLogin(self,uname,upass):
        self.__uname = uname
        self.__upass= upass
        self.__u = login.Student(self.__uname,self.__upass)
        return self.__subSchedule

    @property
    def __subSchedule(self):
        return copy.deepcopy(self.__subList)

    @property
    def __subject_json(self):
        return self.__u.getSubJson()

    def __charToNum(self,char):
        num_dict={u"零":0,u"一":1,u"二":2,u"三":3,u"四":4,u"五":5,u"六":6,u"日":7}
        return num_dict[char]

    def __splitTime(self,data_str:str)->Tuple[int]:
        if data_str is None:
            return tuple()
        r = []
        s = data_str.split(',')
        for x in s:
            x = x.split('-')
            if len(x) > 2:
                raise ValueError
            if len(x) > 1:
                for i in range(int(x[0]),int(x[1])+1):
                    r.append(i)
            else:
                r.append(int(x[0]))
        return tuple(r)

    @property
    def __subList(self):
        subJson  = self.__subject_json
        ret = []
        f  = lambda x:['',x][x is not None]
        fs = lambda x:['',f(x)][x is not None]
        for x in subJson['data']:
            if x['weekDayFormat'] == '':
                for  i in  range(7):
                    ret.append({
                '课程':x['courseName'],
                '任课教师':'🐟'.join([y['instrRoleCategory']+":"+y['instructorName']+'-'+y['instructorCode'] for y in x['classTimetableInstrVOList']]),
                '地点':"→".join([fs(x['roomName']),fs(x['roomBuildingCampusName'])]),
                '课程代码':x['courseCode'],
                '周次':self.__splitTime(x['teachingWeekFormat']),
                '天次':i+1,
                '节次':self.__splitTime('1-'+str(len(self.cqu_class_time)-1)),
            })
            else:
                ret.append({
                '课程':x['courseName'],
                '任课教师':'🐟'.join([y['instrRoleCategory']+":"+y['instructorName']+'-'+y['instructorCode'] for y in x['classTimetableInstrVOList']]),
                '地点':"→".join([fs(x['roomName']),fs(x['roomBuildingCampusName'])]),
                '课程代码':x['courseCode'],
                '周次':self.__splitTime(x['teachingWeekFormat']),
                '天次':self.__charToNum(x['weekDayFormat']),
                '节次':self.__splitTime(x['periodFormat']),
            })
        return ret

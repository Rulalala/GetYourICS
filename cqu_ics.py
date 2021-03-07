import datetime
from typing import List

import ics
from config import cqu_class_time, cqu_maxweek, cqu_time
from cqu import sub


def getCquClassListByUname(uname: str, upass: str)->List[str]:
    s = sub.CQU_Subject()
    subSchedule = s.getSubByLogin(uname=uname,upass=upass)
    class_list = []
    for x in subSchedule:
        t = [x['课程'], x['任课教师'], x['地点'], x['课程代码'],
             x['周次'], x['天次'], x['节次']]
        class_list.append(t)
    return class_list

def getCquClassListByExcel(excel:str)->List[str]:
    pass
    return

def cquIcs(class_list:List[str]) -> str:
    weeks = ics.weakTime(datetime.datetime(
        cqu_time[0], cqu_time[1], cqu_time[2]), max_week=cqu_maxweek)
    class_time = cqu_class_time
    ics_str = ics.ics(class_list=class_list,
                      class_time=class_time, weeks=weeks)
    return ics_str

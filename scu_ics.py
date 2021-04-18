import datetime
from typing import List

import ics
from config import scu_class_time, scu_maxweek, scu_time
from scu import sub


def get_stu():
    return sub.StuStudent()


def scuIcs(class_list:List[str]) -> str:
    weeks = ics.weakTime(datetime.datetime(
        scu_time[0], scu_time[1], scu_time[2]), max_week=scu_maxweek)
    class_time = scu_class_time
    ics_str = ics.ics(class_list=class_list,
                      class_time=class_time, weeks=weeks)
    return ics_str

import datetime
from typing import List


def weakTime(start_day: datetime.datetime, max_week: int = 20):
    """获得每一周所对应的时间

    Args:
        start_day (datetime.datetime, optional): [第一周的第一天的时间]. Defaults to datetime.datetime(2020, 8, 31).
        max_week (int, optional): [教学周的数目]. Defaults to 18.

    Returns:
        [列表]: [返回每一周对应的时间列表]
    """
    max_week += 1
    weeks = [None]
    for i in range(1, max_week):
        single_week = [None]
        for d in range(0, 7):
            single_week.append(start_day)
            start_day = start_day + datetime.timedelta(days=1)
        weeks.append(single_week)
    return weeks


def ics(weeks, class_time, class_list: List[List[str]]) -> str:
    """返回ics 文件字符串
    Args:\n
        weeks ([type]): [每周对应的日期]
        class_time ([type]): [每节课上课的时间]
        class_list (List[List[str]]): [
        [课程名:str, 教师:str, 地点:str, 课程代码:str, 周次:Tuple[int], 一周的第几天:int, 上课的节次:List[int],
        ]
    Returns:
        str: [ics]

    Example:
    class_time = [None, (8, 0), (8, 55), (10, 15), (11, 10), (14, 00), (14, 55),
            (16, 15), (17, 10), (19, 0), (19, 55), (20, 50), (21, 45)]

    """

    iCalHeader = '''BEGIN:VCALENDAR
METHOD:PUBLISH
VERSION:2.0
X-WR-CALNAME:课表
PRODID:-//Apple Inc.//Mac OS X 10.15.6//EN
X-WR-TIMEZONE:Asia/Shanghai
CALSCALE:GREGORIAN
BEGIN:VTIMEZONE
TZID:Asia/Shanghai
END:VTIMEZONE'''

    create_now = datetime.datetime.now() - datetime.timedelta(hours=8)
    all_v_event = ""

    for single_class in class_list:
        [Name, Teacher, Location, class_id, classWeek,
            class_week_day, class_order] = single_class[:]
        # Title = Location + " - " + Name
        Title = Name
        for time_week in classWeek:
            try:
                class_date = weeks[time_week][class_week_day]
                start_time = class_time[class_order[0]]
                end_time = class_time[class_order[-1]]
                classstart_time = class_date + \
                    datetime.timedelta(
                        minutes=start_time[0] * 60 + start_time[1])
                classend_time = class_date + \
                    datetime.timedelta(
                        minutes=end_time[0] * 60 + end_time[1] + 45)
                Description = class_id + " 任课教师: " + Teacher
                vEvent = "\nBEGIN:VEVENT"
                vEvent += "\nDTEND;TZID=Asia/Shanghai:" + \
                    classend_time.strftime('%Y%m%dT%H%M%S')
                vEvent += "\nDTSTART;TZID=Asia/Shanghai:" + \
                    classstart_time.strftime('%Y%m%dT%H%M%S')
                vEvent += "\nSUMMARY:" + Title
                vEvent += "\nSTATUS:CONFIRMED\nSEQUENCE:0\nTRANSP:OPAQUE"
                vEvent += "\nLOCATION:"+Location
                vEvent += "\nDESCRIPTION:" + Description
                vEvent += "\nEND:VEVENT"
                all_v_event += vEvent
            except Exception:
                continue
    all_v_event += "\nEND:VCALENDAR"
    ics_string = iCalHeader + all_v_event
    return ics_string

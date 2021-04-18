<
!DOCTYPE html >
    <
    html >
    <
    head >
    <
    meta http - equiv = "X-UA-Compatible"
content = "IE=edge,chrome=1" / >
    <
    meta charset = "utf-8" / >

    <
    title > 本学期课程表 < /title> <
    link rel = "shortcut icon"
href = "/img/icon/favicon.ico"
type = "image/x-icon" / >
    <
    meta name = "description"
content = "overview &amp; stats" / >

    <
    !--bootstrap & fontawesome-- >
    <
    !-- < link rel = "stylesheet"
type = "text/css"
href = "/static/template.css" / > -- >

    <
    link rel = "stylesheet"
href = "/assets/css/bootstrap.min.css" / >

    <
    link rel = "stylesheet"
href = "/css/newjw2014/style-main.css" / >


    <
    link rel = "stylesheet"
href = "/assets/font-awesome/4.1.0/css/font-awesome.min.css" / >

    <
    !--page specific plugin styles-- >
    <
    link rel = "stylesheet"
href = "/assets/css/jquery-ui.min.css"
type = "text/css" / >

    <
    link rel = "stylesheet"
href = "/assets/css/chosen.css" / >



    <
    !--page specific plugin styles-- >

    <
    !--jquery ui grid-- >

    <
    !--jquery ui grid-- >

    <
    !--text fonts-- >

    <
    link rel = "stylesheet"
href = "/assets/css/fonts-woff2.css" / >

    <
    !--ace styles-- >
    <
    link rel = "stylesheet"
href = "/assets/css/ace.min.css"
id = "main-ace-style" / >

    <
    !--[
        if lte IE 9
    ] >
    <
    link rel = "stylesheet"
href = "/assets/css/ace-part2.min.css" / >
    <
    ![endif]-- >



    <
    !--[
        if lte IE 9
    ] >
    <
    link rel = "stylesheet"
href = "/assets/css/ace-ie.min.css" / >
    <
    ![endif]-- >

    <
    !--inline styles related to this page-- >

    <
    !--ace settings handler-- >
    <
    script src = "/assets/js/ace-extra.min.js" > < /script>

    <
    !--HTML5shiv and Respond.js
for IE8 to support HTML5 elements and media queries-- >

<
!--[
    if lte IE 8
] >
<
script src = "/assets/js/html5shiv.min.js" > < /script> <
    script src = "/assets/js/respond.min.js" > < /script> <
    ![endif]-- >
    <
    !--basic scripts-- >

    <
    !--[
        if !IE
    ] > -- >
    <
    script src = "/js/jQuery/jquery-3.4.1.min.js" > < /script> <
    script src = "/js/jQuery/jquery-migrate-3.1.0.min.js" > < /script> <
    !-- < ![endif]-- >

    <
    !--[
        if IE
    ] >
    <
    script src = "/js/jQuery/jquery-3.4.1.min.js" > < /script> <
    script src = "/js/jQuery/jquery-migrate-1.4.1.min.js" > < /script> <
    ![endif]-- >

    <
    script type = "text/javascript" >
    if ('ontouchstart' in document.documentElement) document.write("<script src='/assets/js/jquery.mobile.custom.min.js'>" + "<" + "/script>"); <
/script>


<
!--page specific plugin scripts-- >
<
script type = "text/javascript" >
    $.ajaxPrefilter(function (s) {
        if (s.crossDomain) {
            s.contents.javascript = false;
        }
    }); <
/script>

<
!--[
    if lte IE 8
] >
<
script src = "/assets/js/excanvas.min.js" > < /script> <
    ![endif]-- >


    <
    script type = "text/javascript"
src = "/js/My97DatePicker/WdatePicker.js" > < /script>

    <
    script type = "text/javascript"
src = "/assets/js/chosen.jquery.min.js" > < /script>

    <
    !--ace scripts-- >
    <
    script src = "/assets/js/ace-elements.min.js" > < /script> <
    script src = "/assets/js/ace.min.js" > < /script>



    <
    script type = "text/javascript"
src = "/js/jQuery/jquery.cookie.js" > < /script>

    <
    !--jqgrid-- >

    <
    !--jqgrid-- >

    <
    !--commoncss-- >
    <
    link rel = "stylesheet"
href = "/css/commons/commoncss.css"
type = "text/css" / >
    <
    !--commoncss-- >

    <
    !--alert-- >
    <
    script type = "text/javascript"
src = "/assets/js/jquery-ui.min.js" > < /script>

    <
    script type = "text/javascript"
src = "/js/customjs/pagination.js" > < /script> <
    script type = "text/javascript"
src = "/js/customjs/urpalert.js" > < /script> <
    script type = "text/javascript"
src = "/assets/layer/layer.js" > < /script>

    <
    script src = "/assets/bootstrap/3.2.0/js/bootstrap.min.js" > < /script> <
    !--alert-- >

    <
    !--light bootstrap 两个图表-- >

    <
    !--light bootstrap 两个图表-- >

    <
    meta http - equiv = "Content-Type"
content = "text/html; charset=UTF-8" >

    <
    link rel = "stylesheet"
href = "/css/commons/kcbcolor.css"
type = "text/css" > < /link> <
    script type = "text/javascript"
src = "/js/json/json2.js" > < /script> <
    script type = "text/javascript"
src = "/js/customjs/coursetable.js" > < /script> <
    script type = "text/javascript"
src = "/js/customjs/kcbcolor.js" > < /script> <
    script type = "text/javascript"
src = "/js/html2canvas/html2canvas.min.js" > < /script> <
    script type = "text/javascript"
src = "/js/customjs/browser.js" > < /script>





    <
    script type = "text/javascript" >
    /* var title_dy = "2020-2021学年秋学期学生课表";
        var subtitle_dy = "学院：计算机学院 专业：计算机科学与技术 学号：2018141461025 姓名：闫薪如 打印时间：2020-12-03";
        var titleStr = "<div align='center'>"+title_dy+"</div>" + "<div align='center'>"+subtitle_dy+"</div>";
        //简单表格
	function jTable(objid, pn){
		alert();
		var data = getSectionAndTime(pn,"j");
		var jc = data["section"];
		var firstday = data["firstday"];
		if (firstday == undefined) {
			firstday = 1;
		}
		var cth = courseTableHeadLayout(jc, "j", firstday);
		var swl = courseTableBodyLayout(jc, "sw", "j", firstday);
		var xwl = courseTableBodyLayout(jc, "xw", "j", firstday);
		var wsl = courseTableBodyLayout(jc, "ws", "j", firstday);
		
		var t = titleStr + "<table class='table table-bordered' id='courseTable'><thead><tr id='courseTableHead'>"
			+ cth
			+ "</tr></thead><tbody id='courseTableBody'>"
			+ swl + xwl + wsl
			+ "</tbody></table>";
		document.getElementById(objid).innerHTML = t;
		fillSimepleSectionTime(jc.tjc);
	} */
    var nosjddData = [];

$(function () {
    searchSemester();
});


function searchSemester() {
    url = "/student/courseSelect/thisSemesterCurriculum/ajaxStudentSchedule/curr/callback";
    $.get(url, function (courseInfo) {
        var infoArr = JSON.parse(JSON.stringify(courseInfo));
        var hasTime = infoArr["xkxx"];
        var dateList = infoArr["dateList"];
        var allUnits = infoArr["allUnits"];

        coursetable.init("mycoursetable", "");
        $("#temp_title").remove();
        $("#temp_subtitle").remove();
        fillCourseTable(hasTime);
        fillInfoList(dateList, allUnits);
        divBuild();
    });
}

function fillInfoList(dateList, allUnits) {
    var tcont = "<div class='tab-content'><ul class='nav nav-tabs' id='myTab'>";
    tcont += "";
    for (var i = 0; i < dateList.length; i++) {
        var date = dateList[i];
        tcont += "<li";
        if (i == 0) {
            tcont += " class='active'";
        }
        tcont += ">";
        if (date.programPlanCode == null) {
            tcont += "<a href='#tab' data-toggle='tab'>没有培养计划的课程&nbsp;&nbsp;总学分：" + date.totalUnits + "</a>";
        } else {
            tcont += "<a href='#tab" + date.programPlanCode + "' data-toggle='tab'>" + date.programPlanName + "&nbsp;&nbsp;总学分：" + date.totalUnits + "</a>";
        }
        tcont += "</li>";
    }
    tcont += "</ul>";


    for (var i = 0; i < dateList.length; i++) {
        var date = dateList[i];
        var id = "tab" + date.programPlanCode;

        if (date.programPlanCode == null) {
            id = "tab";
        }
        tcont += "<div class='tab-pane fade ";
        if (i == 0) {
            tcont += " in active";
        }
        tcont += "' id='" + id + "'>";
        tcont += "<table class='table table-striped table-bordered'>";

        tcont += "<thead><tr>";
        tcont += "<th style='font-weight: bold;'>课程号</th><th style='font-weight: bold;'>课程名</th>";
        if ("100010" != "100006") {
            tcont += "<th style='font-weight: bold;'>教学日历</th>";
        }
        tcont += "<th style='font-weight: bold;'>教学大纲</th><th style='font-weight: bold;'>课序号</th>";
        tcont += "<th style='font-weight: bold;'>学分</th><th style='font-weight: bold;'>课程属性</th><th style='font-weight: bold;'>课程类别</th><th style='font-weight: bold;'>考试类型</th><th style='font-weight: bold;'>教师</th>";
        tcont += "<th style='font-weight: bold;'>修读方式</th><th style='font-weight: bold;'>选课状态</th>";
        if ("100006" == "100006") {
            tcont += "<th style='font-weight: bold;'>选课限制说明</th>";
            tcont += "<th style='font-weight: bold;'>QQ/微信群</th>";
        }
        tcont += "<th style='font-weight: bold;'>时间</th>";
        tcont += "<th style='font-weight: bold;'>地点</th>";
        tcont += "</tr></thead><tbody>";
        if (date.selectCourseList != null) {
            for (var j = 0; j < date.selectCourseList.length; j++) {
                var selectCourse = date.selectCourseList[j];
                var classInfo = "";
                var size = 0;
                if (selectCourse.timeAndPlaceList != null && selectCourse.timeAndPlaceList.length > 0) {
                    for (var k = 0; k < selectCourse.timeAndPlaceList.length; k++) {
                        var timeAndPlace = selectCourse.timeAndPlaceList[k];
                        if (selectCourse.id.coureNumber == timeAndPlace.coureNumber && selectCourse.id.coureSequenceNumber == timeAndPlace.coureSequenceNumber) {
                            if (size != 0) {
                                classInfo += "<tr>";
                            }
                            size++;
                            classInfo += "<td>" + (timeAndPlace.weekDescription == null ? "" : timeAndPlace.weekDescription) + ">>";
                            classInfo += "星期" + (timeAndPlace.classDay == null ? "" : urp.translationWeek(timeAndPlace.classDay)) + ">>";
                            classInfo += (timeAndPlace.classSessions == null ? "" : urp.mergeSession(timeAndPlace.classSessions, timeAndPlace.continuingSession)) + "</td>";
                            //如果是山西农业大学信息学院
                            if ("100023" == "100006") {
                                classInfo += "<td>";
                            } else {
                                classInfo += "<td>" + (timeAndPlace.campusName == null ? "" : timeAndPlace.campusName) + ">>";
                            }
                            classInfo += (timeAndPlace.teachingBuildingName == null ? "" : timeAndPlace.teachingBuildingName) + ">>";
                            classInfo += (timeAndPlace.classroomName == null ? "" : timeAndPlace.classroomName) + "</td></tr>";
                        }
                    }
                }
                if (size == 0) {
                    classInfo += "<td></td>";
                    classInfo += "<td></td></tr>";
                    size = 1;

                    //存放未分配时间地点的选课信息
                    var tempjson = {};
                    tempjson.kch = selectCourse.id.coureNumber == null ? "" : selectCourse.id.coureNumber;
                    tempjson.kcm = selectCourse.courseName == null ? "" : selectCourse.courseName;
                    tempjson.kxh = selectCourse.id.coureSequenceNumber == null ? "" : selectCourse.id.coureSequenceNumber;
                    tempjson.xf = selectCourse.unit == null ? "" : selectCourse.unit;
                    tempjson.kcsx = selectCourse.coursePropertiesName == null ? "" : selectCourse.coursePropertiesName;
                    tempjson.kclb = selectCourse.courseCategoryName == null ? "" : selectCourse.courseCategoryName;
                    tempjson.kslx = selectCourse.examTypeName == null ? "" : selectCourse.examTypeName;
                    tempjson.js = selectCourse.attendClassTeacher == null ? "" : selectCourse.attendClassTeacher;
                    tempjson.xdfs = selectCourse.studyModeName == null ? "" : selectCourse.studyModeName;
                    tempjson.xkzt = selectCourse.selectCourseStatusName == null ? "" : selectCourse.selectCourseStatusName;
                    if ("100006" != "100006") {
                        tempjson.xkxz = selectCourse.restrictedCondition == null ? "" : selectCourse.restrictedCondition;
                    }
                    nosjddData.push(tempjson);
                }
                tcont += "<tr>";
                tcont += "<td rowspan='" + size + "'>" + (selectCourse.id.coureNumber == null ? "" : selectCourse.id.coureNumber) + "</td>";
                tcont += "<td rowspan='" + size + "'>" + (selectCourse.courseName == null ? "" : selectCourse.courseName) + "</td>";
                if ("100010" != "100006") {
                    tcont += "<td rowspan='" + size + "'><div class='btn-group'>\
									<button data-toggle='dropdown' class='btn btn-xs btn-primary btn-white dropdown-toggle'>\
										日历\
									<i class='ace-icon fa fa-angle-down icon-on-right'></i>\
									</button>\
									<ul class='dropdown-menu'>";
                    var js = selectCourse.rlFlag.split("|");
                    for (var m = 0; m < js.length; m++) {
                        if (js[m] != "") {
                            var jss = js[m].split(",");
                            tcont += "<li><a href='javascript:void(0);' onclick='toClick(\"" + selectCourse.id.executiveEducationPlanNumber + "\", \"" + selectCourse.id.coureNumber +
                                "\", \"" + selectCourse.id.coureSequenceNumber + "\", \"" + jss[0] + "\", \"rl\", this);'>" + jss[1] + "</a></li>";
                        }
                    }
                    tcont += "</ul></div></td>";
                    tcont += "<td rowspan='" + size + "'><div class='btn-group'>\
									<button data-toggle='dropdown' class='btn btn-xs btn-primary btn-white dropdown-toggle'>\
										大纲\
										<i class='ace-icon fa fa-angle-down icon-on-right'></i>\
									</button>\
									<ul class='dropdown-menu'>";
                    var js = selectCourse.dgFlag.split("|");
                    var ywjs = selectCourse.ywdgFlag.split("|");
                    for (var m = 0; m < js.length; m++) {
                        if (js[m] != "") {
                            var jss = js[m].split(",");
                            var ywjss = ywjs[m].split(",");
                            tcont += "<li><a href='javascript:void(0);' onclick='toClick(\"" + selectCourse.id.executiveEducationPlanNumber + "\", \"" + selectCourse.id.coureNumber +
                                "\", \"" + selectCourse.id.coureSequenceNumber + "\", \"" + jss[0] + "\", \"dg\", this);'>" + jss[1] + "</a></li>";
                            if (ywjss[1].indexOf("（无）") == -1) {
                                tcont += "<li><a href='javascript:void(0);' onclick='toClick(\"" + selectCourse.id.executiveEducationPlanNumber + "\", \"" + selectCourse.id.coureNumber +
                                    "\", \"" + selectCourse.id.coureSequenceNumber + "\", \"" + ywjss[0] + "\", \"ywdg\", this);'>" + ywjss[1] + "</a></li>";
                            }
                        }
                    }
                    tcont += "</ul></div></td>";
                } else {
                    tcont += "<td rowspan='" + size + "'> <button onclick='downloadOutline(\"" + selectCourse.id.coureNumber + "\");'>下载大纲</button></td>";

                }
                console.log(selectCourse);
                tcont += "<td rowspan='" + size + "'>" + (selectCourse.id.coureSequenceNumber == null ? "" : selectCourse.id.coureSequenceNumber) + "</td>";
                tcont += "<td rowspan='" + size + "'>" + (selectCourse.unit == null ? "" : selectCourse.unit) + "</td>";
                tcont += "<td rowspan='" + size + "'>" + (selectCourse.coursePropertiesName == null ? "" : selectCourse.coursePropertiesName) + "</td>";
                tcont += "<td rowspan='" + size + "'>" + (selectCourse.courseCategoryName == null ? "" : selectCourse.courseCategoryName) + "</td>";
                tcont += "<td rowspan='" + size + "'>" + (selectCourse.examTypeName == null ? "" : selectCourse.examTypeName) + "</td>";
                tcont += "<td rowspan='" + size + "'>" + (selectCourse.attendClassTeacher == null ? "" : selectCourse.attendClassTeacher) + "</td>";
                tcont += "<td rowspan='" + size + "'>" + (selectCourse.studyModeName == null ? "" : selectCourse.studyModeName) + "</td>";
                tcont += "<td rowspan='" + size + "'>" + (selectCourse.selectCourseStatusName == null ? "" : selectCourse.selectCourseStatusName) + "</td>";
                if ("100006" == "100006") {
                    tcont += "<td rowspan='" + size + "'>" + (selectCourse.restrictedCondition == null ? "" : selectCourse.restrictedCondition) + "</td>";
                    if (selectCourse.sfyx == "1") {
                        tcont += "<td style='cursor:pointer;' rowspan='" + size + "' title='点击即可放大图片'><img src='/student/courseSelect/thisSemesterCurriculum/erwm/" + selectCourse.id.executiveEducationPlanNumber + "/" + selectCourse.id.coureNumber + "/" + selectCourse.id.coureSequenceNumber + "' style='width: 60px; height: 60px;'\
            	     	       onclick='aaa(this);'></td>";
                    } else {
                        if (selectCourse.qqqh != "") {
                            tcont += "<td rowspan='" + size + "'>" + (selectCourse.qqqh == null ? "" : selectCourse.qqqh) + "</td>";
                        } else {
                            tcont += "<td rowspan='" + size + "'></td>";
                        }
                    }
                }
                tcont += classInfo;
            }
        }
        tcont += "</tbody></table>";

        tcont += "</div>";
    }
    tcont += "</div>";
    tcont += "<div style='text-align:right'>总学分：" + allUnits + "</div>";
    $("#infoTable").html(tcont);

}

function fillCourseTable(hasTime) {
    $('#course-tbody').html("");
    var size = 0;
    var trHt = "<h4 class='header smaller lighter grey'><i class='fa fa-info-circle'></i> 课程信息</h4>" +
        "<div class='tab-pane active' id='tab2155'><table class='table table-striped table-bordered'>" +
        "<thead><tr><td style='font-weight: bold;'>课程号</td><td style='font-weight: bold;'>课程名</td>";
    if ("100010" != "100006") {
        trHt += "<td style='font-weight: bold;'>教学日历</td>";
    }
    trHt += "<td style='font-weight: bold;'>教学大纲</td>" +
        "<td style='font-weight: bold;'>课序号</td><td style='font-weight: bold;'>时间</td>" +
        "<td style='font-weight: bold;'>地点</td></tr></thead><tbody>";
    $.map(hasTime[0], function (val, key) {

        var week = "",
            courseinfo = null,
            temp;

        for (var i = 0, ten = val.timeAndPlaceList.length; i < ten; i++) {
            var temp_sjdd = val.timeAndPlaceList[i];
            var id = temp_sjdd.classDay + "_" + temp_sjdd.classSessions;
            var teacherInfo = val.rlFlag.split("|");
            if ($("#" + id + " div.class_div").size() < 2) {
                var c_names = colorClass.getDivColorClass(val.id.coureNumber + "_" + val.id.coureSequenceNumber).split(",");
                var endJc = temp_sjdd.classSessions + temp_sjdd.continuingSession - 1;
                var cont = "";
                if ("100027" == "100006") {
                    cont = "<div style='margin:0;' class='class_div box_font " + c_names[0] + "' classNum = '" + temp_sjdd.continuingSession + "'>" +
                        "<p class='" + c_names[1] + "'>" + val.courseName + "</p>" +
                        "<p class='kcb_p_gray'>（" + val.id.coureNumber + "-" + val.id.coureSequenceNumber + "）</p>" +
                        "<p class='" + c_names[2] + "'>" + temp_sjdd.campusName + temp_sjdd.teachingBuildingName + temp_sjdd.classroomName + "</p>" +
                        "<p class='kcb_p_gray'>" + temp_sjdd.weekDescription + "（" + temp_sjdd.classSessions + "-" + endJc + "节）</p>" +
                        "<p class='kcb_p_gray'>" + val.attendClassTeacher + "</p>"
                    "<p class='kcb_p_gray'>" + (temp_sjdd.bm == null ? "" : temp_sjdd.bm) + "</p>";
                } else {
                    cont = "<div style='margin:0;' class='class_div box_font " + c_names[0] + "' classNum = '" + temp_sjdd.continuingSession + "'>" +
                        "<p class='" + c_names[1] + "'>" + val.courseName + "_" + val.id.coureSequenceNumber + "</p>" +
                        "<p class='kcb_p_gray'>" + val.attendClassTeacher + "</p>" +
                        "<p class='kcb_p_gray'>" + temp_sjdd.weekDescription + "</p>" +
                        "<p class='kcb_p_gray'>" + temp_sjdd.classSessions + "-" + endJc + "节</p>";
                    if ("100023" == "100006") {
                        cont += "<p class='" + c_names[2] + "'>" + temp_sjdd.teachingBuildingName + temp_sjdd.classroomName + "</p>"

                    } else {
                        cont += "<p class='" + c_names[2] + "'>" + temp_sjdd.campusName + temp_sjdd.teachingBuildingName + temp_sjdd.classroomName + "</p>"
                    }
                }
                cont += "<div class='tools'>";
                if ("100010" != "100006") {
                    cont += "<a style='cursor:pointer;' onclick='toClickInfo(\"" + val.id.executiveEducationPlanNumber + "\", \"" + val.id.coureNumber +
                        "\", \"" + val.id.coureSequenceNumber + "\",\"" + val.rlFlag + "\", \"rl\");'><i class='ace-icon fa fa-calendar'></i></a>" +
                        "<a style='cursor:pointer;' onclick='toClickInfo(\"" + val.id.executiveEducationPlanNumber + "\", \"" + val.id.coureNumber +
                        "\", \"" + val.id.coureSequenceNumber + "\", \"" + val.dgFlag + "\", \"dg\");'><i class='ace-icon fa fa-tasks'></i></a>";
                } else {
                    cont += "<a style='cursor:pointer;' onclick='downloadOutline(\"" + val.id.coureNumber + "\");'><i class='ace-icon fa fa-tasks'></i></a>";
                }
                cont += "</div></div>";
                week = "";

                if ($("#" + id).html() == "") {
                    $("#" + id).html(cont);
                } else {
                    $("#" + id).append(cont);
                }

            } else {
                trHt += "<tr><td>" + val.id.coureNumber + "</td><td>" + val.courseName + "</td>";
                if ("100010" != "100006") {
                    trHt += "<td><div class='btn-group'>\
									<button data-toggle='dropdown' class='btn btn-xs btn-primary btn-white dropdown-toggle'>\
										日历\
									<i class='ace-icon fa fa-angle-down icon-on-right'></i>\
									</button>\
									<ul class='dropdown-menu'>";
                    var js = val.rlFlag.split("|");
                    for (var m = 0; m < js.length; m++) {
                        if (js[m] != "") {
                            var jss = js[m].split(",");
                            trHt += "<li><a href='javascript:void(0);' onclick='toClick(\"" + val.id.executiveEducationPlanNumber + "\", \"" + val.id.coureNumber +
                                "\", \"" + val.id.coureSequenceNumber + "\", \"" + jss[0] + "\", \"rl\", this);'>" + jss[1] + "</a></li>";
                        }
                    }
                    trHt += "</ul></div></td>";
                    trHt += "<td><div class='btn-group'>\
									<button data-toggle='dropdown' class='btn btn-xs btn-primary btn-white dropdown-toggle'>\
										大纲\
										<i class='ace-icon fa fa-angle-down icon-on-right'></i>\
									</button>\
									<ul class='dropdown-menu'>";
                    var js = val.dgFlag.split("|");
                    for (var m = 0; m < js.length; m++) {
                        if (js[m] != "") {
                            var jss = js[m].split(",");
                            trHt += "<li><a href='javascript:void(0);' onclick='toClick(\"" + val.id.executiveEducationPlanNumber + "\", \"" + val.id.coureNumber +
                                "\", \"" + val.id.coureSequenceNumber + "\", \"" + jss[0] + "\", \"dg\", this);'>" + jss[1] + "</a></li>";
                        }
                    }
                    trHt += "</ul></div></td>";
                } else {
                    trHt += "<td rowspan='" + size + "'> <button onclick='downloadOutline(\"" + val.id.coureNumber + "\");'>下载大纲</button></td>";
                }
                trHt += "<td>" + val.id.coureSequenceNumber + "</td><td>" + temp_sjdd.weekDescription + ">>星期" + (temp_sjdd.classDay == null ? "" : urp.translationWeek(temp_sjdd.classDay)) + ">>";
                trHt += (temp_sjdd.classSessions == null ? "" : urp.mergeSession(temp_sjdd.classSessions, temp_sjdd.continuingSession)) + "</td>";
                trHt += "<td>" + temp_sjdd.campusName + ">>" + temp_sjdd.teachingBuildingName + ">>" + temp_sjdd.classroomName + "</td></tr>";
                size++;
            }
        }


        //                for (var i = 0; i < val.timeAndPlaceList.length; i++) {
        //                    var temp_sjdd = val.timeAndPlaceList[i];
        //                    var id = temp_sjdd.classDay + "_" + temp_sjdd.classSessions;
        //                    var teacherInfo = val.rlFlag.split("|");
        //                    if ($("#" + id + " div.class_div").size() < 2) {
        //                        var c_names = colorClass.getDivColorClass(val.id.coureNumber + "_" + val.id.coureSequenceNumber).split(",");
        //                        var endJc = temp_sjdd.classSessions + temp_sjdd.continuingSession - 1;
        //                        var cont = "<div class='class_div box_font div_style " + c_names[0] + " ace-thumbnails1' classNum = '" + temp_sjdd.continuingSession + "'>"
        //                                + "<p class='" + c_names[1] + "'>" + val.courseName + "_" + val.id.coureSequenceNumber + "</p>"
        //                                + "<p class='kcb_p_gray'>" + val.attendClassTeacher + "</p>"
        //                                + "<p class='kcb_p_gray'>" + temp_sjdd.weekDescription + "</p>"
        //                                + "<p class='kcb_p_gray'>" + temp_sjdd.classSessions + "-" + endJc + "节</p>"
        //                                + "<p class='" + c_names[2] + "'>" + temp_sjdd.campusName + temp_sjdd.teachingBuildingName + temp_sjdd.classroomName + "</p>"
        //                                + "<div class='tools'><a style='cursor:pointer;' onclick='toClickInfo(\"" + val.id.executiveEducationPlanNumber + "\", \"" + val.id.coureNumber
        //                                + "\", \"" + val.id.coureSequenceNumber + "\",\"" + val.rlFlag + "\", \"rl\");'><i class='ace-icon fa fa-link'></i></a>"
        //                                + "<a style='cursor:pointer;' onclick='toClickInfo(\"" + val.id.executiveEducationPlanNumber + "\", \"" + val.id.coureNumber
        //                                + "\", \"" + val.id.coureSequenceNumber + "\", \"" + val.dgFlag + "\", \"dg\");'><i class='ace-icon fa fa-paperclip'></i></a></div></div>";
        //                        if ($("#" + id).html() == "") {
        //                            $("#" + id).html(cont);
        //                        } else {
        //                            $("#" + id).append(cont);
        //                        }
        //                    } else {
        //                        trHt += "<tr><td>" + val.id.coureNumber + "</td><td>" + val.courseName + "</td>";
        //
        //                        trHt += "<td><div class='btn-group'>\
        //								<button data-toggle='dropdown' class='btn btn-xs btn-primary btn-white dropdown-toggle'>\
        //									日历\
        //								<i class='ace-icon fa fa-angle-down icon-on-right'></i>\
        //								</button>\
        //								<ul class='dropdown-menu'>";
        //                        var js = val.rlFlag.split("|");
        //                        for (var m = 0; m < js.length; m++) {
        //                            if (js[m] != "") {
        //                                var jss = js[m].split(",");
        //                                trHt += "<li><a href='javascript:void(0);' onclick='toClick(\"" + val.id.executiveEducationPlanNumber + "\", \"" + val.id.coureNumber +
        //                                        "\", \"" + val.id.coureSequenceNumber + "\", \"" + jss[0] + "\", \"rl\", this);'>" + jss[1] + "</a></li>";
        //                            }
        //                        }
        //                        trHt += "</ul></div></td>";
        //                        trHt += "<td><div class='btn-group'>\
        //								<button data-toggle='dropdown' class='btn btn-xs btn-primary btn-white dropdown-toggle'>\
        //									大纲\
        //									<i class='ace-icon fa fa-angle-down icon-on-right'></i>\
        //								</button>\
        //								<ul class='dropdown-menu'>";
        //                        var js = val.dgFlag.split("|");
        //                        for (var m = 0; m < js.length; m++) {
        //                            if (js[m] != "") {
        //                                var jss = js[m].split(",");
        //                                trHt += "<li><a href='javascript:void(0);' onclick='toClick(\"" + val.id.executiveEducationPlanNumber + "\", \"" + val.id.coureNumber +
        //                                        "\", \"" + val.id.coureSequenceNumber + "\", \"" + jss[0] + "\", \"dg\", this);'>" + jss[1] + "</a></li>";
        //                            }
        //                        }
        //                        trHt += "</ul></div></td>";
        //                        trHt += "<td>" + val.id.coureSequenceNumber + "</td><td>" + temp_sjdd.weekDescription + "</td><td>" + (temp_sjdd.classDay == null ? "" : urp.translationWeek(temp_sjdd.classDay)) + "</td>";
        //                        trHt += "<td>" + (temp_sjdd.classSessions == null ? "" : urp.mergeSession(temp_sjdd.classSessions, temp_sjdd.continuingSession)) + "</td>";
        //                        trHt += "<td>" + temp_sjdd.campusName + "</td><td>" + temp_sjdd.teachingBuildingName + "</td><td>" + temp_sjdd.classroomName + "</td></tr>";
        //                        size++;
        //                    }
        //                }
    });
    if (size > 0) {
        $("#h4_id1").html("<i class='fa fa-calendar'></i> 选课管理（已安排的课程）<span class='label label-lg label-yellow arrowed-in'>当前有" + size + "门课程未显示，请点<a style='cursor:pointer;' onclick='queryOtherCourse();return false;'>这里</a>查看</span><span class='right_top_oper'><button class='btn btn-info btn-xs btn-round' onclick='dy();'><i class='ace-icon fa fa-print bigger-120'></i>打印课表</button>" +
            //                        "<button class='btn btn-info btn-xs btn-round' type='button' onclick='exportTableToPdf();return false;'><i class='fa fa-cloud-download bigger-120'></i> 导出课表</button>" +
            "</span>");
        trHt += "</tbody></table></div>";
        $("#other-course").html(trHt);
    }
}

function queryOtherCourse() {
    $("#other-course").show();
}

$(window).resize(function () {
    divBuild();
});

function divBuild() {
    $("div.class_div").removeAttr("style");
    $("div.class_div").css("position", "absolute");
    if ("100027" == "100006") {
        $("div.class_div").css("text-align", "center");
    }
    var tdWidth = $("#mycoursetable td").css("width");
    $("div.class_div").each(function (i, v) {
        if ($(v).siblings().size() > 0) {
            $(v).css("width", tdWidth.substring(0, tdWidth.length - 2) / 2 + "px");
        } else {
            $(v).css("width", tdWidth);
        }
    });
    var hd = 0;
    $("div.class_div").each(function (i, v) {
        if ($(v).height() / $(v).attr("classNum") > hd) {
            hd = $(v).height() / $(v).attr("classNum");
        }
    });
    $("#courseTableBody tr").height(hd + "px");
    var tdWidth = $("#mycoursetable td").css("width");
    $("div.class_div").each(function (i, v) {
        $(v).css("height", $("#courseTableBody tr").height() * $(v).attr("classNum") + "px");
        $(v).css("top", $(v).parent("td").offset().top - $('#page-content-template').offset().top - 12);
        if ($(v).siblings().size() > 0) {
            if ($(v).next().size() > 0) {
                $(v).css("left", $(v).parent("td").offset().left - $('#page-content-template').offset().left + "px");
            } else {
                $(v).css("left", $(v).parent("td").offset().left - $('#page-content-template').offset().left + tdWidth.substring(0, tdWidth.length - 2) / 2 + "px");
            }
        } else {
            $(v).css("left", $(v).parent("td").offset().left - $('#page-content-template').offset().left + "px");
        }
    });
}

function toClick1(zxjxjhh, kch, kxh) {
    window.location.href = "/student/courseSelect/thisSemesterCurriculum/" + zxjxjhh + "/" + kch + "/" +
        kxh;
}

function toClick(zxjxjhh, kch, kxh, jsh, lx, obj) {
    if ($(obj).html().indexOf("（无）") != -1) {
        urp.alert("该教师还没有上传！");
        return;
    } else {
        var form = document.getElementById("form1");
        form.action = "/student/courseSelect/thisSemesterCurriculum/dgrl/" + zxjxjhh + "/" + kch + "/" +
            kxh + "/" + jsh + "/" + lx;
        form.target = "_blank";
        form.method = "post";
        form.submit();
    }
}

function toClickInfo(zxjxjhh, kch, kxh, rlFlag, lx) {
    var teacher = rlFlag.split("|");
    if (teacher.length > 1) {
        //var modal = addslidersModel("right-menu", "60%");
        var rad = "";
        for (var i = 0; i < teacher.length; i++) {
            var info = teacher[i].split(",");
            rad += "<label><input name='jsh' id='" + info[0] + "' type='radio' class='ace' value='" + info[0] + "' ";
            if (i == 0) {
                rad += "checked='checked'";
            }
            rad += "><span class='lbl'>" + info[1] + "</span></label>";
        }
        layer.confirm(rad, {
            btn: ['确定', '取消'] //按钮
        }, function () {
            var jsh = $('input:radio:checked').val();
            var jsm = $('input:radio[name="jsh"]:checked + span').text();
            if (jsm.indexOf("（无）") != -1) {
                if (lx == "rl") {
                    urp.alert("该教师还没有上传日历！");
                } else {
                    urp.alert("该教师还没有上传大纲！");
                }
                return;
            } else {
                var form = document.getElementById("form1");
                form.action = "/student/courseSelect/thisSemesterCurriculum/dgrl/" + zxjxjhh + "/" + kch + "/" +
                    kxh + "/" + jsh + "/" + lx;
                form.target = "_blank";
                form.method = "post";
                form.submit();
            }
        }, function () {
            return true;
        });
    } else {
        var info = teacher[0].split(",");
        if (info[1].indexOf("（无）") != -1) {
            if (lx == "rl") {
                urp.alert("该教师还没有上传日历！");
            } else {
                urp.alert("该教师还没有上传大纲！");
            }
            return;
        } else {
            var form = document.getElementById("form1");
            form.action = "/student/courseSelect/thisSemesterCurriculum/dgrl/" + zxjxjhh + "/" + kch + "/" +
                kxh + "/" + info[0] + "/" + lx;
            form.target = "_blank";
            form.method = "post";
            form.submit();
        }
    }
}

//        function dy() {
//            $("#h4_id1").hide();
//            $("#h4_id2").hide();
//            $("#infoTable").hide();
//            $(".breadcrumb").hide();
//            $("#other-course").show();
//            $("div.class_div").addClass("printDiv");
//            divBuild();
//            html2jspprint("page-content-template", back);
//
//        }

function dy() {
    $("#temp_title").remove();
    $("#temp_subtitle").remove();
    $("#h4_id1").hide();
    $("#h4_id2").hide();
    $("#infoTable").hide();
    $(".breadcrumb").hide();
    $("#other-course").show();
    addDom(); //打印之前添加标题
    $("div.class_div").addClass("printDiv");
    $("#courseTable").addClass("printDiv");

    $("#courseTable").css("width", $("#courseTable").width());
    $("#courseTable").removeClass("table");
    divBuild();
    if ($.isIE()) {
        window.print();
        back();
    } else {
        appendCourse();
        html2jspprint("mycoursetable", back);
    }


}

//将未安排时间地点的课程清单添加到打印页面
function appendCourse() {
    var htm = "<div style='margin-top:10px;' id='course'><label style='font-family:宋体;font-size:16px;'>未安排时间/地点课程清单</label><table id='cjmxb' class='table table-striped table-bordered table-hover'>";
    htm = htm + "<thead id='thead'>";
    htm = htm + "<tr align='center'>";
    htm = htm + "<th>课程号</th>";
    htm = htm + "<th>课序号</th>";
    htm = htm + "<th>课程名</th>";
    htm = htm + "<th>学分</th>";
    htm = htm + "<th>课程属性</th>";
    htm = htm + "<th>课程类别</th>";
    htm = htm + "<th>考试类型</th>";
    htm = htm + "<th>教师</th>";
    htm = htm + "<th>修读方式</th>";
    htm = htm + "<th>选课状态</th>";
    if ("100006" != "100006") {
        htm = htm + "<th>选课限制说明</th>";
    }
    htm = htm + "</tr>";
    htm = htm + "</thead>";
    htm = htm + "<tbody id='tbody'>";

    if (nosjddData != null) {
        for (var i = 0; i < nosjddData.length; i++) {
            htm += "<tr align='center'>";
            htm += "<td>" + nosjddData[i].kch + "</td>";
            htm += "<td>" + nosjddData[i].kxh + "</td>";
            htm += "<td>" + nosjddData[i].kcm + "</td>";
            htm += "<td>" + nosjddData[i].xf + "</td>";
            htm += "<td>" + nosjddData[i].kcsx + "</td>";
            htm += "<td>" + nosjddData[i].kclb + "</td>";
            htm += "<td>" + nosjddData[i].kslx + "</td>";
            htm += "<td>" + nosjddData[i].js + "</td>";
            htm += "<td>" + nosjddData[i].xdfs + "</td>";
            htm += "<td>" + nosjddData[i].xkzt + "</td>";
            if ("100006" != "100006") {
                htm += "<td>" + nosjddData[i].xkxz + "</td>";
            }
        }
    }
    htm = htm + "</tbody>";
    htm = htm + "</table>";
    htm = htm + "</div>";
    $("#mycoursetable").append(htm);

}

function addDom() {
    var title_dy = "2020-2021学年秋学期学生课表";
    var subtitle_dy = "学院：计算机学院 专业：计算机科学与技术 学号：2018141461025 姓名：闫薪如 打印时间：2020-12-03";
    var titleStr = "<div align='center' id='temp_title' ><span style='font-size:28px;font-weight:bold;font-family: 宋体;'>" + title_dy + "</span></div>" + "<div style='margin-bottom:5px;' id='temp_subtitle'><span style='font-size:20px;font-weight:bold;font-family: 宋体;'>" + subtitle_dy + "</span></div>";
    $("#courseTable").before(titleStr);
}

//将因打印修改的页面恢复
function back() {
    $("div.printDiv").removeClass("printDiv");
    $("#courseTable").removeClass("printDiv");
    $("#courseTable").addClass("table");
    $("#h4_id1").show();
    $("#h4_id2").show();
    $("#infoTable").show();
    $(".breadcrumb").show();
    $("#other-course").hide();
    divBuild();

    $("#temp_title").remove();
    $("#temp_subtitle").remove();

    $("#course").remove();
}


var classcodes = [];
window.Import = {
    /*加载一批文件，_files:文件路径数组,可包括js,css,less文件,succes:加载成功回调函数*/
    LoadFileList: function (_files, succes) {
        var FileArray = [];
        if (typeof _files === "object") {
            FileArray = _files;
        } else {
            /*如果文件列表是字符串，则用,切分成数组*/
            if (typeof _files === "string") {
                FileArray = _files.split(",");
            }
        }
        if (FileArray != null && FileArray.length > 0) {
            var LoadedCount = 0;
            for (var i = 0; i < FileArray.length; i++) {
                loadFile(FileArray[i], function () {
                    LoadedCount++;
                    if (LoadedCount == FileArray.length) {
                        succes();
                    }
                })
            }
        }
        /*加载JS文件,url:文件路径,success:加载成功回调函数*/
        function loadFile(url, success) {
            if (!FileIsExt(classcodes, url)) {
                var ThisType = GetFileType(url);
                var fileObj = null;
                if (ThisType == ".js") {
                    fileObj = document.createElement('script');
                    fileObj.src = url;
                } else if (ThisType == ".css") {
                    fileObj = document.createElement('link');
                    fileObj.href = url;
                    fileObj.type = "text/css";
                    fileObj.rel = "stylesheet";
                } else if (ThisType == ".less") {
                    fileObj = document.createElement('link');
                    fileObj.href = url;
                    fileObj.type = "text/css";
                    fileObj.rel = "stylesheet/less";
                }
                success = success || function () {};
                fileObj.onload = fileObj.onreadystatechange = function () {
                    if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
                        success();
                        classcodes.push(url)
                    }
                }
                document.getElementsByTagName('head')[0].appendChild(fileObj);
            } else {
                success();
            }
        }

        /*获取文件类型,后缀名，小写*/
        function GetFileType(url) {
            if (url != null && url.length > 0) {
                return url.substr(url.lastIndexOf(".")).toLowerCase();
            }
            return "";
        }

        /*文件是否已加载*/
        function FileIsExt(FileArray, _url) {
            if (FileArray != null && FileArray.length > 0) {
                var len = FileArray.length;
                for (var i = 0; i < len; i++) {
                    if (FileArray[i] == _url) {
                        return true;
                    }
                }
            }
            return false;
        }
    }
}


function exportTableToPdf() {
    var FilesArray = ["/js/bluebird.js", "/js/tableExport/libs/pdfmake/vfs_fonts.js", "/js/tableExport/libs/pdfmake/pdfmake.min.js"];

    Import.LoadFileList(FilesArray, function () {
        $("#h4_id1").hide();
        $("#h4_id2").hide();
        $("#infoTable").hide();
        $(".breadcrumb").hide();
        $("#other-course").show();
        $("div.class_div").addClass("printDiv");
        $("#courseTable").addClass("printDiv");
        $("#courseTable").css("width", $("#courseTable").width());
        $("#courseTable").removeClass("table");
        appendCourse();
        divBuild();
        var index = layer.load(0, {
            shade: [0.2, '#000'] //0.1透明度的白色背景
        });
        var shareContent = document.querySelector("#mycoursetable");
        var width = shareContent.offsetWidth;
        var height = shareContent.offsetHeight;
        var canvas = document.createElement("canvas");
        var scale = 2;

        canvas.width = width * scale;
        canvas.height = height * scale;
        canvas.getContext("2d").scale(scale, scale);
        var opts = {
            scale: scale,
            canvas: canvas,
            logging: true,
            width: width,
            height: height
        };

        html2canvas(shareContent, opts).then(function (canvas) {
            canvas.id = "mycanvas";
            var dataUrl = canvas.toDataURL();
            var dd = {
                pageSize: 'A4',
                content: [{
                        text: '2020-2021学年秋学期学生课表',
                        fontSize: 12,
                        fontFamily: '宋体',
                        alignment: 'center'
                    },
                    {
                        text: '学院：计算机学院 专业：计算机科学与技术 学号：2018141461025 姓名：闫薪如 打印时间：2020-12-03',
                        fontSize: 8,
                        fontFamily: '宋体'
                    },
                    {
                        image: dataUrl,
                        width: 520,
                        margin: [0, 10, 0, 0]
                    }
                ],
                defaultStyle: {
                    font: 'simsun'
                }
            };
            pdfMake.fonts = {
                simsun: {
                    normal: 'simsun.ttf',
                    bold: 'simsun.ttf',
                    italics: 'simsun.ttf',
                    bolditalics: 'simsun.ttf'
                }
            };
            pdfMake.createPdf(dd).download("课程表.pdf");
            back();
            layer.close(index);
        });
    });


}

function downloadOutline(kch) {
    if (kch) {
        var url = "/student/courseSelect/thisSemesterCurriculum/dgrl/" + kch + "/downloadOutline";
        window.location = url;
    }
}

//  
function aaa(obj) {
    if (check()) {
        $("#forNewTab").attr("href", obj.src);
        $("#forNewTab")[0].click();
    } else {
        layer.open({
            title: '<i class="ace-icon fa fa-exclamation-triangle bigger-130"></i>  操作提示',
            content: '手机访问系统时，如何识别微信群二维码：<br>1、将微信群的二维码保存到手机本地；<br/>2、使用微信--扫一扫--识别相册中的二维码。',
            btn: ['确定'],
            yes: function (index, layero) {
                $("#forNewTab").attr("href", obj.src);
                $("#forNewTab")[0].click();
            },
        });
    }

}
//判断网页是否为手机打开,返回true表示为pc端打开，返回false表示为手机端打开   
function check() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
} <
/script> <
style type = "text/css" >
    .div_style_dy {
        margin: -20 px 0 px 0 px 0 px;
    }

    .div_style {
        margin: 0 px;
    }

body {
    margin: 0 px;
    padding: 0 px;
}

.courseTable_style {
    border: 3 px solid #000000

        }



        .tags {

            display: inline-block;

            position: absolute;

            bottom: 0;

            right: 0;

            overflow: visible;

            direction: rtl;

            padding: 0;

            margin: 0;

            height: auto;

            width: auto;

            background-color: transparent;

            border-width: 0;

            vertical-align: inherit;

        }



        .tags > .label-holder {

            opacity: .92;

            filter: alpha(opacity= 92);
display: table;
margin: 1 px 0 0;
direction: ltr;
text - align: left;
}

.tags > .label - holder: hover {
        opacity: 1;
        filter: alpha(opacity = 100);
    }

    .tools {
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: -30 px;
        width: 24 px;
        background - color: rgba(0, 0, 0, 0.55);
        text - align: center;
        vertical - align: middle; -
        webkit - transition: all 0.2 s ease; -
        o - transition: all 0.2 s ease;
        transition: all 0.2 s ease;
    }

div.class_div: hover > div.tools {
        display: block;
        left: 0;
        right: 0;
    }

    .tools > a {
        display: inline - block;
        color: #FFF;
        font - size: 18 px;
        font - weight: normal;
        padding: 0 2 px;
    }

    .tools > a: hover {
        text - decoration: none;
        color: #C9E2EA;
    }

# mycoursetable > table, #mycoursetable > table > thead > tr, #mycoursetable > thead > tr > th, #mycoursetable > tbody > tr > th, #mycoursetable > tbody > tr > td {
        border: #C7C7C7 2 px solid
    }


    <
    /style>


    <
    /head> <
    body class = "no-skin" >

    <
    !--查看详情专用-- >
    <
    div class = "modal fade"
id = "view-table"
tabindex = "1"
role = "dialog"
aria - labelledby = "myModalLabel"
aria - hidden = "true" >
    <
    div class = "modal-dialog"
style = "width:60%;" >
    <
    div class = "modal-content" >
    <
    div class = "center" >
    <
    span class = "view-pre-loading" > < /span> <
    /div> <
    /div> <
    /div> <
    /div> <
    !--查看详情专用-- >

    <
    div class = "modal fade"
id = "myModal"
tabindex = "1"
role = "dialog"
aria - labelledby = "myModalLabel"
aria - hidden = "true" >
    <
    div class = "modal-dialog" >
    <
    div class = "modal-content" >
    <
    div class = "modal-header" >
    <
    button type = "button"
class = "close"
data - dismiss = "modal"
aria - hidden = "true" > ×
    <
    /button> <
    h4 class = "modal-title"
id = "myModalLabel" >
    调课后的周次 <
    /h4> <
    /div> <
    div class = "modal-body" >
    开始周次: < input type = "text"
name = "kszc"
id = "kszc"
readonly = "readonly" / > < br / >
    结束周次: < input type = "text"
name = "jszc"
id = "jszc" / > < br / >
    选择周次模式: < input type = "radio"
name = "zcms"
value = "1"
style = "width:20px" / > 全周 & nbsp; & nbsp; <
input type = "radio"
name = "zcms"
value = "2"
style = "width:20px" / > 单周 & nbsp; & nbsp; <
input type = "radio"
name = "zcms"
value = "3"
style = "width:20px" / > 双周 <
    /div> <
    div class = "modal-footer" >
    <
    button type = "button"
class = "btn btn-default" >
    保存 <
    /button> <
    button type = "button"
class = "btn btn-primary"
data - dismiss = "modal" >
    关闭 <
    /button> <
    /div> <
    /div> <
    !--/.modal-content --> <
    /div> <
    !--/.modal-dialog --> <
    /div> <
    div id = "navbar"
class = "navbar navbar-default navbar-fixed-top" >
    <
    script type = "text/javascript" >
    try {
        ace.settings.check('navbar', 'fixed')
    } catch (e) {} <
    /script>

    <
    div class = "navbar-container"
id = "navbar-container" >
    <
    button type = "button"
class = "navbar-toggle menu-toggler pull-left"
id = "menu-toggler" >
    <
    span class = "sr-only" > Toggle sidebar < /span>

    <
    span class = "icon-bar" > < /span>

    <
    span class = "icon-bar" > < /span>

    <
    span class = "icon-bar" > < /span> <
    /button> <
    div class = "navbar-header pull-left" >
    <
    a href = "/"
class = "navbar-brand"
id = '0'
onclick = "toSelect(this);" >
    <
    small style = "font-weight:700;font-family:微软雅黑" >
    <
    !--
    <
    i class = "fa fa-leaf" > < /i>
Ace Admin
-- >

四川大学教务管理系统

    <
    /small> <
    /a> <
    /div>

    <
    div class = "navbar-buttons navbar-header pull-right"
role = "navigation" >
    <
    ul class = "nav ace-nav" >
    <
    li class = "green"
style = "text-align: center" >
    <
    div class = "intellegenceUDiv"
style = "z-index:1"
id = "intellegenceUDiv"
style = "display:inline-block; left: 100%; position:absolute;height:100%;line-height:normal;" >
    <
    div style = "height:100%; width:32px; display:inline-block;
position: absolute;
line - height: 100 % ;
left: -32 px;
background - color: #777; " id= "clickdiv"
onclick = "changeInfo()" >
    <
    i class = "fa fa-search white"
style = 'margin-top: 50%;'
id = "clicki" > < /i> <
    /div> <
    /div> <
    div id = "form-search"
class = "nav-search"
style = "width:0px;right:0px;margin-top: 8px; margin-right:20px;background-color:rgba(0,0,0,0);z-index:-1" >
    <
    form class = "form-search" >
    <
    span class = "input-icon" >
    <
    input type = "text"
placeholder = "查找功能..."
class = "nav-search-input"
id = "search-input"
autocomplete = "off" >
    <
    i class = "ace-icon fa fa-search blue" > < /i> <
    /span> <
    /form> <
    /div> <
    !--通知-- >


    <
    li class = "green"
style = "text-align: center" >
    <
    a href = "#"
onclick = "javascript:window.open('http://jwc.scu.edu.cn/article/206/206_1.htm');" >
    <
    i class = "ace-icon fa fa-calendar" > < /i>学校校历 <
    /a> <
    /li> <
    li class = "grey"
style = "text-align: center" >
    <
    a href = "#"
onclick = "openWorkRestSchedule();return false;" >
    <
    i class = "ace-icon fa fa-clock-o" > < /i>作息时间表 <
    /a> <
    /li> <
    !--展示当前的学期季度信息-- >
    <
    li class = "light-red"
style = "text-align: center" >
    <
    a href = "#" >
    <
    i class = "ace-icon fa fa-calendar" > < /i>


2020 - 2021 秋 第14周 星期四 <
    /a> <
    /li>





    <
    li class = "light-blue"
style = "text-align: center" >
    <
    a data - toggle = "dropdown"
href = "#"
class = "dropdown-toggle" >
    <
    img class = "nav-user-photo"
src = "/main/queryStudent/img?582.0"
onerror = "this.src='/assets/avatars/user.jpg'"
alt = "Jason's Photo" / >
    <
    span class = "user-info" >
    <
    small > 欢迎您， < /small>



闫薪如
    <
    /span> <
    i class = "ace-icon fa fa-caret-down" > < /i> <
    /a>

    <
    ul class = "user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close" >
    <
    li >
    <
    a href = "/"
title = "主页"
id = '0'
onclick = "toSelect(this);" >
    <
    i class = "ace-icon fa fa-home" > < /i>首页 <
    /a> <
    /li>

    <
    li >
    <
    a href = "javascript:changePassword('/student/rollManagement/personalInfoUpdate/updatePassword')" >
    <
    i class = "ace-icon fa fa-user" > < /i>
修改密码
    <
    /a> <
    /li>

    <
    li class = "divider" > < /li>

    <
    li >
    <
    a id = "logout"
href = "/logout"
title = "退出系统" >
    <
    i class = "ace-icon fa fa-power-off" > < /i>
注销
    <
    /a> <
    /li> <
    /ul> <
    /li>

    <
    !--主页-- >
    <
    !-- < li class = "light-blue"
style = "text-align: center" >
    <
    a href = "/"
title = "主页"
id = '0'
onclick = "toSelect(this);" >
    <
    i class = "ace-icon fa fa-home" > < /i> <
    /a> <
    /li> <
    li class = "light-blue"
style = "text-align: center" >
    <
    a href = "/logout"
title = "退出系统"
onclick = "removeCookie();" >
    <
    i class = "ace-icon fa fa-power-off" > < /i> <
    /a> <
    /li>
    -- >
    <
    /ul> <
    /div> <
    /div> <
    !--/.navbar-container --> <
    /div>

    <
    div class = "main-container"
id = "main-container" >
    <
    script type = "text/javascript" >
    function changeInfo() {
        $("#form-search").animate({
            width: '152px',
            right: '22px'
        });
        //margin-top: 8px; margin-right:20px;
    }
$(document).click(function (e) {
    var id = $(e.target).attr("id");
    if (id == "clickdiv" || id == "clicki" || id == "search-input") {

    } else {
        $("#form-search").animate({
            width: '0px',
            right: '0px'
        });
    }
})
try {
    ace.settings.check('main-container', 'fixed')
} catch (e) {}

function SchoolCalendar() {
    //	var ifheight = $(window).height()-$(".modal-content").offset().top ;
    $(".modal-content").html("<iframe width='100%' style='width:100%; min-height:600px; height:100%; overflow: hidden;' src='/indexCalendar' ></iframe>");
    //$(".modal-content iframe").css("max-height",ifheight);
    $("#view-table").modal().show().on("hidden.bs.modal", function () {
        $(this).removeData("bs.modal");
    });
}

var sUserAgent = navigator.userAgent.toLowerCase();
var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
var bIsMidp = sUserAgent.match(/midp/i) == "midp";
var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
var bIsAndroid = sUserAgent.match(/android/i) == "android";
var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

var isMenuToDeal = true;

function rootMenuClick(obj) {
    if (isMenuToDeal && !$(obj).hasClass("open")) {
        $.each($(obj).find(".hsub"), function () {
            if ($(this).hasClass("open")) {
                isMenuToDeal = false;
            }
        });
    } else {
        isMenuToDeal = false;
    }

    if (isMenuToDeal) {
        var firobj = $(obj).children("ul").children("li").first();
        firobj.addClass("open");
        $(firobj).children("ul").css("display", "block");
    } else {
        isMenuToDeal = true;
    }
}

function stopHere(e) {
    isMenuToDeal = false;
}

/*菜单上的搜索框*/
$(document).ready(function () {
    var obj_lis = $("#menus").find("li > ul > li > ul > li");
    var obj_menus = new Array();
    for (i = 0; i < obj_lis.length; i++) {
        obj_menus[i] = $.trim($(obj_lis[i]).find("a:first").text());
    }
    try {
        $("#search-input").bs_typeahead({
            source: obj_menus,
            updater: function (a) {
                for (i = 0; i < obj_lis.length; i++) {
                    if (a == $.trim($(obj_lis[i]).find("a:first").text())) {
                        $.cookie('selectionBar', obj_lis[i].id, {
                            path: '/'
                        });
                        window.location.href = $(obj_lis[i]).find("a:first").attr("href");
                        break;
                    }
                }
                return a;
            }
        })
    } catch (a) {}
});

function changePassword(url) {
    ///student/rollManagement/personalInfoUpdate/updatePassword
    $('#view-table').modal({
        remote: url
    }).on("hidden.bs.modal", function () {
        /*$("div").remove(".widget-box");*/
        $(this).removeData("bs.modal");
    }).css({
        width: 'auto'
    });
}

<
/script>

<
style type = "text/css" >
    .sidebar > .nav - search {
        position: static;
        background - color: #FAFAFA;
        border - bottom: 1 px solid# DDD;
        text - align: center;
        height: 35 px;
        padding - top: 0 px;
    }

    .sidebar > .nav - search.nav - search - input {
        width: 162 px!important;
        border - radius: 5 px!important;
        max - width: 162 px!important;
        opacity: 1!important;
        filter: alpha(opacity = 100) !important;
    }

# breadcrumbs li {
    cursor: pointer;
} <
/style> <
div id = "sidebar"
class = "sidebar responsive sidebar-fixed" >
    <
    script type = "text/javascript" >
    try {
        ace.settings.check('sidebar', 'fixed')
    } catch (e) {} <
    /script>

    <
    ul class = "nav nav-list"
id = "menus" >

    <
    li class = ""
id = "1181690"
onclick = "rootMenuClick(this);" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-user" > < /i> <
    span class = "menu-text" > 个人管理 < /span> <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>

    <
    ul class = "submenu"
onclick = "stopHere();" >

    <
    li class = ""
id = "1188620" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
学籍管理
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "1183421"
onclick = "toSelect(this);" >
    <
    a href = "/student/rollManagement/rollInfo/index" > & nbsp; & nbsp;
学生学籍信息
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1183422"
onclick = "toSelect(this);" >
    <
    a href = "/student/rollManagement/personalInfoUpdate/index" > & nbsp; & nbsp;
个人信息修改
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1183423"
onclick = "toSelect(this);" >
    <
    a href = "/student/rollManagement/rollChanges/index" > & nbsp; & nbsp;
学籍异动
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1183424"
onclick = "toSelect(this);" >
    <
    a href = "/student/rollManagement/rewardsAndPenalties/index" > & nbsp; & nbsp;
奖惩信息
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1183425"
onclick = "toSelect(this);" >
    <
    a href = "/student/rollManagement/electronicRegistration/index" > & nbsp; & nbsp;
电子注册
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1183426"
onclick = "toSelect(this);" >
    <
    a href = "/student/rollManagement/minorProgramRegistration/index" > & nbsp; & nbsp;
辅修方案注册
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "125803404"
onclick = "toSelect(this);" >
    <
    a href = "/student/rollManagement/informationCollection/index" > & nbsp; & nbsp;
监护人信息采集
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    li class = ""
id = "1188621" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
学生异动
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "125803633"
onclick = "toSelect(this);" >
    <
    a href = "/student/ordertransfer/specialty/application/index" > & nbsp; & nbsp;
转专业申请(川大版) <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1183428"
onclick = "toSelect(this);" >
    <
    a href = "/student/personalManagement/studentChange/index" > & nbsp; & nbsp;
学籍异动申请
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    li class = ""
id = "1188624" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
课程替代
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "125803262"
onclick = "toSelect(this);" >
    <
    a href = "/student/personalManagement/personalApplication/curriculumReplacement/index" > & nbsp; & nbsp;
课程替代申请
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    /ul>

    <
    /li>

    <
    li class = ""
id = "82020"
onclick = "rootMenuClick(this);" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-shopping-cart" > < /i> <
    span class = "menu-text" > 选课管理 < /span> <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>

    <
    ul class = "submenu"
onclick = "stopHere();" >

    <
    li class = ""
id = "125803145" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
教材
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "125803146"
onclick = "toSelect(this);" >
    <
    a href = "/student/courseSelect/books/dealBooks/index" > & nbsp; & nbsp;
选定教材
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    li class = ""
id = "82021" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
本学期课表
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "82022"
onclick = "toSelect(this);" >
    <
    a href = "/student/courseSelect/thisSemesterCurriculum/index" > & nbsp; & nbsp;
本学期课表
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1162620"
onclick = "toSelect(this);" >
    <
    a href = "/student/courseSelect/calendarSemesterCurriculum/index" > & nbsp; & nbsp;
历年学期课表
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    li class = ""
id = "1293220" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
选课管理
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "1293217"
onclick = "toSelect(this);" >
    <
    a href = "/student/courseSelect/courseSelectNotice/index" > & nbsp; & nbsp;
选课公告
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1293218"
onclick = "toSelect(this);" >
    <
    a href = "/student/courseSelect/courseSelect/index" > & nbsp; & nbsp;
选课
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1293219"
onclick = "toSelect(this);" >
    <
    a href = "/student/courseSelect/courseSelectResult/index" > & nbsp; & nbsp;
选课结果
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1293221"
onclick = "toSelect(this);" >
    <
    a href = "/student/courseSelect/quitCourse/index" > & nbsp; & nbsp;
退课
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1298420"
onclick = "toSelect(this);" >
    <
    a href = "/student/courseSelect/courseSelectFailed/index" > & nbsp; & nbsp;
选课失败信息
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "125903667"
onclick = "toSelect(this);" >
    <
    a href = "/student/courseSelect/sportsCourse/index" > & nbsp; & nbsp;
体育选课
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    /ul>

    <
    /li>

    <
    li class = ""
id = "12580300"
onclick = "rootMenuClick(this);" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-pencil" > < /i> <
    span class = "menu-text" > 教学评估[学生] < /span> <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>

    <
    ul class = "submenu"
onclick = "stopHere();" >

    <
    li class = ""
id = "12580301" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
评估
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "125803261"
onclick = "toSelect(this);" >
    <
    a href = "/student/teachingEvaluation/evaluateNotice/evaluateNoticeIndex" > & nbsp; & nbsp;
评估公告
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "12580302"
onclick = "toSelect(this);" >
    <
    a href = "/student/teachingEvaluation/evaluation/index" > & nbsp; & nbsp;
教学评估
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    /ul>

    <
    /li>

    <
    li class = ""
id = "1423377"
onclick = "rootMenuClick(this);" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-list-alt" > < /i> <
    span class = "menu-text" > 考务管理 < /span> <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>

    <
    ul class = "submenu"
onclick = "stopHere();" >

    <
    li class = ""
id = "1423378" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
考务管理
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "1423379"
onclick = "toSelect(this);" >
    <
    a href = "/student/examinationManagement/examPlan/index" > & nbsp; & nbsp;
考试安排
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1423380"
onclick = "toSelect(this);" >
    <
    a href = "/student/examinationManagement/examSignUp/index" > & nbsp; & nbsp;
考试报名
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1423381"
onclick = "toSelect(this);" >
    <
    a href = "/student/examinationManagement/examGrade/index" > & nbsp; & nbsp;
考试成绩
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "125803555"
onclick = "toSelect(this);" >
    <
    a href = "/student/nonExamWeek/courseRegistration/index" > & nbsp; & nbsp;
非考试周查询
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    /ul>

    <
    /li>

    <
    li class = ""
id = "1423370"
onclick = "rootMenuClick(this);" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-building-o" > < /i> <
    span class = "menu-text" > 教学资源 < /span> <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>

    <
    ul class = "submenu"
onclick = "stopHere();" >

    <
    li class = ""
id = "1423371" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
教学资源
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "1423372"
onclick = "toSelect(this);" >
    <
    a href = "/student/teachingResources/classroomCurriculum/index" > & nbsp; & nbsp;
教室课表
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1423373"
onclick = "toSelect(this);" >
    <
    a href = "/student/teachingResources/teacherCurriculum/index" > & nbsp; & nbsp;
教师课表
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1423374"
onclick = "toSelect(this);" >
    <
    a href = "/student/teachingResources/classCurriculum/index" > & nbsp; & nbsp;
班级课表
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1423384"
onclick = "toSelect(this);" >
    <
    a href = "/student/teachingResources/courseCurriculum/index" > & nbsp; & nbsp;
课程课表
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    li class = ""
id = "1443371" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
自习查询
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "1443372"
onclick = "toSelect(this);" >
    <
    a href = "/student/teachingResources/freeClassroom/index" > & nbsp; & nbsp;
空闲教室查询
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1443384"
onclick = "toSelect(this);" >
    <
    a href = "/student/teachingResources/classroomUseStatus/index" > & nbsp; & nbsp;
教室使用状况查询
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    /ul>

    <
    /li>

    <
    li class = ""
id = "1377620"
onclick = "rootMenuClick(this);" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-search-plus" > < /i> <
    span class = "menu-text" > 综合查询 < /span> <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>

    <
    ul class = "submenu"
onclick = "stopHere();" >

    <
    li class = ""
id = "1377621" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
成绩查询
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "125803405"
onclick = "toSelect(this);" >
    <
    a href = "/student/integratedQuery/scoreQuery/allTermScores/index" > & nbsp; & nbsp;
成绩查询
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1379870"
onclick = "toSelect(this);" >
    <
    a href = "/student/integratedQuery/scoreQuery/allPassingScores/index" > & nbsp; & nbsp;
全部及格成绩
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1417250"
onclick = "toSelect(this);" >
    <
    a href = "/student/integratedQuery/scoreQuery/coursePropertyScores/index" > & nbsp; & nbsp;
课程属性成绩
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1443373"
onclick = "toSelect(this);" >
    <
    a href = "/student/integratedQuery/scoreQuery/schemeScores/index" > & nbsp; & nbsp;
方案成绩
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1443374"
onclick = "toSelect(this);" >
    <
    a href = "/student/integratedQuery/scoreQuery/unpassedScores/index" > & nbsp; & nbsp;
不及格成绩
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    li class = ""
id = "1377622" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
培养方案完成情况
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "1377623"
onclick = "toSelect(this);" >
    <
    a href = "/student/integratedQuery/planCompletion/index" > & nbsp; & nbsp;
方案完成情况
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    li class = ""
id = "1443376" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
指导性计划完成情况
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "1443377"
onclick = "toSelect(this);" >
    <
    a href = "/student/integratedQuery/instructionPlanQuery/detail/index" > & nbsp; & nbsp;
指导性教学计划
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    li class = ""
id = "1443378" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
课程
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "1443379"
onclick = "toSelect(this);" >
    <
    a href = "/student/integratedQuery/course/courseSchdule/index" > & nbsp; & nbsp;
本学期课程安排
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1443380"
onclick = "toSelect(this);" >
    <
    a href = "/student/integratedQuery/course/courseBasicInformation/basicInf" > & nbsp; & nbsp;
课程基本信息
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    li class = ""
id = "1443381" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
教材
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "1443382"
onclick = "toSelect(this);" >
    <
    a href = "/student/integratedQuery/teachingMaterial/SelectionSearch/index" > & nbsp; & nbsp;
教材选定查询
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "1443383"
onclick = "toSelect(this);" >
    <
    a href = "/student/integratedQuery/teachingMaterial/ReceiveSearch/index" > & nbsp; & nbsp;
教材领取查询
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    /ul>

    <
    /li>

    <
    li class = ""
id = "125803053"
onclick = "rootMenuClick(this);" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-bolt" > < /i> <
    span class = "menu-text" > 创新学分认定 < /span> <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>

    <
    ul class = "submenu"
onclick = "stopHere();" >

    <
    li class = ""
id = "125803054" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
学分认定
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "125803056"
onclick = "toSelect(this);" >
    <
    a href = "/student/innovationCredits/creditsRecognitionApply/index" > & nbsp; & nbsp;
认定学分申请
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    /ul>

    <
    /li>

    <
    li class = ""
id = "125803469"
onclick = "rootMenuClick(this);" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-file-o" > < /i> <
    span class = "menu-text" > 推免管理 < /span> <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>

    <
    ul class = "submenu"
onclick = "stopHere();" >

    <
    li class = ""
id = "125803472" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
推免管理
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "125803483"
onclick = "toSelect(this);" >
    <
    a href = "/student/exemptsExam/ExemptExamController/sqIndex" > & nbsp; & nbsp;
我的申请
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    /ul>

    <
    /li>

    <
    li class = ""
id = "125803491"
onclick = "rootMenuClick(this);" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-file" > < /i> <
    span class = "menu-text" > 结业生考试管理 < /span> <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>

    <
    ul class = "submenu"
onclick = "stopHere();" >

    <
    li class = ""
id = "125803492" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
结业生考试管理
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "125803497"
onclick = "toSelect(this);" >
    <
    a href = "/student/graduatesManagement/graduatesExamManagement/graduatesApply/index" > & nbsp; & nbsp;
结业生考试课程报名
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "125803521"
onclick = "toSelect(this);" >
    <
    a href = "/student/graduatesManagement/graduatesExamManagement/downIndex/index" > & nbsp; & nbsp;
缴费单下载
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "125803499"
onclick = "toSelect(this);" >
    <
    a href = "/student/graduatesManagement/graduatesExamManagement/billUpload/index" > & nbsp; & nbsp;
收据 / 发票上传 <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    /ul>

    <
    /li>

    <
    li class = ""
id = "125803523"
onclick = "rootMenuClick(this);" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-qrcode" > < /i> <
    span class = "menu-text" > 教师课堂评价 < /span> <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>

    <
    ul class = "submenu"
onclick = "stopHere();" >

    <
    li class = ""
id = "125803538" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
学生评教
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "125803539"
onclick = "toSelect(this);" >
    <
    a href = "/student/teachingEvaluation/newEvaluation/index" > & nbsp; & nbsp;
教学评估
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    /ul>

    <
    /li>

    <
    li class = ""
id = "125903579"
onclick = "rootMenuClick(this);" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-bar-chart-o" > < /i> <
    span class = "menu-text" > 可信证明 < /span> <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>

    <
    ul class = "submenu"
onclick = "stopHere();" >

    <
    li class = ""
id = "125903582" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
可信证明生成
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "125903594"
onclick = "toSelect(this);" >
    <
    a href = "/student/integratedQuery/scoreQuery/credibleReportCard/index" > & nbsp; & nbsp;
生成可信证明
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    li class = ""
id = "125903595"
onclick = "toSelect(this);" >
    <
    a href = "/student/integratedQuery/scoreQuery/scoreCard/historyIndex" > & nbsp; & nbsp;
历史生成查看
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    /ul>

    <
    /li>

    <
    li class = ""
id = "125903612"
onclick = "rootMenuClick(this);" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-columns" > < /i> <
    span class = "menu-text" > 考研学习 < /span> <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>

    <
    ul class = "submenu"
onclick = "stopHere();" >

    <
    li class = ""
id = "125903613" >
    <
    a href = "#"
class = "dropdown-toggle" >
    <
    i class = "menu-icon fa fa-caret-right" > < /i>
考研学习
    <
    b class = "arrow fa fa-angle-down" > < /b> <
    /a>

    <
    b class = "arrow" > < /b>


    <
    ul class = "submenu" >

    <
    li class = ""
id = "125903614"
onclick = "toSelect(this);" >
    <
    a href = "/all/postgraduate/postgraduateExamination/study/index" > & nbsp; & nbsp;
考研学习
    <
    /a>

    <
    b class = "arrow" > < /b> <
    /li>

    <
    /ul>


    <
    /li>

    <
    /ul>

    <
    /li>


    <
    /ul> <
    !--/.nav-list -->

    <
    div class = "sidebar-toggle sidebar-collapse"
id = "sidebar-collapse" >
    <
    i class = "ace-icon fa fa-angle-double-left"
data - icon1 = "ace-icon fa fa-angle-double-left"
data - icon2 = "ace-icon fa fa-angle-double-right" > < /i> <
    /div>

    <
    script type = "text/javascript" >
    try {
        ace.settings.check('sidebar', 'collapsed')
    } catch (e) {} <
    /script> <
    /div>

    <
    div class = "main-content" >
    <
    div class = "breadcrumbs"
id = "breadcrumbs" >
    <
    script type = "text/javascript" >
    try {
        ace.settings.check('breadcrumbs', 'fixed')
    } catch (e) {} <
    /script>

    <
    ul class = "breadcrumb" >
    <
    li onclick = "javascript:window.location.href='/'"
style = "cursor:pointer;" >
    <
    i class = "ace-icon fa fa-home home-icon" > < /i>
首页
    <
    /li> <
    li class = "active"
onclick = "ckickTopMenu(this);return false;"
id = "firmenu" > 一级菜单 < /li> <
    li class = "active"
onclick = "ckickTopMenu(this);return false;"
id = "secmenu" > 二级菜单 < /li> <
    li class = "active"
onclick = "ckickTopMenu(this);return false;"
id = "lastmenu" > 三级菜单 < /li> <
    /ul> <
    !--/.breadcrumb --> <
    /div>

    <
    div class = "page-content"
id = "page-content-template" >
    <
    !-- < div class = "ace-settings-container"
id = "ace-settings-container" > -- >
    <
    !-- < div class = "btn btn-app btn-xs btn-warning ace-settings-btn"
id = "ace-settings-btn" > -- >
    <
    !-- < i class = "ace-icon fa fa-cog bigger-150" > < /i> --> <
    !-- < /div> -->

    <
    !-- < div class = "ace-settings-box clearfix"
id = "ace-settings-box" > -- >
    <
    !-- < div class = "pull-left width-50" > -- >
    <
    !-- < div class = "ace-settings-item" > -- >
    <
    !-- < div class = "pull-left"
style = "height:13px;" > -- >
    <
    !-- < select id = "skin-colorpicker"
class = "hide"
style = "background: red; height:13px;" > -- >
    <
    !-- < option data - skin = "no-skin"
value = "#438EB9" > #438EB9</option> -->

            <!-- 											<option data-skin= "skin-1"
value = "#222A2D" > #222A2D</option> -->

            <!-- 											<option data-skin= "skin-2"
value = "#C6487E" > #C6487E < /option> --> <
    !-- < option data - skin = "skin-3"
value = "#D0D0D0" > #D0D0D0 < /option> --> <
    !-- < /select> --> <
    !-- < /div> --> <
    !-- < span > & nbsp;
Choose Skin < /span> --> <
    !-- < /div> -->

    <
    !-- < div class = "ace-settings-item" > -- >
    <
    !-- < input type = "checkbox"
class = "ace ace-checkbox-2"
id = "ace-settings-navbar"
checked = "checked" / > -- >
    <
    !-- < label class = "lbl"
for = "ace-settings-navbar" > Fixed Navbar < /label> --> <
    !-- < /div> -->

    <
    !-- < div class = "ace-settings-item" > -- >
    <
    !-- < input type = "checkbox"
class = "ace ace-checkbox-2"
id = "ace-settings-sidebar"
checked = "checked" / > -- >
    <
    !-- < label class = "lbl"
for = "ace-settings-sidebar" > Fixed Sidebar < /label> --> <
    !-- < /div> -->

    <
    !-- < div class = "ace-settings-item" > -- >
    <
    !-- < input type = "checkbox"
class = "ace ace-checkbox-2"
id = "ace-settings-breadcrumbs" / > -- >
    <
    !-- < label class = "lbl"
for = "ace-settings-breadcrumbs" > Fixed Breadcrumbs < /label> --> <
    !-- < /div> -->

    <
    !-- < div class = "ace-settings-item" > -- >
    <
    !-- < input type = "checkbox"
class = "ace ace-checkbox-2"
id = "ace-settings-rtl" / > -- >
    <
    !-- < label class = "lbl"
for = "ace-settings-rtl" > Right To Left(rtl) < /label> --> <
    !-- < /div> -->

    <
    !-- < div class = "ace-settings-item" > -- >
    <
    !-- < input type = "checkbox"
class = "ace ace-checkbox-2"
id = "ace-settings-add-container" / > -- >
    <
    !-- < label class = "lbl"
for = "ace-settings-add-container" > -- >
<
!--Inside-- >
<
!-- < b > .container < /b> --> <
    !-- < /label> --> <
    !-- < /div> --> <
    !-- < /div>/.pull - left-- >

    <
    !-- < div class = "pull-left width-50" > -- >
    <
    !-- < div class = "ace-settings-item" > -- >
    <
    !-- < input type = "checkbox"
class = "ace ace-checkbox-2"
id = "ace-settings-hover" / > -- >
    <
    !-- < label class = "lbl"
for = "ace-settings-hover" > Submenu on Hover < /label> --> <
    !-- < /div> -->

    <
    !-- < div class = "ace-settings-item" > -- >
    <
    !-- < input type = "checkbox"
class = "ace ace-checkbox-2"
id = "ace-settings-compact" / > -- >
    <
    !-- < label class = "lbl"
for = "ace-settings-compact" > Compact Sidebar < /label> --> <
    !-- < /div> -->

    <
    !-- < div class = "ace-settings-item" > -- >
    <
    !-- < input type = "checkbox"
class = "ace ace-checkbox-2"
id = "ace-settings-highlight" / > -- >
    <
    !-- < label class = "lbl"
for = "ace-settings-highlight" > Alt.Active Item < /label> --> <
    !-- < /div> --> <
    !-- < /div>/.pull - left-- >
    <
    !-- < /div>/.ace - settings - box-- >
    <
    !-- < /div>/.ace - settings - container-- >


    <
    div class = "row" >
    <
    div class = "col-sm-12 self-margin" >
    <
    div id = "mainDIV" >
    <
    input type = "hidden"
id = "param_value"
name = "param_value"
value = "100006" >
    <
    input type = "hidden"
id = "schoolName"
name = "schoolName"
value = "四川大学" >
    <
    h4 class = "header smaller lighter grey"
id = "h4_id1" >
    <
    i class = "fa fa-calendar" > < /i> 选课管理（已安排的课程）<span class='label label-lg label-yellow arrowed-in'>注：未安排具体时间的课程请在下方“全部课程清单”中查看</span >
    <
    span class = "right_top_oper" >
    <
    button class = "btn btn-info btn-xs btn-round"
onclick = "dy();" >
    <
    i class = "ace-icon fa fa-print bigger-120" > < /i>打印课表 <
    /button> <
    button class = "btn btn-info btn-xs btn-round"
type = "button"
onclick = "exportTableToPdf();return false;" >
    <
    i class = "fa fa-cloud-download bigger-120" > < /i> 导出课表 <
    /button> <
    /span> <
    /h4> <
    div class = "widget-content" >
    <
    div id = "mycoursetable" > < /div> <
    /div> <
    div id = "other-course"
style = "display: none;" >
    <
    /div> <
    !--标签页式嵌入表格开始-- >
    <
    h4 class = "header smaller lighter grey"
id = "h4_id2" >
    <
    i class = "fa fa-info-circle" > < /i> 全部课程清单 <
    /h4>

    <
    div class = "widget-content"
id = "infoTable" > < /div> <
    /div> <
    /div> <
    /div> <
    !--标签页式嵌入表格结束-- >
    <
    form id = "form1" > < /form> <
    a id = "forNewTab"
target = "_blank" > < /a>

    <
    /div> <
    !--/.page-content --> <
    /div> <
    !--/.main-content -->


    <
    a href = "#"
id = "btn-scroll-up"
class = "btn-scroll-up btn btn-sm btn-inverse" >
    <
    i class = "ace-icon fa fa-angle-double-up icon-only bigger-110" > < /i> <
    /a> <
    /div> <
    !--/.main-container -->

    <
    !--inline scripts related to this page-- >
    <
    script type = "text/javascript" >
    $(document).ready(function () {
        var bar = $.cookie('selectionBar');
        if (bar && bar != 0) {
            if (true) {
                var barObj = document.getElementById(bar);
                var pts = $(barObj).parents("li");
                for (var i = pts.length - 1; i >= 0; i--) {
                    if (!$(pts[i]).hasClass("open")) {
                        $(pts[i]).children("a").click();
                    }
                }
                barObj == null ? barObj = document.getElementById(bar) : barObj.className = "active";
                $(barObj).find("a").prepend("<i class='menu-icon fa fa-caret-right'></i>");
            }

            var lastmenu = $("#" + bar).find("a").first().text();
            var secmenu = $("#" + bar).parent().parent().find("a").first().text();
            var firmenu = $("#" + bar).parent().parent().parent().parent().find("a").first().text();

            $("#lastmenu").html(lastmenu.replace(/(^\s*)|(\s*$)/g, ""));
            $("#lastmenu").attr("menuid", bar);
            $("#secmenu").html(secmenu.replace(/(^\s*)|(\s*$)/g, ""));
            $("#secmenu").attr("menuid", $("#" + bar).parent().parent().attr("id"));
            $("#firmenu").html(firmenu.replace(/(^\s*)|(\s*$)/g, ""));
            $("#firmenu").attr("menuid", $("#" + bar).parent().parent().parent().parent().attr("id"));
        } else {
            $("#lastmenu").remove();
            $("#secmenu").remove();
            $("#firmenu").remove();
        }
    });

function ckickTopMenu(obj) {
    if ($(obj).attr("menuid")) {
        var menuid = $(obj).attr("menuid");
        if ($("#" + menuid + " a:eq(0)").hasClass("dropdown-toggle")) {
            if ($("#" + menuid).parents('.nav-list li').size() > 0) {
                if ($("#" + menuid).parents('.nav-list li:eq(0)').hasClass("open")) {
                    $("#" + menuid + " a").trigger("click");
                } else {
                    $("#" + menuid).parents('.nav-list li').find("a:eq(0)").trigger("click");
                    if (!$("#" + menuid).hasClass("open")) {
                        $("#" + menuid + " a").trigger("click");
                    }
                }
            } else {
                $("#" + menuid + " a:eq(0)").trigger("click");
            }
        } else {
            window.location.href = $("#" + menuid + " a:eq(0)").attr("href");
        }
    }
}


function toSelect(obj) {
    $.cookie('selectionBar', obj.id, {
        path: '/'
    });
}

function removeCookie() {
    $.cookie('JSESSIONID', null);
}
// 			$(function() {
// 				$('select').chosen({allow_single_deselect:true});
// 			});

function addslidersModel(id, width) {
    var modal = '<div id="' + id + '" class="modal right fade" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" tabindex="-1">\
	            <div class="modal-dialog">\
	                <div class="modal-content">\
	                    <div class="center">\
                            <img src="/img/icon/pageloading.gif" style="width:28px;height:28px;">\
                        </div>\
	                </div>\
	            </div>\
	        </div>';
    var modal = $(modal).appendTo('body');
    $(".modal-dialog").css("width", width);
    return modal;
}

function openWorkRestSchedule() {
    var modal = addslidersModel("work_rest_schedule_modal", "60%");
    var url = "/main/queryRestSchedule";
    modal.modal({
        remote: url
    }).on('hide.bs.modal', function () {
        modal.remove();
    });
} <
/script> <
/body>

<
/html>
function ChkValue() {
    var vU = document.getElementById('UID').innerHTML.replace("&ensp;", "");
    var vcFlag = "NO";
    try {
        if (document.all.txt_dsdsdsdjkjkjc.value == '') {
            alert('须录入' + vU + '！');
            document.all.txt_dsdsdsdjkjkjc.focus();
            return false;
        } else if (document.all.txt_dsdfdfgfouyy.value == '') {
            alert('须录入密码！');
            document.all.txt_dsdfdfgfouyy.focus();
            return false;
        } else if (document.all.txt_ysdsdsdskgf.value == '' && vcFlag == "YES") {
            alert('须录入验证码！');
            document.all.txt_ysdsdsdskgf.focus();
            return false;
        } else {
            document.getElementById("txt_dsdfdfgfouyy").value = '';
            document.getElementById("txt_ysdsdsdskgf").value = '';
            document.getElementById('divLogNote').innerHTML = '正在通过身份验证...请稍候!';
            return true;
        }
    } catch (e) {}
}

function SelType(obj) {
    var s = obj.options[obj.selectedIndex].getAttribute('usrID');
    document.getElementById('UID').innerHTML = s + "&ensp;";
    selTyeName();
}

function chkpwd(obj) {
    var schoolcode = "10611";
    var yhm = document.all.txt_dsdsdsdjkjkjc.value;
    if (obj.value != "") {
        if (document.all.Sel_Type.value == "ADM")
            yhm = yhm.toUpperCase();
        var s = md5(yhm + md5(obj.value).substring(0, 30).toUpperCase() + schoolcode).substring(0, 30).toUpperCase();
        document.all.efdfdfuuyyuuckjg.value = s;
    } else {
        document.all.efdfdfuuyyuuckjg.value = obj.value;
    }
}

function chkyzm(obj) {
    var schoolcode = "10611";
    if (obj.value != "") {
        var s = md5(md5(obj.value.toUpperCase()).substring(0, 30).toUpperCase() + schoolcode).substring(0, 30).toUpperCase();
        document.all.aerererdsdxcxdfgfg.value = s;
    } else {
        document.all.aerererdsdxcxdfgfg.value = obj.value;
    }
}
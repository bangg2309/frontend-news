import $ from 'jquery';
import React, { useEffect } from 'react';
export function displayTime() {
    console.log($("#fulltime"));
    if ($("#fulltime").length <= 0)
        return;
    var e = new Date;
    $("#fulltime").html(getWeekDay(e.getDay()) + ", " + getNumberStr(e.getDate()) + "/" + getNumberStr(e.getMonth() + 1) + "/" + e.getFullYear() + ", " + getNumberStr(e.getHours()) + ":" + getNumberStr(e.getMinutes()) + ":" + getNumberStr(e.getSeconds()) + " GMT+7")
}
function getWeekDay(e) {
    switch (e) {
        case 1:
            return "Thứ Hai";
        case 2:
            return "Thứ Ba";
        case 3:
            return "Thứ Tư";
        case 4:
            return "Thứ Năm";
        case 5:
            return "Thứ Sáu";
        case 6:
            return "Thứ Bảy";
        case 0:
            return "Chủ Nhật"
    }
}
function getNumberStr(e) {
    return e < 10 ? "0" + e : e
}
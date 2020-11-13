// Date 객체
var now = new Date();
document.write("현재시간 : " + now.toUTCString() + "<br>");
document.write(now.getFullYear() + "년도<br>");
document.write(now.getMonth() + 1 + "월<br>"); // 월은 0부터 시작
document.write(now.getDay() + "일<br>");
document.write(now.getHours() + "시<br>");
document.write(now.getMinutes() + "분<br>");
document.write(now.getSeconds() + "초<br>");
document.write(now.getMilliseconds() + "밀리초<br>");

var now2 = new Date(2020, 10, 13, 11, 52, 20, 20);
document.write(now.toLocaleString() + "<br>");

/***************************************************************************************/
// 같은 내용 함수 응용
document.write("<br><hr><br>"+ "# 함수로 응용<br>");

function now_f(method, com) { 
    document.write(method + com + "<br>");
}

var k;

k = now.toUTCString();
 now_f(k, "");
k = now.setFullYear(2020);
 now_f(k, "년도"); // set메소드 오류?

/***************************************************************************************/





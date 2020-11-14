// Sting 메소드
var a = new String("Boys and Girls"); // 인덱스 값 빈칸 포함 14
var b = "!!";
document.write(a + "<br>"); // *초기 변수 a 값 출력
document.write(b + "<br><hr>");

function str(x) {
    document.write(x + "<br>");
}

/* String 객체의 주요 메소드 */

var y;

y = a.charAt(0); // !!! y = a.메소드 는 계속 새로운 문자열 리턴
 str(y);

y = a.concat(b, "입니다");
 str(y);

y = a.indexOf("s"); // 문자열 s의 인덱스값
 str(y); 

y = a.indexOf("And"); // 문자열이 없을 경우 -1 리턴
 str(y);

y = a.slice(5, 8); // 5 6 7 남기고 자르기
 str(y);

y = a.substr(5, 3); // 5번부터 3개의 문자열 리턴

y = a.toUpperCase(); // 모두 대문자로 (<-> toLowerCase)
 str(y);

y = a.replace("and", "or"); // and를 or로 대체

document.write("  mathpurplee  ".trim() + "<br><hr>"); // 문자열 좌우 공백 제거


var spl = a.split(" "); // ""을 기준으로 [Boys][and][Girls] 배열 생성
   for(var i=0; i<spl.length; i++) {
       document.write("spl" + i + "=" + spl[i] + "<br>");
   }

document.write("<hr>");
document.write(a + "<br>"); // 여러 메소드 활용 후에도 a, b의 원본은 그대로임
document.write(b + "<br><hr>");
//조건문
var grade; // if-else, 성적확인
var score = prompt("점수를 입력하세요", "");

score = parseInt(score); // pareseInt : 문자열을 숫자로
 if(score>=90){
     grade = "A";
 }
 else if(score >= 80){
     grade = "B";
 }
 else if(score >= 70){
     grade = "C";
 }
 else if(score >= 60){
     grade = "D";
 }
     else{
     grade = "F";
     }

document.write(score + "는" + grade + "입니다.<br>")


var day = prompt("요일을 입력하세요.",""); //switch문, 영업확인 
switch(day){
    case "월":
    case "화":
    case "수":
    case "목":
    case "금": 
     document.write("정상영업<br>");
      break;
    case "토":
    case "일":
     document.write("휴일입니다.<br>");

}

//반복문

for(var size=20; size<=35; size+=5){
    document.write("<span ");
    document.write("sytle='font-size:" + size + "px'>");
    document.write(size + "px");
    document.write("</span>");
}  // 오류?

var n = prompt("0보다 큰 정수를 입력하세요.", "")
n = parseInt(n);

var i1=0; sum1=0;
while(i1<=n){
    sum1 += i1 ;
    i1++;
}
document.write("<br>0에서" + n + "까지 합은 " + sum1 + "<br>");

var a=0, b=0;
while(true){ //무한반복
    b += a;
    if(b>300)
        break; //break문
    a++;    
}
document.write(a + "까지 더하면 300을 넘음 : " + b);
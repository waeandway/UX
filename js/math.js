// Math 메소드
function randomInt() {
    return Math.floor(Math.random()*9) + 1; // 자연수 정의
}

var q = randomInt() + "*" + randomInt() ; // "*" 곱셈 기호 주의
var user = prompt(q + "는 얼마인가?", 0);
if(user == null) {
    document.write("종료되었습니다.");
}
else {
    var a = eval(q);  // 정답 계산
    if(a == user)
       document.write("정답");
    else
       document.write("오답");
}






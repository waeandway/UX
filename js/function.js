//함수
function adder(a, b) {
    var sum;
    sum = a + b;
    return sum;
}

function evalParseIntIsNaN(){
    var res = eval("8*4"); // 식 계산
    document.write(res + "<br>");
    var m = parseInt("32"); // 문자열을 숫자로
    document.write(m + "<br>");
    var n = isNaN(32); // NotaNumber
    document.write(n)

    n = parseInt("hello");
     if(isNaN(n)){
         document.write("<br>" + "숫자가 아닙니다." + "<br>");
     }
}

function gugudan(n) {
    var m = parseInt(n);
    if(isNaN(m) || m<1 || m>9) {
        alert("잘못 입력하셨습니다.");
        return;
    }
    for(var i=1;i<=9;i++){
        document.write(m + "x" + i + "=" + m*i + "<br>");
    }

    
}
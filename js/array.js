//배열 기초
var plots = [5, 4, 3, 2, 1]; // 크기가 5인 배열 

for(i=0; i<5; i++) {
    var size = plots[i];
    while(size>0) {
        document.write("*");
        size--;
    }
    document.write(plots[i] + "<br>");
}

var odd = [5, 3, 1];

for(i=0; i<3; i++) {
    var size = odd[i];
    while(size>0) {
        document.write("*");
        size--;
    }
    document.write(odd[i] + "<br>");
}

var week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
week[7] = "today";
document.write(week + "<br>")

var n = [5, 4, 3, 2, 1];
var sum = 0;

/*for(i=0; i<5; i++) {
    sum = sum + n[i];
}
document.write("sum = " + sum + "<br>");*/

/***********************************************************************************/

// Array 객체로 배열 생성
var degree = new Array(); // new 키워드 + Array 객체, 빈 객체 생성
degree[0] = 10;
degree[1] = 11;
degree[2] = 12;
degree[3] = 13;
degree[4] = 14;

 for(i=0; i<degree.length;i++) {
    sum += degree[i];
 }

document.write("평균 = " + sum/degree.length + "<br>");

/***********************************************************************************/

// Array 객체의 메소드 
function pr(msg, arr) {
    document.write(msg + arr.toString() + "<br>");
}

var a = new Array("a" , "b", "c");
var b = new Array("d");
var c;

c = a.concat(b); // concat 메소드 : c는 a와 b를 연결
pr("c = ", c); // 함수 호출

c = a.join("#"); // join 메소드 : 배열 a를 특정 문자열로 연결하여 하나의 문자열로 리턴
pr("c = ", c);

c = a.reverse(); // reverse 메소드 : a 역순
pr("c = ", c);

c = a.slice(0,1); // slice 메소드 : 배열 [0] <= x < [1] 을 의미
pr("c = ", c);

c = a.toString(); // toString 메소드 : 배열 a를 "," 로 연결하여 하나의 문자열로 리턴
pr("c = ", c);


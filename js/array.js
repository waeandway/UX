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





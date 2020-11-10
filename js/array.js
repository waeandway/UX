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

for(i=0; i<5; i++) {
    sum = sum + n[i];
}
document.write("sum = " + sum + "<br>")
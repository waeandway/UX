function change1() {
    var span = document.getElementById("mySpan");
    span.style.color = "green";
    span.style.fontSize = "30px";
    span.style.display = "block"; // inline인 span 태그를 블록박스로 변경
    span.style.width = "6em";
    span.style.border = "1px dotted magenta";
    span.style.margin = "20px";
}

function change2() {
    var p = document.getElementById("picture");
    p.innerHTML = "<img src='car.jpg'>"; 
}

function change3(obj, size, colors) {
    obj.style.color = colors;
    obj.style.fontSize = size;
}
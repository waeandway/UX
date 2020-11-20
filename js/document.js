function documentProperties() {
    document.getElementById("input").focus(); // id 속성으로 "input"을 가진 태그에 focus 지정
    
    text += "location = " + document.location + "\n";
    text += "URL = " + document.URL + "\n";
    text += "title = " + document.title + "\n";
    text += "head의 id = " + document.head.id + "\n";
    text += "body color = " + document.body.style.color + "\n";
    text += "lastModified = " + document.lastModified + "\n";
    text += "defaultView = " + document.defaultView + "\n";
    text += "문서의 로드 완료 후 readyState = " + document.readyState + "\n";
    text += "activeElement = " + document.activeElement.value + "\n";
    text += "documentElement의 태그명 = " + document.documentElement.tagName + "\n"; // <html>태그이며, 대문자로 출력됨
    alert(text);
}

function change() {
    var spanArray = document.getElementsByTagName("span"); // document 객체의 "span" 이름을 가진 태그들(=컬렉션)을 변수 spanArray에 저장(하나의 컬렉션 배열 형태로 저장됨)
      for(var i=0; i<spanArray.length; i++) { // span 태그들은 컬렉션 배열로 저장되므로 .length 자동으로 생성됨
        var s = spanArray[i];
        s.style.color = "red";
        s.style.fontSize = "20px";
     /* 또는
        spanArray[i].style.color = "red";
        spanArray[i].style.fontSize = "20px";
     */
      }
}
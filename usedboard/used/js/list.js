// 로그인버튼 누르면 로그인창으로
function login(){
 location.href = 'login.html';
}

//로그아웃 버튼 구현
function logout() {

sessionStorage.clear();
location.reload();
}
 
//작성자 이름 로그인 아이디로
document.addEventListener("DOMContentLoaded", function(){
 var user = JSON.parse(sessionStorage.getItem("__user__"));
 var name = user["id"];
 document.getElementById("loginName").innerText = name; 

});


// 목록 순서
var contentList = JSON.parse(localStorage.getItem("contents"));    
 
for (var i = 1; i < contentList.length+1; i++){
    
 var label = contentList[i-1];
 label.no = i;
} 

 drawRows();
 function moveForm() {
   location.href = 'form.html'
 }

 function drawRows() {
   var templates = '';
   var body = document.getElementById('rows');

   for (var i=contentList.length-1; 0<=i; i--) {
     var content  = contentList[i];
     console.log(content);
     templates += '<tr onclick="moveView('+i+')">';
     templates += '<td style="text-align:center">'+content.no+'</td>';
     templates += '<td style="text-align:center">'+content.subject+'</td>';
     templates += '<td>'+content.title+'</td>';
     templates += '<td style="text-align:center">'+content.writer+'</td>';
     templates += '<td style="text-align:center">'+toStringByFormatting(new Date(content.write_date))+'</td>';
     templates += '</tr>';
   }

   body.innerHTML = templates;
 }

 function moveView(contentNo) {
   location.href = 'view.html?no='+(contentNo+1);
 }

 function leftPad(value) { if (value >= 10) { return value; } return `0${value}`; } function toStringByFormatting(source, delimiter = '-') { const year = source.getFullYear(); const month = leftPad(source.getMonth() + 1); const day = leftPad(source.getDate()); return [year, month, day].join(delimiter); }
// 이미지 넣기까지 했습니다..ㅠㅠ
function preview(event){
  var reader = new FileReader();

  reader.onload = function(event){
    var img = document.createElement("img");
    img.setAttribute("src", event.target.result);
    document.querySelector("div#image_container").appendChild(img);
    img.style.width = "50%";
    img.style.height = "50%";
  
   };
  reader.readAsDataURL(event.target.files[0]);
}


// 회원id
document.addEventListener("DOMContentLoaded", function(){
 var user = JSON.parse(sessionStorage.getItem("__user__"));
 console.log(user["id"]);
 document.getElementById("writer").value=user["id"];
 
});

// 저장 버튼
 function save() {
   if (!confirm('저장하시겠습니까?')) {
     return;
   }
   var contents;
     try {
       contents = JSON.parse(localStorage.getItem("contents"));
     } catch (e) {
       contents = null ;
     }

   if (!contents) {
     contents = [];
   }

   

   var subject = document.getElementById('subject').value;
   var title = document.getElementById('title').value;
   var writer = document.getElementById('writer').value;
   var content = document.getElementById('contents').value;

     
   contents.push({no:contents.length+1
     , subject:subject
     , title:title
     , writer:writer
     , contents:content
     , write_date:new Date()});
   localStorage.setItem("contents", JSON.stringify(contents));
   location.href = 'list.html';

   // 로그인 없이 작성할경우
     if(writer===null || writer===""){
       alert("회원전용 게시판 입니다. 로그인 해주세요.")
       return;
       history.back();
     }

 }
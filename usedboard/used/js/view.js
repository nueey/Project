// 아이디 일치할 경우 수정과 삭제 버튼 보이기
document.addEventListener("DOMContentLoaded", function(){
  var user = JSON.parse(sessionStorage.getItem("__user__"));
  var writer = document.getElementById("writer").innerText;
  if(writer === user["id"]){
    return;
  }
// 아이디 불일치할경우 수정과 삭제버튼 숨기기
  document.getElementById("modi").hidden=true;
  document.getElementById("del").hidden=true;


  comentDrawing();
});

// 게시글 내용
  var contents = JSON.parse(localStorage.getItem("contents"));
    
  getContents();
    
  function getContents() {

    if (!contents) {
      contents = [];
    }
    
    var content = contents[getParameterByName('no')-1];
    document.getElementById('subject').innerText = content.subject;
    document.getElementById('title').innerText = content.title;
    document.getElementById('writer').innerText = content.writer;
    document.getElementById('contents').innerText = content.contents;
    document.getElementById('write_date').innerText = content.write_date;
      
  }
// 게시글 삭제버튼
  function removeContent() {
      
     if (!confirm('삭제하시겠습니까? 다시는 복구 할수없습니다.')) {
      return;
    }; 
      
    contents.splice(getParameterByName('no')-1,1);
    localStorage.setItem("contents", JSON.stringify(contents));
    window.history.back(); 
    
  }
    
// 게시글 수정버튼
 function modify(){
    var num_get_list = getParameterByName('no') -1;
    localStorage.setItem('modify-num',num_get_list);
    location.href="modify-form.html"
 };


  function getParameterByName(name) { name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search); return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); }

  // 연락처 남길 회원 id
   document.addEventListener("DOMContentLoaded", function(){
   var user = JSON.parse(sessionStorage.getItem("__user__"));
   console.log(user["id"]);
   document.getElementById("co_writer").value=user["id"];
 });

 // 연락처 등록 버튼
  function create(){
    const comment =
    document.getElementById('comment').value;
   console.log(comment);
   document.getElementById("comment").innerText;

   localStorage.setItem("comment", comment);
   comentDrawing();
   document.getElementById("comment")

}

 function comentDrawing(){
     var comment = JSON.parse(localStorage.getItem("comment"));
     document.getElementById("comentLine").innerText = comment;
 }
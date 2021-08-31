var list_num = localStorage.getItem('modify-num'); 
/* Number(list_num); */

var set_contents = JSON.parse(localStorage.getItem("contents"));

var set_contents = set_contents[list_num];
document.getElementById('subject').value = set_contents.subject;
document.getElementById('title').value = set_contents.title;
document.getElementById('writer').value = set_contents.writer;
document.getElementById('contents').value = set_contents.contents;   

// 수정 저장하기 
function save() {
if (!confirm('수정하시겠습니까?')) {
  return;
}
var contents;
  try {
    contents = JSON.parse(localStorage.getItem("contents"));
  } catch (e) {
    contents = null;
  }

if (!contents) {
  contents = [];
}
var subject = document.getElementById('subject').value;
var title = document.getElementById('title').value;
var writer = document.getElementById('writer').value;
var content = document.getElementById('contents').value;
  
var modify_content = contents[list_num];
modify_content.subject = subject
modify_content.title = title
modify_content.writer = writer
modify_content.contents = content
modify_content.write_date = new Date();

  
  localStorage.setItem("contents", JSON.stringify(contents)); 
  

alert('수정되었습니다.');
location.href = 'list.html';
}
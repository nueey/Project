function chageSelectedValue(){
  var yourTestSelect = document.getElementById("TestSelect");
    
  // select element에서 선택된 option의 value가 저장됩니다.
  var selectedValue = yourTestSelect.options[yourTestSelect.selectedIndex].value;

  // select element에서 선택된 option의 text가 저장된다.
  var selectedText = yourTestSelect.options[yourTestSelect.selectedIndex].text;
}
var tel = document.getElementById('phone').value;
var teachkey = '__teach__' + tel;

  function button02_click(){
    var getIndex = function() {
    var select = document.querySelector('.select');
    var index = select.rowIndex;
    alert(index);
  };
  var name = document.getElementById('name').value;
  var gender = document.getElementById('gender').value;
  var age = document.getElementById('age').value;
  var tel = document.getElementById('phone').value;
  if((name === "")||(gender === "")||(age === "")||(tel === "")){
      alert('정보를 모두 입력해주세요');} 
      else{
  // var count = localStorage.length+1;
  // console.log(count);
}
  var teachkey = '__teach__' + tel;
  var teachInfo = {
      name: name,
      gender: gender,
      age: age,
      tel: tel,
  }
  if(age < 14 || age > 124){
    alert("정상적인 나이를 입력해주세요.");
    return;
}
  
  // console.log(teachInfo);
  localStorage.setItem(teachkey, JSON.stringify(teachInfo));
   addRow();
 
}

localStorage.setItem(document.getElementById('name').value, document.getElementById('name').value);


function addRow() {
  var idEl = document.getElementById('name');
  var genderEl = document.getElementById('gender');
  var ageEl = document.getElementById('age');
  var numberEl = document.getElementById('phone');

  var name = idEl.value;
  var gender = genderEl.value;
  var age = ageEl.value;
  var tel = numberEl.value;
  
  add_row({name:name, gender:gender, age:age, tel:tel})

  idEl.value = null
  genderEl.value = null
  ageEl.value = null
  numberEl.value = null;
}

function add_row(data) {
  
  var my_tbody = document.getElementById('tbody');
  // var row = my_tbody.insertRow(0); // 상단에 추가
  var row = my_tbody.insertRow( my_tbody.rows.length ); // 하단에 추가
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  
  cell1.innerHTML = '<input type="text" id="name" value="'+data.name+'" disabled />';
  cell2.innerHTML = '<input type="text" id="gender" value="'+data.gender+'" disabled />';
  cell3.innerHTML = '<input type="text" id="age" value="'+data.age+'" disabled />';
  cell4.innerHTML = '<input type="tel" id="phone" value="'+data.tel+'"disabled/>';
  cell5.innerHTML = '<button id ="__teach__'+data.tel+'" onclick="delete_row(this.id); delete_row1(this);">삭제</button>'
}

function delete_row1(button) {
  var tr= button.parentNode.parentNode;
   var index = tr.rowIndex - 1;
   var my_tbody = document.getElementById('tbody');
   my_tbody.deleteRow(index-1);
  
}

function delete_row(button) {

  // alert(button);

  var key = Object.keys(localStorage);
  //  for(let i = 0; i < key.length;i++){
  //  if (key[i]!=="__teach__"){
  //    if("__teach__"+localNumber === key[i]){
       localStorage.removeItem(button);
  //        return;
  //    }
  //  }
  //  }


    // to---------------------------------do
   
  // for (let i = 0; i < localStorage.length; i++) {
  //   number[i]=JSON.parse(localStorage.getItem(localStorage.key(i))).number;
  // }
  var a = JSON.parse(localStorage.getItem("__teach__"));
  
  
  // var delete_phone = button.previousSibling.id;
  //  console.log(Object.keys(localStorage));
  // console.log(delete_phone);


}
// function jb () {
//   var names = new Array(); //배열선언
//   for(let i=0;i<localStorage.length;i++) {
//      names[i]=JSON.parse(localStorage.getitem(localStorage.key(i))).name;}
// }
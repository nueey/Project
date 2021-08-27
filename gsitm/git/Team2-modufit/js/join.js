
  function idcheck_click() {

    var key = Object.keys(localStorage);
    var localID= document.getElementById("id").value;
    if(localID===null || localID===""){
      document.getElementById("id").style.backgroundColor="white";
    }
    if(localID===null || localID===""){
      alert("아이디를 입력해 주세요.");
      return;
    }
    for(let i = 0; i < key.length;i++){
      if (key[i]!=="__user__"){
        if("__user__"+localID === key[i]){
            // alert("이미 가입된 아이디가 존재합니다.");
          document.getElementById("id").style.backgroundColor="red";
          style="background-color: rgb(162, 255, 162);"
            return;
          }else {
            document.getElementById("id").style.backgroundColor="rgb(162, 255, 162)";
          // document.getElementById("idcheck").value="확인완료";
        }
      }
    }
  }

  function pwcheck_click(){

    var pw1 = document.getElementById('pw1').value;
    var pw2 = document.getElementById('pw2').value;
    if(pw1===null || pw1===""){document.getElementById("pw1").style.backgroundColor="white";}
    if(pw2===null || pw2===""){document.getElementById("pw2").style.backgroundColor="white";}

    if(pw1 != pw2){
      // alert("비밀번호가 일치하지 않습니다.");
      document.getElementById("pw1").style.backgroundColor="red";
      document.getElementById("pw2").style.backgroundColor="red";
      document.f2.pw2=null;
      return false;
    } else{
      // alert("비밀번호가 일치합니다.");
      document.getElementById("pw1").style.backgroundColor="rgb(162, 255, 162)";
      document.getElementById("pw2").style.backgroundColor="rgb(162, 255, 162)";
      return true;
    }
  }



  function button1_click(){

    var name = document.getElementById('name').value;
   
    var contact = document.getElementById('contact').value;
  
    var id = document.getElementById('id').value;
   
    var pw1 = document.getElementById('pw1').value;
   
    var pw2 = document.getElementById('pw2').value;

    var age = document.getElementById('age').value;
    
    var gender = document.getElementById('gender').value;
    
    var address = document.getElementById('address').value;
   

    var userkey = '__user__' + id;
    var userInfo = {
      name: name,
      contact: contact,
      id: id,
      pw1: pw1,
      age: age,
      gender: gender,
      rank:1
    }

    if(id==""){
        alert("아이디를 입력해주세요.");
        document.f2.id.focus();
        return;
    }

    if(pw1==""){
        alert("비밀번호를 입력해주세요.");
        document.f2.pw1.focus();
        return;
    }

    if(pw2==""){
        alert("비밀번호를 확인해주세요.");
        document.f2.pw2.focus();
        return;
    }

    if(name==""){
        alert("성명을 입력해주세요.");
        document.f2.name.focus();
        return;
    }

    if(contact==""){
        alert("연락처를 입력해주세요.");
        document.f2.contact.focus();
        return;
    }

    if(age==""){
        alert("나이를 입력해주세요.");
        document.f2.age.focus();
        return;
    }

    if(age < 14 || age > 124){
        alert("정상적인 나이를 입력해주세요.");
        document.f2.age.focus();
        return;
    }

    if(address==""){
        alert("주소를 입력해주세요.");
        document.f2.address.focus();
        return;
    }
    

    
    //저장값을 한줄로
    console.log(userInfo);
    localStorage.setItem(userkey, JSON.stringify(userInfo));

    // -----
    location.href="login.html";

  }
  
    localStorage.setItem(document.getElementById('name').value, document.getElementById('name').value);

function bt1_click() {
    var u1 = document.f1;
    if(!u1.user_id.value) {
        alert("아이디를 입력해 주세요.")
        u1.user_id.focus();
        return;
    }

    if(!u1.pw.value) {
        alert("비밀번호를 입력해 주세요.");
        u1.pw.focus();
        return;
    }
    
    var userInfo;
    try {
        userInfo = JSON.parse(localStorage.getItem("__user__" + u1.user_id.value));
        var pw = userInfo["pw1"];
    } catch (e) {
        alert("로그인에 실패하였습니다.");
        return;
    }

    var userInfo;
    try {
        userInfo = JSON.parse(localStorage.getItem("__user__" + u1.user_id.value));
        // 아이디가 존재하지 않을 경우
        if(userInfo===null){
            alert("로그인에 실패하였습니다.");
            return;
        }
        // 패스워드 일치시
        console.log(userInfo);
        var pw = userInfo["pw1"];

        if(pw===u1.pw.value){
            var sessionUserInfo = {
                name: userInfo["name"],
                contact: userInfo["contact"],
                id: userInfo["id"],
                age: userInfo["age"],
                gender: userInfo["gender"],
                rank: userInfo["rank"]
            };
            sessionStorage.setItem("__user__",JSON.stringify(sessionUserInfo));
            if(userInfo["rank"]==1){location.href="welcome.html"; return}
            location.href="manageApply.html";
            return;
        }
        alert("로그인에 실패하였습니다.");
    } catch (e) {
        // 로그인 실패시
        console.log(e);
        alert("로그인에 실패하였습니다.");
        return;
    }
}

function bt2_click(){
    location.href="join.html";
 
}

document.addEventListener("DOMContentLoaded", function(){
    var userSession = JSON.parse(sessionStorage.getItem("__user__"));
    document.getElementById("welcomName").innerText = userSession["name"];
});

function logout(lo) {
    if(prompt("정말로 로그아웃 하시겠습니까?")){
        sessionStorage.clear;
        location.href="index.html";
        return;
    }
}
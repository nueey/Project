
document.addEventListener("DOMContentLoaded", function(){
    var userInfo = {
            name: 'admin',
            id: 'admin',
            pw: '0',
            rank: 0
        }

    localStorage.setItem("__user__admin", JSON.stringify(userInfo));
});


function goLogin(){
    location.href="login.html";
}
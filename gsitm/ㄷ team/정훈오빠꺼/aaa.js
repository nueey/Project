const button = document.querySelector("button")
const idInput = document.querySelector("#id")
const pwInput = document.querySelector("#pw")


button.onclick = function(){
    console.log(`ID : ${idInput.value}, PW : ${pwInput.value}`)

    let id = idInput.value
    let pw = pwInput.value


    if(localStorage.getItem(id)==null){
        localStorage.setItem(id,pw)
        localStorage.setItem('year', JSON.stringify)
        location.href="login.html"
        alert("가입되었습니다.")
    }else{
        alert(`${id}는 이미 사용중인 아이디입니다.`)
    }
}
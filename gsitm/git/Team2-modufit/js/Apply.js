document.addEventListener("DOMContentLoaded", function(){
    var tex = {
        t1: "마동석",
        t2: "유영대",
        t3: "김은석",
        t4: "박희순",
        t5: "유재석"
    };
    localStorage.setItem("teach",JSON.stringify(tex));
    var teachers = JSON.parse(localStorage.getItem("teach"));
    var addHtmls = "<option value='' disabled selected hidden>강사이름 선택해주세요</option>";
    // alert(teachers['t1']);
    for(let i = 1; i<Object.keys(teachers).length+1; i++){
        addHtmls = addHtmls + "<option value='"+ teachers["t"+i] + "'>" + teachers["t"+i] + "</option>";
        
    }
    document.getElementById("name").innerHTML = addHtmls;

});
// function categoryChange(e) {
// 	var name_men = ["홍길동","어린왕자","심봉사"];
// 	var name_women = ["춘향", "콩쥐", "팥쥐", "신데렐라"];
// 	var target = document.getElementById("name");

// 	if(e.value == "men") var d = name_men;
// 	else if(e.value == "women") var d = name_women;
	
//     target.options.length = 0;

// 	for (x in d) {
// 		var opt = document.createElement("option");
// 		opt.value = d[x];
// 		opt.innerHTML = d[x];
// 		target.appendChild(opt);
// 	}
// }

function button01_click(){
    
    var date = document.getElementById('date').value;
    var gender = document.getElementById('gender').value;
    var name = document.getElementById('name').value;
    var time = document.getElementById('time').value;
    if((date === "")||(gender === "")||(name === "")||(time === "")){
        alert('정보를 모두 입력해주세요');} 
        else{
    var count = localStorage.length+1;
    console.log(count);

    var applykey = '__apply__' + count;
    var userInfo = {
        date: date,
        gender: gender,
        name: name,
        time: time
    }
    
    
    console.log(userInfo);
    localStorage.setItem(applykey, JSON.stringify(userInfo));
    alert("신청이 완료되었습니다.")
        location.href="welcome.html";
    }
}

localStorage.setItem(document.getElementById('date').value, document.getElementById('date').value);


function selectCell(selected){
    var id = selected.id;
    var manager = document.getElementById('manager').value;
    var selectedCell = document.getElementById(id);
    // alert(id);
    selectedCell.innerText = prompt("메모할 내용을 입력해 주세요.","");
    var count = localStorage.length+1;
    console.log(count);

    var managerkey = '__manager__' + count;


    var content = selectedCell.innerText;



    var managerInfo = {
    manager:manager,
    id:id,
    content:content
}





console.log(managerInfo);

localStorage.setItem(managerkey, JSON.stringify(managerInfo));


}

//------------------------------------------------------------------

 




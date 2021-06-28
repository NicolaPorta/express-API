const loadToDoList = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','http://localhost:3001/toDos', false);
    xhttp.send();

    const toDos = JSON.parse(xhttp.responseText);

    toDos.forEach((toDo, i) => {
        const html = `<li>${toDo.toDo} <button id='delete${i}'>DELETE</button></li>`;
        document.getElementById('toDoList').innerHTML += html;
    });

}

const toDoDelete = (toDoCode) => {
    let newToDoCode = toDoCode.replace(/\s+/g, '-').toLowerCase();
    console.log(newToDoCode);
    const xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", `http://localhost:3001/toDos/${newToDoCode}`, false);
    xhttp.send();
    location.reload();
}

loadToDoList();

document.addEventListener('click', function(e) {
    let code = e.target.previousSibling.data;
    code = code.substring(0,code.length - 1);
    toDoDelete(code);
});


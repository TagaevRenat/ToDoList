let counterValue = 1

function submitfunction(event) {
    event.preventDefault();
    counter();
    addCaseName()
}
const form = document.getElementById('submit');
form.addEventListener('click', submitfunction);

function addCaseName() {
    let inputObj = document.getElementById('inputID');
    let nameOfCase = inputObj.value;
    let liLast = document.createElement('li');
    liLast.className = "list-custom";
    liLast.id = counterValue;
    liLast.oncontextmenu = edit
    ol.append(liLast);

    let par = document.createElement('span')
    par.innerHTML = nameOfCase;
    liLast.append(par)

    let delButt = document.createElement('button')
    delButt.type = 'button'
    delButt.className = "del-btn"
    delButt.onclick = deleteCase
    liLast.append(delButt)
    let trashIcon = document.createElement('i')
    trashIcon.className = "fa-solid fa-trash-can"
    delButt.append(trashIcon)

    let readyButt = document.createElement('button')
    readyButt.type = 'button'
    readyButt.className = "btn btn-outline-success"
    readyButt.onclick = caseDone
    liLast.append(readyButt)
    let readyIcon = document.createElement('i')
    readyIcon.className = "fa-solid fa-check"
    readyButt.append(readyIcon)
}

function counter() {
    ++counterValue
}

function edit() {
    let id = this.id;
    let elem = document.getElementById(id)
    let question = confirm('Хочешь изменить название дела?')
    if (question == true) {
        let answer = prompt('Введи новое название дела!')
        let pTarget = elem.querySelector('span:first-child')
        pTarget.innerHTML = answer
        console.log(pTarget)
    }
}


function caseDone() {
    let id = this.parentNode.id;
    let elem = document.getElementById(id)
    elem.style.backgroundColor = 'rgb(179, 255, 176)'
}

function deleteCase() {
    let id = this.parentNode.id;
    let elem = document.getElementById(id)
    elem.remove()
}

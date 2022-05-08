let counterValue = 1

function submitfunction(event) {
    event.preventDefault();
    counter();
    addCaseName()
}
const form = document.getElementById('form');
form.addEventListener('submit', submitfunction);

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

    let delButt = document.createElement('input')
    delButt.type = 'button'
    delButt.className = "btn btn-outline-dark"
    delButt.value = "Удалить дело"
    delButt.onclick = deleteCase
    liLast.append(delButt)

    let readyButt = document.createElement('input')
    readyButt.type = 'button'
    readyButt.className = "btn btn-outline-success"
    readyButt.value = "Дело сделанно!"
    readyButt.onclick = caseDone
    liLast.append(readyButt)
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
    elem.style.backgroundColor = '#b3ffb0'

}

function deleteCase() {
    let id = this.parentNode.id;
    let elem = document.getElementById(id)
    elem.remove()
}

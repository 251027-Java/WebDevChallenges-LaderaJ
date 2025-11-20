const list = [];

function addToList() {
    list.push(1);
}

function alertList() {
    alert(list);
}

document.querySelector('button').addEventListener('click', addToList);
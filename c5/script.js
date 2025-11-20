const list = [];

function addToList(item) {
    list.push(item);
    alertList();
}

function alertList() {
    alert(list);
}

document.querySelector('#generic').addEventListener('click', () => addToList(`item_${Math.floor(Math.random() * 1e3)}`));
document.querySelector('#custom').addEventListener('click', () => {
    const input = document.querySelector('input').value.trim();
    if (input) {
        addToList(input);
    }
});
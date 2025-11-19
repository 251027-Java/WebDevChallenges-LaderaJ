function modify() {
    const e = document.querySelector('h1');
    e.textContent = 'You clicked the button!';
}

document.querySelector('button')
    .addEventListener('click', modify);
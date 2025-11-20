document.querySelector('button').addEventListener('click', () => {
    const e = document.createElement('li');
    e.textContent = 'New item';
    document.querySelector('ul').appendChild(e);
})
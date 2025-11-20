
document.querySelector('button').addEventListener('click', () => {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = `#${hex}`;
})
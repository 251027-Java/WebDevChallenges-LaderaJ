
const paragraph = document.querySelector('p');

document.getElementById('b1')
    .addEventListener('click', () => {
        paragraph.style.color = 'red';
        paragraph.style.fontWeight = 'bold';
    });

document.getElementById('b2')
    .addEventListener('click', () => {
        paragraph.style.color = null;
        paragraph.style.fontWeight = null;
    });

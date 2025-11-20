
document.querySelector('button').addEventListener('click', () => {
    const input = document.querySelector('input');
    const text = input.value.trim();

    if (text) {
        const li = document.createElement('li');

        const button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', function () {
            this.classList.toggle('done');
        })

        li.append(button);
        document.querySelector('ul').append(li);
    }
});
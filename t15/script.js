const paths = {
    christmas: '/assets/783124-christmasemoji.png',
    skull: '/assets/896869-negativeskull.png',
};

document.querySelector('button').addEventListener('click', () => {
    const img = document.querySelector('img');

    if (img.src.includes(paths.christmas)) {
        img.src = paths.skull;
    } else {
        img.src = paths.christmas;
    }
});
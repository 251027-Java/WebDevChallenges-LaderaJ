document.getElementById('loadBtn').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            posts.slice(0, 5).forEach(post => {
                const item = document.createElement('div');
                item.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
                document.body.appendChild(item);
            });
        })
        .catch(console.error);
});
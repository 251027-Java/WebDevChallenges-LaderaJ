document.getElementById('fetchBtn').addEventListener('click', () => {
    const id = document.getElementById('postId').value.trim();

    if (id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                if (!res.ok) {
                    document.getElementById('output').innerHTML = 'No post found.';
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                document.getElementById('output').innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
            })
            .catch(console.error);
    }
});
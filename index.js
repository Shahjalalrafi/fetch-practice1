document.getElementById('add-post').addEventListener('submit', addPost)

function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value
    let body = document.getElementById('body').value

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({firstname:title, lastname: body})

      
    })
    .then(res => res.json())
    .then(data => console.log(data))
}
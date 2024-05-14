// https://jsonplaceholder.typicode.com/posts

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data));
}

function displayPost(post){
    const postContainer = document.getElementById('post-container');
    for(const posts of post){
        console.log(posts);
        const div = document.createElement('div');
        div.innerHTML=
        `
        <h3>user ${posts.userId}</h3>
        <h4>post:${posts.title}</h4>
        <p>post:${posts.body}</p>
        `;
        postContainer.appendChild(div);    
        
    }

}
loadPost()

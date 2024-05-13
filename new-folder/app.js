function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then(data => displayUsers(data));
}
function displayUsers(data){
    for(const user of data)
    console.log(user.name);
const name =document.getElementById('oder-list');
for(const user of data){
    console.log(user.name);
    const li = document.createElement('li');
    li.innerText = user.name;
    name.appendChild(li);
}
}


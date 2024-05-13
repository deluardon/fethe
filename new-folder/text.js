// console.log('Running');

// https://jsonplaceholder.typicode.com/users


function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
       
}
function displayUser(data){
    console.log(data);
}
const login = document.getElementById('login');
const pass = document.getElementById('pass');
const butt = document.getElementById('butt');

butt.addEventListener('click', ev => {
    console.log(login.value);
    console.log(pass.value);


})

const users = document.getElementsByClassName('user');

for (let i in users) {
    users[i].addEventListener('click', (event) => {
        console.log('clicked on: ', event.target.innerText);


    });

}
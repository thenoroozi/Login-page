const btnmode=document.querySelector('.btn-mode');
const mode=document.querySelector('.mode');
const body=document.querySelector('.body');
const Logindiv=document.querySelector('.login-div');
const password=document.querySelector('.password');
const username=document.querySelector('.username');
const logo=document.querySelector('.logo');
const loginbtn=document.querySelector('.login-button');
function ChangeMode(){
    mode.classList.toggle('active');
    btnmode.classList.toggle('active');
    body.classList.toggle('active');
    Logindiv.classList.toggle('active');
    password.classList.toggle('active');
    username.classList.toggle('active');
    logo.classList.toggle('active');
    loginbtn.classList.toggle('active');
};


//changing mode dark or light
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


//validation
const usernameInput=document.querySelector(".user-input");
const passwordInput=document.querySelector(".pass-input");
const usernameMsg=document.querySelector(".username-msg");
const passwordMsg=document.querySelector(".password-msg");
const signinMsg=document.querySelector(".signin-msg");
const signinBtn=document.querySelector(".login-button");

signinBtn.addEventListener("click", signIn);
function signIn(event) {
   event.preventDefault();
   usernameMsg.innerText="";
   passwordMsg.innerText="";
   const usernameValue= usernameInput.value;
   const passwordValue= passwordInput.value;
   let ifSendData=true;

   if(usernameValue.length===0 || usernameValue.indexOf("@")===-1 || usernameValue.indexOf(".")===-1){
      usernameMsg.innerText="Please enter a valid email";
      ifSendData=false;
      signinMsg.innerText="";
   }

   if(passwordValue.length===0){
      passwordMsg.innerText="Please enter your password"
      ifSendData=false;
      signinMsg.innerText="";
   }else if (passwordValue.length <= 5){
      passwordMsg.innerText="Your password is too short";
      ifSendData=false;
      signinMsg.innerText="";
   }

   if(ifSendData){
      const body = JSON.stringify({
         username: usernameValue,
         password: passwordValue,
      })
      const headers={
         "content-Type": "application/json; charset=UTF-8"
      }
      fetch('https://jsonplaceholder.typicode.com/posts',{
         method: "POST",
         body: body,
         headers: headers
      })

      .then(response => {
         if(response.ok){
            signinMsg.innerText="You sign in successfully"
         }
      })
   }
}
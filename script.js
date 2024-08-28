let signUpBtn =document.querySelector('.signupbtn');
let signInBtn =document.querySelector('.signinbtn');
let nameField =document.querySelector('.namefield');
let title =document.querySelector('.title');
let underline =document.querySelector('.underline');
let text=document.querySelector('.text');

signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight= '0';
    title.innerHTML='Log In';
    text.innerHTML = 'Forgot Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.trasnform= 'translatex(35px)';
});

signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight= '60px';
    title.innerHTML='Sign Up';
    text.innerHTML ='Password suggestions';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.trasnform= 'translatex(0)';
});
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('mobile');

function navToggle(){
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
};


btn.addEventListener('click', navToggle);

function hidemobilemenu(){
    const menubars = document.querySelector('.open') 
    if (window.innerWidth <= 850 && menubars){
        btn.classList.toggle('open')
        nav.classList.toggle('hidden')
    }
}
nav.addEventListener('click', hidemobilemenu);
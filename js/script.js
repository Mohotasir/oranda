

// sticky navbar 
let mainNav = document.querySelector('#main-nav');  
window.onscroll = function (){
    if(window.scrollY>=1){
        mainNav.classList.add('sticky');
    }
    else{
        mainNav.classList.remove('sticky');
    }
}

// connect form
let imgId =document.querySelector('#connect');
let form = document.querySelector('form');
let icon = document.querySelector('.icon');
let btn = document.querySelector('#sbmt-btn');
let displayForm = function(){
    form.style.display ='block';
    form.style.transition = .5;
}
let hideForm = function(){
    form.style.display = 'none';  
    
}



imgId.addEventListener("click",displayForm);
icon.addEventListener('click',hideForm);


// sticky navbar 
let mainNav = document.querySelector('#main-nav');  
window.onscroll = function (){
    if(window.scrollY>=100){
        mainNav.classList.add('sticky');
       
        
    }
    else{
        mainNav.classList.remove('sticky');
    }
}

//preloader

let loader = document.querySelector('#loader');
let show = function(){
    loader.style.display = "none";

}
window.addEventListener("load",show);
//icon clcik

let icons = document.querySelector('.icon-nav i');
let menu = document.querySelector('.menu');
let cutIcon = document.querySelector('.cut-nav i');

let showMenu = function(){
    menu.style.display =' block';
    icons.style.display='none';
}

icons.addEventListener("click",showMenu);
cutIcon.addEventListener("click",function(){
    menu.style.display = 'none';
    icons.style.display = 'block';
});

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
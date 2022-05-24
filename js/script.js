

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


let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
     loginform.classList.remove('active');
     shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active'); 
    loginform.classList.remove('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');
}


let loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');
     shoppingCart.classList.remove('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
     loginform.classList.remove('active');
     shoppingCart.classList.remove('active');
    searchform.classList.remove('active');
}

window.onscroll('#menu-btn').onclick = () =>{
     loginform.classList.remove('active');
     shoppingCart.classList.remove('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');
}

    var swiper = new Swiper(".event-slider", {
      loop:true,
      spaceBetween: 20,
      autoplay: {
        delay: 7500,
        disableOnIntraction: false,
      },
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
     
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        
        },
      },
 });



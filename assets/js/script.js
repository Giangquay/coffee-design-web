// menu bar
let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    carItem.classList.remove('active');
    searchItem.classList.remove('active');
}
// menu items
let carItem=document.querySelector('.card-items-container');
document.querySelector('#card-btn').onclick=()=>{
    carItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchItem.classList.remove('active');
}
// search items
let searchItem=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchItem.classList.toggle('active');
    navbar.classList.remove('active');
    carItem.classList.remove('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
    carItem.classList.remove('active');
    searchItem.classList.remove('active');
}
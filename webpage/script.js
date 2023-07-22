// toggle icon nav bar


//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = win
    });

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}
/* Hamburger Button on Click Show Drop Down Menu + Rotate Icon 
    Done by toggling the 'show' and 'flip' classes to the classlists
    of the navbar unordered list and hamburger menu */
const hamburger = document.getElementById('hamburger'); 
const navUL = document.getElementById('nav-ul');
hamburger.addEventListener('click', () => {
navUL.classList.toggle('show');
hamburger.classList.toggle('flip');
navUL.classList.toggle('border-outline')
})

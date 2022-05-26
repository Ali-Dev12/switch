// transition navbar

const nav = document.querySelector('.navbar')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 600) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

// Modal

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
    modalContainer.classList.toggle("active")
}

// 
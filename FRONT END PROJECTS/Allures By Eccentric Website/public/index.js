
const toggleBar = document.querySelector('#toggleBar');

toggleBar.addEventListener('click', evt);

function evt() {
    toggleBar.classList.toggle('fa-times')
    document.querySelector('#Links').classList.toggle('open');
}

window.onload = ()=> {
    const revealItem = document.querySelector('.reveal');

    windowHeight = window.innerHeight;
    RevealTop = revealItem.getBoundingClientRect().top;
    RevealPoint = 150;

    if(RevealTop = windowHeight - RevealPoint) {
        revealItem.classList.add('active');
    }

    else {
        revealItem.classList.remove('active')
    }
}

const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    header.classList.toggle('background', window.scrollY > 60)
})
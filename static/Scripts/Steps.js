const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');
const content = document.querySelectorAll('.content');
let content_current = document.querySelector('.content-active');

let currentActive = 1;

next.addEventListener('click', () => {

    currentActive++;

    if (currentActive >= circles.length) {
        currentActive = currentActive;
    }

    update();
    content_update();
})

prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive <= 1) {
        currentActive = 1;
    }

    update();
    content_update();
})

circles.forEach((circle, idx) => {
    circle.addEventListener('click', () => {
        currentActive = idx + 1;
        update();
        content_update();
    })
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if (currentActive <= 1) {
        prev.disabled = true;
    } else {
        prev.disabled = false;
    }

    if (currentActive >= circles.length) {
        next.disabled = true;
    } else {
        next.disabled = false;
    }


}

function content_update() {
    content_current.classList.remove('content-active')
    let next_content_current = content[currentActive - 1];
    next_content_current.classList.add('content-active');
    content_current = next_content_current;
}
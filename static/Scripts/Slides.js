const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
let auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    // Gets element with .current class
    const current = document.querySelector('.current');

    // remove .current from the element we got
    current.classList.remove('current');

    // Check for next sibiling (next slide)
    if(current.nextElementSibling){
        // Add current to next sibiling
        current.nextElementSibling.classList.add('current');
    } else {
        // Go back to beginning slide and add current
        slides[0].classList.add('current');
    }

    setTimeout(() => current.classList.remove('current'));

}


const prevSlide = () => {
    // Gets element with .current class
    const current = document.querySelector('.current');

    // remove .current from the element we got
    current.classList.remove('current');

    // Check for previous sibiling (previous slide)
    if(current.previousElementSibling){
        // Add current to previous sibiling
        current.previousElementSibling.classList.add('current');
    } else {
        // Go back to final slide and add current
        slides[slides.length - 1].classList.add('current');
    }

    setTimeout(() => current.classList.remove('current'));

}


// Button events
next.addEventListener('click', e =>{
    nextSlide();
    resetInterval();
});

prev.addEventListener('click', e =>{
    prevSlide();
    resetInterval();
});

/* When the autoState <button> is pressed we want to flip the state of auto (defined above) */
autoState.addEventListener('click', e =>{
    const auto_button= document.getElementById('autoState');
    auto = !auto;

    /* When auto is true we need to change the text for out auto_button to indicate auto scrolling is activated */
    if (auto){
        auto_button.innerHTML = "Auto: ON";
        auto_button.className='on';
        slideInterval = setInterval(nextSlide, intervalTime);
    } else {
        auto_button.innerHTML = "Auto: OFF";
        auto_button.className='off';

        /* This removes the setInterval() from our app so that the scrolling stops*/
        clearInterval(slideInterval);
    }
})

function resetInterval(){
    if(auto){
        clearInterval(slideInterval);

        /* The length of intervalTime determines how long until nextSlide() (defined above) is called */
        slideInterval = setInterval(nextSlide, intervalTime);
    }
}

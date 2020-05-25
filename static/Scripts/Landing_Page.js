// DOM elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

//options
const showAmPm = true;

// Show Time
function showTime() {
    let today = new Date(), //Creates new Date object that gets the current date and time from client computer
        hour = today.getHours(), //Exreacts hours from our Date object
        min = today.getMinutes(), //Exreacts minues from our Date object
        sec = today.getSeconds(); //Exreacts seconds from our Date object
    /* Set AM or PM */

    //By default, .getHour() returns a value between 0-23 (inclusive).  We use a ternary operator to check if hour is greater than or equal to 12.
    //If true, amPm = 'PM' else (denoted by : ), amPm = 'AM'
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    // modulo 12 will retain time in between 0-11 value range (i.e. 13 becomes 1, 16 becomes 4, 4 stays 4, etc.).  || 12 is used for when it is 12.  12 % 12 = 0 which is false, therefore,
    // hour will equal 12 (second option to our or statement here)
    hour = hour % 12 || 12;

    // Output time
    // We use back ticks (button next to number 1 key) to indicate a template literal.  Here we insert the variables hour, min, and sec into the inner HTML of the web page
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    //setTime() takes a function and calls it every x number of miliseconds.  So, every second (1000ms) we call showTime() (this is what gives live update to timer on landing page)
    setTimeout(showTime, 1000)
}

function addZero(n) {
    //parseInt() takes a number in base 10, if that number is less than 10 we will insert '0' + n, otherwise we use '' + n
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set background and greeting depending on time of day
function setBackgroundGreet() {
    let today = new Date(),
        hour = today.getHours(); /* Again, .getHours() returns the hours in military time (0-23) */

    //It is morning
    if (hour < 12) {
        document.body.style.backgroundImage = "url(./static/Img/Landing_Img/morning.jpg)";
        greeting.textContent = 'Good Morning';

    //It is evening
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url(./static/Img/Landing_Img/afternoon.jpg)";
        greeting.textContent = 'Good Afternoon';

    //It is night
    } else {
        document.body.style.backgroundImage = "url(./static/Img/Landing_Img/night.jpg)";
        greeting.textContent = 'Good Evening';

    }
}

/* These functions just retrieve from localStorage.  To set localStorage, see the event listeners below */
// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// We attach an event listener to this function below, therefore, a event object is passed to this function (denoted by e)
function setName(e) {

    // We only store information in localStorage if either a keypress or blur is done in the browser
    if (e.type === 'keypress') {
        // If a keypress occurs, we want to check that it is the enter key (which has a unique identifier of the value 13)
        if (e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur(); // This prevents us from going to a new line when we hit the enter key, instead we just exit our name variable 
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

function setFocus(e) {

    // We only store information in localStorage if either a keypress or blur is done in the browser
    if (e.type === 'keypress') {
        // If a keypress occurs, we want to check that it is the enter key (which has a unique identifier of the value 13)
        if (e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur(); // This prevents us from going to a new line when we hit the enter key, instead we just exit our name variable 
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Event listensers for keypress and blur actions on the HTML element with an id=name (saved in variable name)
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run 
setBackgroundGreet();
getName();
getFocus();
showTime();

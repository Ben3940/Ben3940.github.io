// Grab main image that will be center focus of page
const current_img = document.querySelector('#current');

// Grab all the images that are displayed at the bottom of the page
const imgs = document.querySelectorAll('.imgs img');

// Opacity variable that "whiteout" effect will be based off of
const opacity = 0.4;

// Variable to keep track of last image that was clicked along with the last text block that was shown
let lastImgId = "img_1";
let lastTextId = "text_1";

// This is an ES6 feature called destructuring which basically allows us to define multiple variables at once
//
// const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];
//
// NOTE: this is just a shorthand of what is being defined above

// .querySelectorAll() reutrns a node list which is like an array so we
// can call the higher-level forEach() to add an event listener on each 
// img within our node list.
// NOTE: we are adding an event listenser that will call the same type of 
//       function on each img
imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {

    // Get the id of the target that triggered the event listener and called imgClick()
    const target_id = e.target.id;

    // Get index of image number, used to determine which text block to use based on image selected
    // target_id will be equal to something like "img_1" or "img_6", we want the last char ("1" and "6" respectivly) to search for the appropriate text block to display
    const img_num = target_id.slice(-1);


    // Get the text block associated with the image selected
    const text_to_display = document.querySelector('#text_' + img_num);

    


    // If the targeted img has the same id as the last img to be selected then we do not want to do anything
    if (target_id === lastImgId){

    // If the targeted img is not the same as the last img to be clicked then we want to get the last one clicked and set its opacity back to one (thus removing "whiteout" effect).  We use querSelector() and more moderen higher-level function that selects either classes or ids based on if "." or "#" followed by identifier name (i.e. main-current, img_1, etc.).  Remeber, lastImgId is equal to something like "img_1" so we throw a "#" infront to get #img_1 and select the element with a id of "#img_1"
    } else {
        document.querySelector("#" + lastImgId).style.opacity = 1;
    }



    // Same thing as with selecting images but know we focus on the text blocks to be displayed
    if (text_to_display === lastTextId){

    } else {
        document.querySelector("#" + lastTextId).classList.remove('main-current');
    }
    
    // NOTE: we could also just iterate over all the images and set their opacities to 1 but I feel the simple if/else block above is more efficent
    // Reset the opacity of all images
    //imgs.forEach(img => (img.style.opacity = 1))


    // We change the current_img's source with the targeted (img that was clicked on) img's source (i.e. css classes and such)
    current_img.src = e.target.src;

    // Add fading class to current image to give fade in effect to main img of webpage
    current_img.classList.add('fade-in');

    // Remove fade-in class after 0.5 seconds
    setTimeout(() => current_img.classList.remove('fade-in'), 500);
    
    // The text blocked we want displayed will get the CSS class main-current which sets its opacity to 1 (instead of default 0) and moves it up to give, with both changes together, a sliding up, fade-in effect
    text_to_display.classList.add('main-current');

    // change opacity of targeted img
    e.target.style.opacity = opacity;

    // Remeber last img that was clicked
    lastImgId = e.target.id;

    // Remeber last text block's id that was displayed
    lastTextId = text_to_display.id;
}
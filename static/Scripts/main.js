let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

window.onscroll = function() {
    console.log(navbar.classList);
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};


new Vue({
    el: "#app",

    data: {

        //Picture of Myself
        selfImage: "<img src='static/Img/Index_Img/BenYanick.JPG' />",




        // ***** PROGRAMMING IMAGES *****

        //C++ claculator desktop app image
        CPPCalculator: "<img src='static/Img/Index_Img/Programming/Calculator.JPG' class='img-fluid mb-3' / >",

        //C++ text editor desktop app image
        CPPTextEditor: "<img src='static/Img/Index_Img/Programming/TextEditor.JPG' class='img-fluid mb-3' />",

        

        // ***** WEB DEV IMAGES *****

        //Landing Page image
        LandingPage: "<a href='Landing_Page.html'><img src='static/Img/Index_Img/Landing.JPG' /></a>",



        // ***** AI IMAGES *****

        //Python semantic AI for park reviews image
        sentimentAI: "<img src='static/Img/Index_Img/AI/ParkAI.JPG' class='img-fluid mb-3' />",

        //Python minimax AI for tic tac toe image
        ticTacToeAI: "<img src='static/Img/Index_Img/AI/TicTacToeAI.JPG' class='img-fluid mb-3' />",



        // ***** ELECTRONICS IMAGES *****

        //Arduino calculator image
        electronicsCalculator: "<img src='static/Img/Index_Img/Electronics/Calculator.jpeg' class='img-fluid mb-3' />",



        // ***** BLENDER IMAGES ***** 

        //Rings Blender image
        rings: "<img src='static/Img/Index_Img/Blender/RingCycles.png' class='img-fluid mb-3' / >",

        //Traing Blender image
        train: "<img src='static/Img/Index_Img/Blender/TrainCycles.jpg' class='img-fluid mb-3' / >",

        //Boat Blender image
        boat: "<img src='static/Img/Index_Img/Blender/BoatCycles.png' class='img-fluid mb-3' / >",

        //Docks Blender image
        docks: "<img src='static/Img/Index_Img/Blender/Dock_Improved_Eevee.png' />",

        lego: "<img src='static/Img/Index_Img/Blender/Lego_Cycles_Bright.png' />",

        vally: "<img src='static/Img/Index_Img/Blender/Vally.png' />",

        hammer: "<img src='static/Img/Index_Img/Blender/Hammer_Eevee.png' />"

    }
})
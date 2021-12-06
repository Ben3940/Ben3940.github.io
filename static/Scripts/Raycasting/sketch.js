/*

    Raycasting engine Version 3.00

    Supports:
    
      Multi-rays emminating from light source with no light bounce
      
      Either randomly moving light source or movement based on user's mouse

      User defined boundries to be placed on the Canvas

      Movement speed controls along with reset button for scene

    
    Future Goals:

      Light bouncing to give more "realistic" lighting effect

*/

let wall;
let ray;
let particle;
let walls = [];

let xoff = 0;
let yoff = 10000;

let xoff_rate = 0.002;
let yoff_rate = 0.002;

let new_bound_x1;
let new_bound_y1;

// Get input whose value will later be used to change the speed of the particle (using particle.updateSpeed())
const canvas_div_area = document.querySelector("#canvas-area");

let touches = true;
let pressed = false;

// Gets the screen width and height of the device, will be used primarily to set size of canvas

let screen_width = window.screen.width;

// Slight issue with screen sizes greater than 613px, canvas area would go past width dimension of screen
if (screen_width > 613) {
  screen_width = screen_width * 0.8;
}
const screen_height = window.screen.height;

const speed_option_buttons = document.querySelectorAll("button");
let last_speed_option = speed_option_buttons[0];
for (let i = 1; i <= 5; i++) {
  speed_option_buttons[i - 1].onclick = function (e) {
    // The inner HTML for each button is the movement speed that the particle will move at
    const speed = int(e.target.innerHTML);

    last_speed_option.classList.remove("current-speed");
    last_speed_option = e.target;
    last_speed_option.classList.add("current-speed");

    // We update the particles speed (for desktop) and x and y offset rates (for mobile devices)
    particle.updateSpeed(speed);

    xoff_rate = 0.002 * speed;
    yoff_rate = 0.002 * speed;
  };
}

// Add arrow function to last button in speed_option_buttons (technically this isn't a speed option control but its already in the array so might as well grab it this way) and check if its click.  This is the reset button for the application and returns all values to starting amounts
speed_option_buttons[5].addEventListener("click", (e) => {
  //Removes all walls except outer most boundry walls (these walls should be present at all times)
  walls = walls.slice(0, 4);
  particle = new Particle();

  xoff_rate = 0.002;
  yoff_rate = 0.002;

  last_speed_option.classList.remove("current-speed");
  last_speed_option = speed_option_buttons[0];
  last_speed_option.classList.add("current-speed");
});

// Records the current (x, y) of the mouse when any mouse button is pressed down
window.addEventListener("mousedown", (e) => {
  new_bound_x1 = mouseX;
  new_bound_y1 = mouseY;
});

// Uses the (x, y) of the mouse when its button was pressed down and the current (x, y), upon being released, to generate a new boundry
// This new boundry is added to the array of walls that will influence the light rays
window.addEventListener("mouseup", (e) => {
  walls.push(new Boundry(new_bound_x1, new_bound_y1, mouseX, mouseY));
});

// Event listenser to register "touches" on touch-screen devices.  Creates boundry (similar to mouse click on desktop) between two touches indicated by user on touch-screen device.
// Basically, every two touches will create a new boundry with the first touch being the starting point and the second touch being the ending point of the boundry
// touches is a boolean variable that flips states with every touch, when true this is the "first" touch and when false this is the "second" touch
canvas_div_area.addEventListener(
  "touchend",
  (e) => {
    if (touches) {
      new_bound_x1 = mouseX;
      new_bound_y1 = mouseY;
    } else {
      walls.push(new Boundry(new_bound_x1, new_bound_y1, mouseX, mouseY));
    }

    touches = !touches;
  },
  false
);

/* p5.js will look for a setup() and a draw() in any p5.js project.  These functions are similar to Arduino's setup() and loop() functions where code intended to run once is defined in setup() and code intended to be animated is defined in draw()
 */
function setup() {
  // Will store the beginning (x, y) for the user defined boundary

  // This is a p5.js function that creates the canvas (500x500 px in this case) where our boundries and particle will be displayed
  const raycasting_canvas = createCanvas(screen_width, screen_height / 2);

  raycasting_canvas.parent("canvas-area");
  // Boundry(x1, y1, x2, y2), left to right x increase, top to bottom y increases

  // Include if you want randomly placed walls
  /* for (let num_walls = 0; num_walls < 5; num_walls++) {
    let x1 = random(width);
    let y1 = random(width);
    let x2 = random(height);
    let y2 = random(height);

    walls.push(new Boundry(x1, y1, x2, y2));
  } */

  // Walls that wrap the boundaries of the canvas.  These are included to allow light rays to extend out entirely, giving a more realistic lighting effect.  Comment out these lines to have light source effected only by randomly created walls above or user defined walls with mouse buttons
  walls.push(new Boundry(0, 0, width, 0));
  walls.push(new Boundry(width, 0, width, height));
  walls.push(new Boundry(width, height, 0, height));
  walls.push(new Boundry(0, height, 0, 0));

  particle = new Particle();

  // Event listenser that will pull the value from input field with id of "#move-speed" everytime its value changes
  // It then calls particle.updateSpeed() to change the particle's speed
  /* move_speed_input.addEventListener("change", (e) => {
    if (e.target.value > 5) {
      e.target.value = 5;
      xoff_rate = 0.01;
      yoff_rate = 0.01;
      particle.updateSpeed(5);
    } else if (e.target.value < 1) {
      e.target.value = 1;
      xoff_rate = 0.002;
      yoff_rate = 0.002;
      particle.updateSpeed(1);
    } else {
      let speed_val = int(e.target.value);
      particle.updateSpeed(speed_val);
      xoff_rate = 0.002 * speed_val;
      yoff_rate = 0.002 * speed_val;
    }
    console.log("Movement speed:" + e.target.value);
  });*/
}

function draw() {
  background(0);

  if (keyIsDown(65)) {
    particle.moveLeft();
  } else if (keyIsDown(68)) {
    particle.moveRight();
  } else if (keyIsDown(87)) {
    particle.moveUp();
  } else if (keyIsDown(83)) {
    particle.moveDown();
  }

  // For each of our walls we want to show them
  for (let wall of walls) {
    wall.show();
  }

  if (screen_width <= 613) {
    particle.update(noise(xoff) * width, noise(yoff) * height);
  }

  // Move the "light source" around randomly based on height and width of Canvas
  //particle.update(noise(xoff) * width, noise(yoff) * height);

  // Show the "light source"
  particle.show();

  // Look at all the walls and determine if any rays intersect the wall
  particle.look(...walls);

  // Increment x and y offsets to keep "light source" moving
  xoff += xoff_rate;
  yoff += yoff_rate;
  /* let pt = ray.cast(wall);
  if (pt) {
    fill(255);
    ellipse(pt.x, pt.y, 8, 8);
  } */
}

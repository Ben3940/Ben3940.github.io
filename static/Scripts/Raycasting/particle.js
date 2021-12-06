class Particle {
  constructor() {
    // The particle (which is our "light source") will start in the middle of the canvas
    this.pos = createVector(width / 2, height / 2);

    // An array that will store all the rays being casted by this particle
    this.rays = [];

    this.speed = 1;

    // Starting at 0 degrees and incrementing by 1 degree until we hit 360 degrees.  Each degree will have a ray to represent it
    // If you want less light rays increment "ang" by a larger value.
    for (let ang = 0; ang < 360; ang++) {
      this.rays.push(new Ray(this.pos, radians(ang)));
    }
  }

  // We want to update the particles (x, y) coordinates when given a new set
  // Inside sketch.js (under Draw()) we are updating the particles position based on either perlin noise or the user's mouse coordinates
  update(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }

  updateSpeed(speed) {
    this.speed = speed;
  }

  moveLeft() {
    if (this.pos.x > 0) {
      this.pos.x -= this.speed;
    } else {
      this.pos.x = 0;
    }
  }

  moveRight() {
    console.log(this.pos.x);
    if (this.pos.x < width) {
      this.pos.x += this.speed;
    } else {
      this.pos.x = width;
    }
  }

  moveUp() {
    if (this.pos.y > 0) {
      this.pos.y -= this.speed;
    } else {
      this.pos.y = 0;
    }
  }

  moveDown() {
    if (this.pos.y < height) {
      this.pos.y += this.speed;
    } else {
      this.pos.y = height;
    }
  }

  // We look to see if any of the rays from our particle are intersecting with a wall
  look(...walls) {
    for (let ray of this.rays) {
      // closest will be the closest intersection point that we will find
      let closest = null;

      // shortest distance between origin point of current light ray and closest intersection point
      let record = Infinity;

      for (let wall of walls) {
        // We cast a ray out to the given wall, if the ray intersects then we are given back the point of intersection
        // We will draw a line segment from this particles (x, y) to the point of intersection's (x, y), thus creating our light ray
        const pt = ray.cast(wall);

        // If an intersection point was found then we can calculate distances to the nearest intersection point
        if (pt) {
          // The distance between the particle (same as origin point of current light ray) and intersection point on wall
          const dist = p5.Vector.dist(this.pos, pt);

          // if the current distance is smaller then the record smallest distance then we update dist to be the new record
          // We also want to set the point that gave us dist to be the new closest intersection point
          if (dist < record) {
            record = dist;
            closest = pt;
          }
        }
      }

      // If there was a closest point (meaning that an intersection point was found) then we will draw a white (255), moderatly transparent (50) line from
      // our ray's origin (x, y) and the closest intersection point's (x, y)
      if (closest) {
        stroke(255, 50);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }

  // Just displays our "light source"
  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 4);
    for (let ray of this.rays) {
      ray.show();
    }
  }
}

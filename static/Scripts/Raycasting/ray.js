class Ray {
  constructor(pos, angle) {
    // Starting point that the ray will eminate from.  This is the same pos as our Particle class since it is what generates the light rays
    this.pos = pos;

    //fromAngle() is a static function within the p5 library that creates a vector from the given angle
    this.dir = p5.Vector.fromAngle(angle);
  }

  lookAtPT(x, y) {
    this.dir.x = x - this.pos.x;
    this.dir.y = y - this.pos.y;
    this.dir.normalize();
  }

  show() {
    stroke(255);
    push();
    translate(this.pos.x, this.pos.y);
    line(0, 0, this.dir.x * 10, this.dir.y * 10);
    pop();
  }

  // Casts a "light ray", mathematically, and determines if it intersects with a boundary line segments
  // The math in this function was pulled off Wikipedia and is the formula for calculating if two lines intersect.
  // particle.js's look() uses this function to determine if there is a point of intersection that the light ray encounters
  // if so then it will draw the ray
  cast(wall) {
    const x1 = wall.a.x;
    const y1 = wall.a.y;
    const x2 = wall.b.x;
    const y2 = wall.b.y;

    const x3 = this.pos.x;
    const y3 = this.pos.y;
    const x4 = this.pos.x + this.dir.x;
    const y4 = this.pos.y + this.dir.y;

    const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

    if (den == 0) {
      return;
    }

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

    // If these conditionals are met then we know the "light ray" and boundary line segment intersect
    if (t > 0 && t < 1 && u > 0) {
      const pt = createVector();

      // Based off wikipedia, we can calculate the point of intersection between two line segments
      pt.x = x1 + t * (x2 - x1);
      pt.y = y1 + t * (y2 - y1);
      return pt;
    } else {
      return;
    }
  }
}

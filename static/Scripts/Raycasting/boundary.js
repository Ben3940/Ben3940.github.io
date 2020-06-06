class Boundry {
  //When a new boundry is created we will use two pairs of coordinates (x1, y1) and (x2, y2) as start and end points to draw a line between them
  constructor(x1, y1, x2, y2) {
    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);
  }

  show() {
    //Set stroke color to 255 (white)
    stroke(255);

    // Creation of the actual line between our starting and ending point
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}

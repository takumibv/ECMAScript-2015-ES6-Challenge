//Abstract super class Polygon
export class Polygon {

  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
}

export class Rectangle extends Polygon {

  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
  }

  get area() { return this.height * this.width;}
}

export class Square extends Rectangle{
  constructor(side) {
    super(side, side);
    this.name = "Square";
  }
}

export class Circle extends Polygon{
  constructor(side) {
    super(2*side, 2*side);
    this.name = "Circle";
  }
    
  get area() { return Math.PI * this.height/2 * this.height/2;}
}



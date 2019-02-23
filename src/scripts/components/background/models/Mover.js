export default class Mover {
  constructor(p, x, y, mass) {
    this.p            = p;
    this.location     = p.createVector(
      typeof x === "number" ? x : p.width / 2,
      typeof y === "number" ? y : p.height / 2
    );
    this.velocity     = p.createVector(0, 0);
    this.acceleration = p.createVector(0, 0);
    this.mass         = mass || 1;
    this.topspeed     = 100;
  }
  
  update() {
    // Apply the acceleration vector to the velocity
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    
    // Apply the velocity vector to the location
    this.location.add(this.velocity);
    
    // Reset all forces
    this.acceleration.mult(0);
    
    this.checkEdges();
  }
  
  isInside(l) {
    return this.location.x > l.x
      && this.location.x < l.x + l.width
      && this.location.y > l.y
      && this.location.y < l.y + l.height
  }
  
  drag(l) {
    const speed         = this.velocity.mag();
    const dragMagnitude = l.dragCoefficient * speed * speed;
    
    const dragForce = this.velocity.copy();
    dragForce.mult(-1);
    dragForce.normalize();
    dragForce.mult(dragMagnitude);
    
    this.applyForce(dragForce);
  }
  
  applyForce(force) {
    const dampenedForce = this.p.Vector.div(force, this.mass);
    this.acceleration.add(dampenedForce);
  }
  
  checkEdges() {
    const {p, location, velocity} = this;
    if (location.x > p.width) {
      velocity.x = velocity.x * -0.9;
      location.x = p.width;
    }
    if (location.x < 0) {
      velocity.x = velocity.x * -0.9;
      location.x = 0;
    }
  
    if (location.y > p.height) {
      velocity.y = velocity.y * -1;
      location.y = p.height;
    }
    if (location.y < 0) {
      velocity.y = velocity.y * -1;
      location.y = 0;
    }
  }
}


export default class Ascii {
  constructor(p, location, spacing) {
    this.p = p;
    this.location = location;
    this.noiseOffset = location.copy().mult(1 / spacing * 0.05);
    this.velocity = 0;
    this.z = 0;
    this.char = '-';
  }

  update(frame, mouse) {
    const noiseVal = Math.floor(this.p.noise(this.noiseOffset.x - frame, (this.noiseOffset.y * 0.5) - frame) * 10);
    // const noiseVal = 4;
    const noiseOffset = noiseVal - this.z;
    const mouseOffset = this.p.Vector.sub(this.location, mouse).mag();
    let mouseForce;

    if(this.p.mouseIsPressed) {
      mouseForce = Math.min(mouseOffset - 200, 0) * -0.03;
    } else {
      mouseForce = Math.min(mouseOffset - 120, 0) * -0.035;
    }

    this.velocity += mouseForce;

    this.velocity += noiseOffset;

    const friction = this.velocity * -0.9;
    this.velocity += friction;

    this.z += this.velocity;

    if (this.z < 2) {
      this.char = ' ';
    } else if (this.z < 3) {
      this.char = ' ';
    } else if (this.z < 4) {
      this.char = '-';
    } else if (this.z < 5) {
      this.char = '-';
    } else if (this.z < 6) {
      this.char = '+';
    } else if (this.z < 7) {
      this.char = '%';
    } else if (this.z < 8) {
      this.char = '$';
    } else if (this.z < 9) {
      this.char = '@';
    } else if (this.z < 10) {
      this.char = '0';
    } else if (this.z >= 10) {
      this.char = '8';
    }

    this.noise = this.z;
  }

  display() {
    this.p.text(
      this.char,
      // this.velocity.toFixed(0),
      this.location.x,
      this.location.y
    );
  }
}

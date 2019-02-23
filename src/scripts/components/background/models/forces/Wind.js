export default class Wind {
  constructor(p, velocity, type){
    this.p = p;
    this.velocity = velocity || p.createVector(0 , 0.1);
    this.strength = velocity.mag();
    this.noiseOffset = p.createVector(0, 10000);
    this.type = type || 'normal';
  }
  
  getForce() {
    if(this.type === "noise"){
      return this.getNoiseVector();
    } else {
      return this.getNormalVector();
    }
  }
  
  getNoiseVector() {
    const p = this.p;
    this.noiseOffset.x += 0.001;
    this.noiseOffset.y += 0.001;
    return p.createVector(
      p.map(p.noise(this.noiseOffset.x), 0, 1, -this.strength, this.strength),
      p.map(p.noise(this.noiseOffset.y), 0, 1, -this.strength, this.strength)
    );
  }
  
  getNormalVector() {
    return this.velocity;
  }
}
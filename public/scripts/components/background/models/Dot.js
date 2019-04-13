"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dot {
    constructor(p, origin, velocity, acceleration, mass) {
        this.p = p;
        this.origin = origin || p.createVector(p.width / 2, p.height / 2);
        this.location = this.origin.copy();
        this.velocity = velocity || p.createVector(0, 0);
        this.acceleration = acceleration || p.createVector(0, 0);
    }
    update(mouse, originForceStrength = -10, mouseStrength = 4, mouseRange = 1000) {
        const originOffset = this.p.Vector.sub(this.location, this.origin);
        const originDistance = originOffset.mag().toFixed(3);
        this.velocity = originOffset
            .normalize()
            .mult(originDistance / originForceStrength);
        // .mult(originDistance / -10);
        const mouseForce = this.p.Vector.sub(this.location, mouse);
        const mouseDist = mouseForce.mag();
        if (mouseDist < mouseRange) {
            mouseForce.normalize();
            mouseForce.mult(mouseStrength / mouseDist * mouseDist);
            // mouseForce.mult(4 / mouseDist * mouseDist);
            this.velocity.add(mouseForce);
        }
        // Apply the velocity vector to the location
        this.location.add(this.velocity);
        // reset acceleration
        this.acceleration.mult(0);
    }
    display() {
        this.p.ellipse(this.location.x, this.location.y, 2, 2);
    }
}
exports.default = Dot;
//# sourceMappingURL=Dot.js.map
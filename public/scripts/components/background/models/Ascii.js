"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ascii {
    constructor(p, location, spacing) {
        this.p = p;
        this.location = location;
        this.noiseOffset = location.copy().mult(1 / spacing * 0.05);
        this.z = 0;
        this.char = '-';
        this.mouseTarget = 0;
    }
    update(frame, mouse) {
        const noiseVal = Math.floor(this.p.noise(this.noiseOffset.x - frame, (this.noiseOffset.y * 0.5) - frame) * 10);
        const mouseOffset = this.p.Vector.sub(this.location, mouse).mag();
        let mouseMag;
        if (this.p.mouseIsPressed) {
            mouseMag = Math.min(mouseOffset - 200, 0) * -0.03;
        }
        else {
            mouseMag = Math.min(mouseOffset - 120, 0) * -0.035;
        }
        this.mouseTarget = this.p.lerp(this.mouseTarget, mouseMag, 0.1);
        this.z = noiseVal + this.mouseTarget;
        if (this.z < 2) {
            this.char = ' ';
        }
        else if (this.z < 3) {
            this.char = ' ';
        }
        else if (this.z < 4) {
            this.char = '-';
        }
        else if (this.z < 5) {
            this.char = '-';
        }
        else if (this.z < 6) {
            this.char = '+';
        }
        else if (this.z < 7) {
            this.char = '%';
        }
        else if (this.z < 8) {
            this.char = '$';
        }
        else if (this.z < 9) {
            this.char = '@';
        }
        else if (this.z < 10) {
            this.char = '0';
        }
        else if (this.z >= 10) {
            this.char = '8';
        }
        this.noise = this.z;
    }
    display() {
        this.p.text(this.char, 
        // this.velocity.toFixed(0),
        this.location.x, this.location.y);
    }
}
exports.default = Ascii;
//# sourceMappingURL=Ascii.js.map
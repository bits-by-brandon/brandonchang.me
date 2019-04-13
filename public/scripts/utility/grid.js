"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function grid() {
    let gridContext = null, width = null, height = null, top = null, left = null, domClientRect = null, inputs = {
        mouseX: null,
        mouseY: null,
        touches: []
    }, cursorRange = 80, dotsize = 1, spacing = 17;
    function innerInit() {
        let domNode = document.getElementById('dotgrid');
        if (domNode) {
            console.log('initializing grid logic');
        }
        else {
            console.log('no grid found');
            return;
        }
        gridContext = domNode.getContext("2d");
        resizeCanvas();
        //get dimensions of canvas
        domClientRect = domNode.getBoundingClientRect();
        top = domClientRect.top;
        left = domClientRect.left;
        //register events
        window.addEventListener('mousemove', handleMousemove, false);
        window.addEventListener('resize', resizeCanvas, false);
        window.requestAnimationFrame(draw);
    }
    function handleMousemove(e) {
        inputs.mouseX = e.clientX;
        inputs.mouseY = e.clientY;
    }
    function resizeCanvas(e) {
        gridContext.canvas.width = window.innerWidth;
        gridContext.canvas.height = window.innerHeight;
        width = window.innerWidth;
        height = window.innerHeight;
    }
    function circle(x, y, calculatedX, calculatedY, distance) {
        x += calculatedX / 200 - distance % 100 * (-100 / calculatedY);
        y += -(calculatedY / 200 + distance % 150 * (-100 / calculatedX));
        gridContext.fillStyle = "rgba(255,255,255,0.15)";
        gridContext.fillRect(Math.round(x), Math.round(y), dotsize, dotsize);
    }
    function circlegrid(x, y, distance) {
        if (distance < cursorRange) {
            let value = 1 / (distance / cursorRange) - 0.8;
            gridContext.fillStyle = `rgba(0,0,0, ${value} )`;
        }
        else {
            gridContext.fillStyle = "rgba(0,0,0,0.3)";
        }
        gridContext.fillRect(Math.round(x), Math.round(y), dotsize, dotsize);
    }
    //Primary draw logic. Gets called every tick (~16ms)
    function draw() {
        // clear canvas
        gridContext.clearRect(0, 0, width, height);
        //Generate position of each dot
        for (let x = 0; x < width / spacing; x++) {
            for (let y = 0; y < height / spacing; y++) {
                let calculatedX = inputs.mouseX - left;
                let calculatedY = inputs.mouseY - top;
                let spacedX = x * spacing;
                let spacedY = y * spacing;
                let distance = Math.sqrt(((spacedX - calculatedX) * (spacedX - calculatedX)) + ((spacedY - calculatedY) * (spacedY - calculatedY)));
                circlegrid(spacedX, spacedY, distance);
            }
        }
        window.requestAnimationFrame(draw);
    }
    return {
        init: innerInit
    };
}
exports.default = grid();
//# sourceMappingURL=grid.js.map
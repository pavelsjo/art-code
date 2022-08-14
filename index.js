const canvas = document.querySelectorAll('canvas');

const drawRectang = ({context, w = 100, h = 100, degrees = -45, fill = 'blue', stroke = 'black'}) => {
    
    const radius =  w;
    const angle  = degreesToRadians(degrees);

    const rx = Math.cos(angle) * radius;
    const ry = Math.sin(angle) * radius;

    context.save();
    context.translate(rx * -0.5, (ry + h) * -0.5);               
    context.strokeStyle = stroke;
    context.fillStyle = fill;
    context.lineWidth = 5;

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(rx, ry);
    context.lineTo(rx, ry + h);
    context.lineTo(0, h);
    context.closePath();    
    context.stroke();
    context.fill();

    context.restore();

};

const sketch = (color) => {
    
    return ({width, height, context}) => {
        // background
        context.fillStyle = randomRGBA(color);
        context.fillRect(0, 0, width, height);

        // draw
        const cant_rects = 50;
        const rects = [];
        
        for(let i = 0; i < cant_rects; i++) {
    
            // params
            const x = random(width);
            const y = random(height);
            const w = random(600);
            const h = random(200);
            const degrees = -30;

            const fill = randomRGBA(color);
            const stroke = randomRGBA(color);
            rects.push({x, y, w, h, degrees, fill, stroke});
        };
        rects.forEach(rect => {

            const {x, y, w, h, degrees, fill, stroke} = rect;

            // draw block
            context.save();
            context.translate(x, y);
            drawRectang({context, w, h, degrees, fill, stroke});
            context.restore();
        });
    };
};

canvasSketch(sketch('blue'),  canvas[0], settings = {width: 540, height: 1080});
canvasSketch(sketch('red'),   canvas[1], settings = {width: 540, height: 1080});
canvasSketch(sketch('green'), canvas[2], settings = {width: 540, height: 1080});
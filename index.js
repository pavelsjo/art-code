const canvas = document.querySelectorAll('canvas');

const drawRectang = ({context, w = 100, h = 100, degrees = -45, fill = 'blue', stroke = 'black', blend='source-over'}) => {
    
    const radius =  w;
    const angle  = degreesToRadians(degrees);

    const rx = Math.cos(angle) * radius;
    const ry = Math.sin(angle) * radius;

    context.save();
    context.translate(rx * -0.5, (ry + h) * -0.5);               
    context.strokeStyle = stroke;
    context.fillStyle = fill;
    context.lineWidth = 10;
    context.globalCompositeOperation = blend;
    context.shadowColor = `rgba(0, 0, 0, 0.5)`;
    context.shadowOffsetX = -5;
    context.shadowOffsetY =  5;    

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(rx, ry);
    context.lineTo(rx, ry + h);
    context.lineTo(0, h);
    context.closePath();
    context.fill();

    context.shadowColor = null;
    context.stroke();

    context.globalCompositeOperation = 'source-over';

    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
    
    context.restore();

};

const sketch = (color) => {
    
    return ({width, height, context}) => {
        // background
        context.fillStyle = randomRGBA(color);
        context.fillRect(0, 0, width, height);

        // draw
        const cant_rects = 40;
        const rects = [];
        
        for(let i = 0; i < cant_rects; i++) {
    
            // params
            const x = random(0, width);
            const y = random(0, height);
            const w = random(600, width);
            const h = random(40, 200);
            const degrees = -30;
            
            const fill = randomRGBA(color);
            const stroke = randomRGBA(color);
            const blend = (Math.random() > 0.5) ? 'overlay' : 'source-over';
            rects.push({x, y, w, h, degrees, fill, stroke});
        };
        rects.forEach(rect => {

            const {x, y, w, h, degrees, fill, stroke, blend} = rect;

            // draw block
            context.save();
            context.translate(x, y);
            drawRectang({context, w, h, degrees, fill, stroke, blend});
            context.restore();
        });
    };
};

canvasSketch(sketch('blue'),  canvas[0], settings = {width: 540, height: 1080});
canvasSketch(sketch('red'),   canvas[1], settings = {width: 540, height: 1080});
canvasSketch(sketch('green'), canvas[2], settings = {width: 540, height: 1080});
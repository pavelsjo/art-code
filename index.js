const canvas = document.querySelectorAll('canvas');

const settings = {
    dimensions: [540, 1080]
};

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

const createRandomRectang = ({quantity = 100, width, height, degrees = -30, color = 'blue'}) => {
    
    const rectangs = [];
    
    for(let i = 0; i < quantity; i++) {
        
        // params
        const x = randomRange(0, width);
        const y = randomRange(0, height);
        const w = randomRange(300, width);
        const h = randomRange(10, 200);
        
        const fill = randomRGBA(color);
        const stroke = randomRGBA(color);
        const blend = (Math.random() > 0.8) ? 'overlay' : 'source-over';

        rectangs.push({x, y, w, h, degrees, fill, stroke, blend});
    };

    return rectangs;
};

const sketch = (color) => {
    
    return ({width, height, context}) => {
        // background
        context.fillStyle = randomRGBA(color);
        context.fillRect(0, 0, width, height);

        // draw rectangs
        const rectangs = createRandomRectang({quantity : 30, width, height, color, degrees:-45});
        rectangs.forEach(rectang => {

            const {x, y, w, h, degrees, fill, stroke, blend} = rectang;

            context.save();
            context.translate(x, y);
            drawRectang({context, w, h, degrees, fill, stroke, blend});
            context.restore();
        });
    };
};

// Art Gallery
canvasSketch(sketch('blue'),  canvas[0], settings);
canvasSketch(sketch('red'),   canvas[1], settings);
canvasSketch(sketch('green'), canvas[2], settings);
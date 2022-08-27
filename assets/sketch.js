const canvasSketch = (callbackFunc, canvas, settings) => {

    // canvas
    const [width, height] = settings.dimensions;
    canvas.width  = width;
    canvas.height = height;

    // context
    const context = canvas.getContext('2d');

    // draw
    callbackFunc({width, height, context});
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
        
        // parameters
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

const drawLine = ({width, height, context, color}) => {
    
    // canvas center
    let x = width  * 1/2;
    let y = height * 1/2;

    // draw
    context.save();    
    context.translate(x, y);
    context.strokeStyle = color ? color : 'blue';

    // init
    context.beginPath();
    context.moveTo(0,0);

    // transform
    const radius = 800;
    const angle  = degreesToRadians(30);
    x = Math.cos(angle) * radius;
    y = Math.sin(angle) * radius;
    context.lineTo(x, y);

    // close
    context.stroke();
    context.restore();
};

const sketch = (color) => {

    // seed
    setSeed(seed);    
    
    return ({width, height, context}) => {
        // background
        context.fillStyle = randomRGBA(color);
        context.fillRect(0, 0, width, height);

        // draw rectangs
        const rectangs = createRandomRectang({quantity : 250, width, height, color, degrees: angle});
        rectangs.forEach(rectang => {

            const {x, y, w, h, degrees, fill, stroke, blend} = rectang;

            context.save();
            context.translate(x, y);
            drawRectang({context, w, h, degrees, fill, stroke, blend});
            context.restore();
        });
    };
};
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
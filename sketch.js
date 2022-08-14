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
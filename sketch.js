// utils
const degreesToRadians = degrees => (degrees * Math.PI) / 180;
const radiansToDegrees = radians => (radians * 180) / Math.PI;

const random = (min = 0, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    };
    return Math.trunc(Math.random() * (max - min)) + min;
};


const randomRGBA = (color) => {

    switch (color) {
        case 'blue': 
            return `rgba(0, 0, ${random(0, 255)}, 1)`;
        case 'green': 
            return `rgba(0, ${random(0, 255)}, 0, 1)`;
        case 'red': 
            return `rgba(${random(0, 255)}, 0, 0, 1)`;
        case 'yellow': 
            return `rgba(255, 255, ${random(0, 255)}, 1)`;
        case 'purple': 
            return `rgba(${random(70, 139)}, ${random(0, 50)}, ${random(140, 204)}, 1)`;
        default:
            return `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, 1)`;
    };
};

const risoColors = () => {
    fetch('https://raw.githubusercontent.com/mattdesl/riso-colors/master/riso-colors.json')
    .then(data => data.json())
    .then(json => console.log(json));
};


const canvasSketch = (callbackFunc, canvas, settings = {width: 1080, height: 1080}) => {

    // canvas
    const {width, height} = settings;
    canvas.width  = width;
    canvas.height = height;

    // context
    const context = canvas.getContext('2d');

    // draw
    callbackFunc({width, height, context});
};
// canvas selection
const blue = document.querySelector('#blue');

// settings
const seed = 'pavelsjo';
const settings = {
    dimensions: [1040 * 1, 1040 * 2]
};

// art code
canvasSketch(sketch('blue'),  blue, settings);
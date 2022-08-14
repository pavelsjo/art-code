const canvas = document.querySelectorAll('canvas');

const seed = 'pavelsjo';
const settings = {
    dimensions: [540, 1080]
};

// gallery art
canvasSketch(sketch('red'),  canvas[0], settings);
canvasSketch(sketch('green'),   canvas[1], settings);
canvasSketch(sketch('blue'), canvas[2], settings);
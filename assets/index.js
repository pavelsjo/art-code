// selectors
const intue = document.querySelector('.intue');
const move = document.querySelector('.move');
const mutate = document.querySelector('.mutate');
const unique = document.querySelector('.unique');

// canvas
const blue = document.querySelector('#blue');
const red = document.querySelector('#red');
const green = document.querySelector('#green');

// events
intue.addEventListener('change', e => {
    seed = e.target.value;

    //redraw
    canvasSketch(sketch('blue'), blue, { dimensions: [600, 725]});
    canvasSketch(sketch('red'), red, { dimensions: [600, 727]});
    canvasSketch(sketch('green'), green, { dimensions: [600, 727]});
});
unique.addEventListener('submit', e => {
    
    e.preventDefault();
    seed = e.target.unique.value;

    //redraw
    canvasSketch(sketch('blue'), blue, { dimensions: [600, 725]});

});
move.addEventListener('click', e => {

    if (e.target.value === 'do') {
        angle = 0
        canvasSketch(sketch('green'), green, { dimensions: [600, 725]});
    } else {
        angle = 90
        canvasSketch(sketch('green'), green, { dimensions: [600, 725]});
    }

});
mutate.addEventListener('click', e => {
    console.log(e)

    canvasSketch(sketch('yellow'), red, { dimensions: [600, 725]});

});

// settings
let seed = 'pavelsjo';
let angle =  90;

// KMath.floor((Math.random() * 360)%10) *10;

// art code
canvasSketch(sketch('blue'), blue, { dimensions: [600, 725]});
canvasSketch(sketch('red'), red, { dimensions: [600, 727]});
canvasSketch(sketch('green'), green, { dimensions: [600, 727]});
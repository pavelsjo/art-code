// unit convertion
const degreesToRadians = degrees => (degrees * Math.PI) / 180;
const radiansToDegrees = radians => (radians * 180) / Math.PI;

// randomize
const RNG = (seed) => {
    let m_as_number = 2**53 - 111
    let m = 2n**53n - 111n
    let a = 5667072534355537n
    let s = BigInt(seed) % m
    return () => {
        return Number(s = s * a % m) / m_as_number
    }
};

const setSeed = (seed) => {
    const seedValue = seed ? seedConvertion(seed) : Date.now();
    Math.random = RNG(seedValue);
};

const seedConvertion = (seed) => {
    let seedNum = 0;

    for(let letter of String(seed)) {
        const num = letter.charCodeAt()
        seedNum += num
    };

    return seedNum;
}

const randomRange = (min = 0, max) => {
    
    if (max === undefined) {
        max = min;
        min = 0;
    };

    return Math.trunc(Math.random() * (max - min)) + min;
};

const randomRGBA = (color) => {

    switch (color) {
        case 'blue': 
            return `rgba(0, 0, ${randomRange(0, 255)}, 1)`;
        case 'green': 
            return `rgba(0, ${randomRange(0, 255)}, 0, 1)`;
        case 'red': 
            return `rgba(${randomRange(0, 255)}, 0, 0, 1)`;
        case 'yellow': 
            return `rgba(255, 255, ${randomRange(0, 255)}, 1)`;
        case 'purple': 
            return `rgba(${randomRange(70, 139)}, ${randomRange(0, 50)}, ${randomRange(140, 204)}, 1)`;
        default:
            return `rgba(${randomRange(0, 255)}, ${randomRange(0, 255)}, ${randomRange(0, 255)}, 1)`;
    };
};

// colors paletes
const risoColors = () => {
    fetch('https://raw.githubusercontent.com/mattdesl/riso-colors/master/riso-colors.json')
    .then(data => data.json())
    .then(json => console.log(json));
};
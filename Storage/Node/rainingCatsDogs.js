var dogs = {
    raining: true,
    noise: "woof!",
    makeNoise: dogRain()
};

var cats = {
    raining: false,
    noise: "meow",
    makeNoise: catRain()
};

function dogRain() {
    if (dogs.raining == true){
        console.log(dogs.noise);
    }
}

function catRain() {
    if (cats.raining == true) {
        console.log(cats.noise);
    }
}
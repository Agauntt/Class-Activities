function Animal(raining, noise) {
    this.raining = true,
    this.noise = noise,
    this.makeNoise = function() {
        if (this.raining){
            console.log(this.noise);
        }
    };
}

var dog = new Animal(true, "woof");
var cat = new Animal(false, "meow");

dog.makeNoise();
cat.makeNoise();


//========================================================

function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
}

Animal.prototype.makeNoise = function() {
    if (this.raining === true) {
        console.log(this.noise);
    }
}

var dog = new Animal(true, "woof");
var cat = new Animal(false, "meow");

dogs.makeNoise();
cat.makeNoise();
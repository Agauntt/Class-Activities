function DigitalPal() {
    this.hungry = false,
    this.sleepy = false,
    this.bored = true,
    this.age = 0,
    this.feed = function() {
        if (this.hungry){
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("I'm not hungry right now");
        }
    };
    this.sleep = function() {
        if (this.sleepy) {
            console.log("Zzzzzzz");
            this.sleepy = false;
            this.bored = true;
            increaseAge();
        } else {
            console.log("I'm not sleepy");
        }
    };
    this.play = function(){
        if (this.bored) {
            console.log("Yay! Lets play!");
            this.hungry = true;
        } else {
            console.log("Not right now...Maybe later?");
        }
    };
    this.increaseAge = function (){
        this.age++;
        console.log("yay! I'm " + age + "age units old!");
    };
}

var dog = new DigitalPal();

console.log(dog.age);
console.log(dog.hungry);

dog.play();

console.log(dog.hungry);
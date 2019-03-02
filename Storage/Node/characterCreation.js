function Character(name, prof, gender, age, str, HP,) {
    this.name = name,
    this.prof = prof,
    this.gender = gender,
    this.age = age,
    this.str = str,
    this.HP = HP,
    this.printStats = function(){
        console.log(this);
    };
}

var Link = new Character("Link", "Hero of Time", "Male", 22, 100, 12);
var Zelda = new Character("Zelda", "Great Sage", "Female", 22, 20, 7);

var target = process.argv[2];
var toft = process.argv[3];

function characterSelect(){
    if (target == "Link"){
        target = Link;
    } else if (target == "Zelda") {
        target = Zelda;
    }
}

characterSelect();
// Link.printStats();
// Zelda.printStats();

function isAlive(name, HP) {
    if (HP > 0){
        console.log(name + " is alive");
    } else {
        console.log(name + " is dead :(");
    }
}

isAlive(target.name, target.HP);

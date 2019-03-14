var students = require("./students");
var operator = process.argv[2];

function Classroom(profName, roomNum){
    this.students = [students],
    this.num = function(){
        return this.students.length;
    };
    this.profName = profName,
    this.roomNum = roomNum,
    this.addStudents = function(name, favSubject, GPA){
        this.students.push()
    }
}
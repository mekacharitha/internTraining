
function Person(first,last,age,gender){
    this.name={
        first,
        last
    };
    this.age=age;
    this.gender=gender;

    this.namemethod = function(){
        return (this.name.first+" "+this.name.last);
    }

}
Person.prototype.greeting = function(){
    console.log("Hello!! My name is "+ this.name.first+this.name.last);
}

function Teacher(first,last,age,gender,subject){
    Person.call(this,first,last,age,gender);
    this.subject=subject;
}

Teacher.prototype = Object.create(Person.prototype);
let teacher1 = new Teacher("Brunda","Devi",35,"Female","ECE");
console.log(teacher1.name);
console.log(teacher1.age);
console.log(teacher1.gender);
console.log(teacher1.subject);
console.log(teacher1.namemethod); //cannot be called as nly prototype methods can be inherited
teacher1.greeting();
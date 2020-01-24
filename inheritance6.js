class Person{
    constructor(first,last,age,gender){
        this.name={
            first,
            last
        };
        this.age=age;
        this.gender=gender;
    }

    greeting(){
        console.log("Hi!! My name is "+this.name.first+this.name.last);
    }
}

class Teacher extends Person{
    constructor(first,last,age,gender,subject){
        super(first,last,age,gender);
        this.subject=subject;
    }
}

let teacher1 = new Teacher("Brunda","Devi",35,"Female","ECE");
teacher1.greeting();

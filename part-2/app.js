function Person(a,b,c,d) {
this.naam =a;
this.umar =b;
this.rang
this.isMale = d;
this.greet = function(){
console.log("Good Evening...");}
}
let p1 = new Person("Sam", 11,"blue", true);
let p2 = new Person("Kuldeep", 22, "orange", true);
let p3 = new Person("Vanaja", 21, "black", false);
console.log(p1); console.log(p2); console.log(p3);



// -----------------------------------------------


class Person{
    
constructor(x,y,z){
this.naam = x;
this.age = y;
this.favColor = z;
   }  
   greet(){ console.log("I am greet") }
}
let p2 = new Person("Samarth", 30, "blue");
console.log(p2);


class Student extends Person{
constructor(x,y,z, roll){
super(x,y,z)
this.rollNo = roll;
}

goodbye(){ console.log("tata sayonara...") }
greet(){ console.log("I am student greet") }
}
let p3 = new Student("Maverick", Student("Maverick", 20, "brown", 420);
console.log(p3);
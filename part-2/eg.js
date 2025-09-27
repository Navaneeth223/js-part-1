// console.log(a);
// var a = 10;
// console.log(a);
// function sam() {
//     console.log(b);
//     let b = 20;
//     console.log(b);
// }
// sam();

// // console.log(c); // ReferenceError: Cannot access 'c' before initialization
// // let c = 30;
// // console.log(c);


class Person2{
constructor(a,b,c,d){
this.naam = a;
this.umar =b;
this.rang =c;
this.isMale = d;
}
greet(){
console.log("Good Evening...");
}
}
let p4= new Person2("Sam", 11, "blue", true);
let p5= new Person2("Kuldeep", 22, "orange", true);
let p6= new Person2("Vanaja", 21, "black", false);
console.log(p4); console.log(p5); console.log(p6);


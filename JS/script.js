console.log("hello world");
console.log("I love JavaScript");
// variable var;
{
    var b=30;  //scope of var is global
    console.log(b);
}
console.log(b);
let c //data type not define so undefined
console.log(typeof(c));
{
    let d=50;
    console.log(d); //scope of let is block

}
const n="name"; //constant variable
console.log(n);
// n="new name"; //error because we cannot change the value of constant variable

//arithmetic operators
let x=5;
let y=2;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y); //modulus operator gives remainder value
console.log(x**y); //exponentiation operator

//logical operators
let p=6;
let q=3;
let cond1=p>q; //true
let cond2 = p==6; //true
console.log(cond1 && cond2); //logical and operator give true if both condition are true
console.log(p<q || p==6); //logical or operator give true if any one condition is true
console.log(!cond1); //logical not operator does inverse of condition
 

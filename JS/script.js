console.log("hello world")
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

// let num=10;
// console.log(num);
// console.log(false);
// console.log(typeof(num));
// console.log("Hello World");

// console.log(typeof(num));
// num= "hi";
// console.log(num);
// console.log(typeof(num));
// num= null;
// console.log(num);
// console.log(typeof(num));

// let sayHello= function(){
//     alert('Hello World');
// }
// var arr= [1,2,3];
// console.log(arr);
// var person={
//     name:'your name',
//     age:'51',


// }
// console.log(person.name)

//symbol

// const sym1= Symbol(4);
// console.log(sym1);
// const sym2= Symbol(4);
// console.log(sym2);
// if(sym1==sym2){
//     console.log("true");
// }else{
//     console.log("false");
// }

// let x=12;
// let y=15;
// let z= 20;


// let biggest= (x>y && x>z)? console.log(x): ((y>z)? console.log(y): console.log(z)); 


// console.log("Starting loop");
// for(let count= 0; count<10; count++){
//     console.log("Count is:"+ count);
//     // console.log("<br/>");
// }
// console.log("Loop Stoped!!");

// let person= {
//     name: "Ajay",
//     lname: "Singh",
//     age: 21,
// }
// for(let i in person){
//     console.log(i+":"+ person[i]);
// }

// let count= 0;
// while(count<10){
//     console.log("Current Value:"+ (count+1));
//     count ++;
// }

// const age =20;
// if(age>=18){
//     console.log("you are adult!!")
// }else{
//     console.log("minor")
// }

// let grade ="D";
// switch(grade){
//     case "A": console.log("Good Job"); break;
//     case "B": console.log("Great"); break;
//     case "C": console.log("Average"); break;
//     case "D": console.log("Try Hard"); break;
//     case "E": console.log("Fail"); break;
//     default: console.log("Invalid Grade");
//     break;

// }

// function greatings(){
//     console.log("Hello, How are you doing today")
// }

// greatings();


// function myFunction(){
//     alert("Welcome");
// }

// function hello(name){
//     document.write("Hello");
// }



// const res= mul(12,14)

// function mul(x,y){
//     return x*y;
// }

// console.log(res);


// arrow function

// let add= (a,b)=>{
//     console.log (a+b);
// };

// add(12,15);

// object

// let x= new Object();
// console.log(typeof(x))

// let person= {
//     name: 'Ajay',
//     age: 21,
//     isMarried: true,
//     address: {
//         street: 'good street',
//         flatNo: 221,
//     }
// }
// console.log(person.name);

// let myinfo= new Array();
// let myinfo1= Array();
// console.log(myinfo,myinfo1);

// let collection= [
//     {},
//     [],
//     true,
//     "John",
//     function(){},
//     9000898908,
//     undefined,
//     null,
//     new String("abc"),
//     new Date()
// ]
// console.log(collection)
// collection.teacherName= "John";
// collection.phone= 90909120903;
// console.log(collection)

// info= ["Rahul", 90];
// console.log(info.length);
// info.name= "Shyam";
// console.log(info);
// console.log(info.length);




// Event
// onclick. onmousehover. onmousedown. onmouseup. onmousemove. onmouseout. 

function onClick(){
    console.log("Clicked");
}
function onMouseOver(){
    console.log("Clicked");
}
function onMouseOut(){
    console.log("Clicked");
}
function onMouseUp(){
    console.log("Clicked");
}
function onMouseDown(){
    console.log("Clicked");
}
function onMouseMove(){
    console.log("Clicked");
}


// mouse keyboard and form event 

const x= document.querySelector("input");
x.addEventListener("foucs", onhandlefocus);
x.addEventListener("blur", onhandleblur); 

// window event onbody onresize onunload 
function bodyChange(){
    alert("Changes done")
}
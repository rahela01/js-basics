// array
var a = [8,3,5,7,1]
a.push(6,9,8);
console.log(a);
a.pop(3);
console.log(a);
a.sort();
console.log(a);
a.shift(3);
console.log(a);
a.unshift(5);
console.log(a);
a.reverse() ;
console.log(a);

//Array assignment
 var array=[1,2,3,4,5,"complete"];
 function arr(){
     for (i=0;i<array.length;i++)
     console.log(array[i]);
 } arr();

var name = 'John';

function first() {
	var a = 'Hello!';
    second();
    var x = a + name;
}

function second() {
    var b = 'Hi!';
    third();
    var y = b + name
}

function third() {
    var c = 'Hey!';
    var z = c + name
    console.log(z);
    
}

first();

//basics
var a=1 ;
console.log(a);
 
//funtion
function add(){
    console.log('called add function');
}
add();
//sub
function sub(a,b){
    var c=a-b;
    return c;
}
var result=sub(9,5);
console.log(result)

var teacher = "Salman";
function otherClass () {
    teacher = "Tajammul";
    topic = "JS"
    console.log("Welcome!",topic); 
}
otherClass();

//7. IIFEs

(function () {
    var aName = "Barry";
    console.log(aName);
    
})();



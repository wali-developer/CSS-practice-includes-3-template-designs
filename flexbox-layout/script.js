//==== DOM Mehtods =====

//document.getElementById("head").addEventListener("mouseenter", fn);
//document.getElementById("head").addEventListener('click', f1);
/*document.getElementById("head").addEventListener("mouseenter", function(){
    this.style.border = "5px dotted black";
});*/

/*function fn(){
    document.getElementById("head").style.background = "orange";
}

function f1(){
    document.getElementById("head").removeEventListener("mouseenter", fn);
}*/

document.getElementById("head").addEventListener('click', f1);
function f1(){
    document.getElementById("head").classList.toggle("xyz");   //toggle() use to remove and add a class on click
}
var y = document.getElementById("head").classList;
console.log(y);

document.getElementById("head").classList.add("abc");
document.getElementById("head").classList.remove("abc");
var x = document.getElementById("head").classList.contains("abc");      //contains() is to see if the class exist
console.log(x);


//******* DOM Traversal Method *********

var z = document.getElementById("head-4").parentElement;      //the method target the parent element of a given childrem elements.
//var z = document.getElementById("head-4").parentElement;      //the method target the parent element of a given childrem elements with their text.
document.getElementById("head-4").parentNode.style.border = "5px solid black";
console.log(z);

var a = document.getElementById("head").children;       //the method targets all the children elements tag.
var a = document.getElementById("head").childNodes;       //the method targrts all the childs tag with their text etc
document.getElementById("head").children[1].innerText = "My Passion given me the Strength of my Hardwork";
console.log(a);

//var b = document.getElementById("head").firstElementChild;       //the method targets first child element tag.
var b = document.getElementById("head").firstChild;       //the method targrts  the first child text
//document.getElementById("head").firstElementChild.innerText = "My Passion given me the Strength of my Hardwork";
console.log(b);

var c = document.getElementById("head").lastElementChild;       //the method targets lst child element tag.
//var c = document.getElementById("head").lastChild;      
console.log(c);

var d = document.getElementById("head-4").firstChild;        // the method gives us text of the first child.
console.log(d)

var e = document.getElementById("head-1").nextElementSibling;    //the method targets next element tag.
//var e = document.getElementById("head-1").nextSibling;         //the method targets next element tag.
var f = document.getElementById("head-4").previousSibling;       //the method targets previous element tag.
console.log(e);
console.log(f);

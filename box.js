
let box1 = document.getElementById ("box1");
let boxsize1 = document.getElementById ("boxsize1");
let iconop1 = document.getElementById ("iconop1");

let box2 = document.getElementById ("box2");
let boxsize2 = document.getElementById ("boxsize2");
let iconop2 = document.getElementById ("iconop2");

let box3 = document.getElementById ("box3");
let boxsize3 = document.getElementById ("boxsize3");
let iconop3 = document.getElementById ("iconop3");

box1.onmouseover = function() {
	boxsize1.style.marginTop = "-110px";
	iconop1.style.opacity = "1";
}
box1.onmouseout = function() {
	boxsize1.style.marginTop = "-50px";
	iconop1.style.opacity = "0";
}

box2.onmouseover = function() {
	boxsize2.style.marginTop = "-110px";
	iconop2.style.opacity = "1";
}
box2.onmouseout = function() {
	boxsize2.style.marginTop = "-50px";
	iconop2.style.opacity = "0";
}

box3.onmouseover = function() {
	boxsize3.style.marginTop = "-110px";
	iconop3.style.opacity = "1";
}
box3.onmouseout = function() {
	boxsize3.style.marginTop = "-50px";
	iconop3.style.opacity = "0";
}
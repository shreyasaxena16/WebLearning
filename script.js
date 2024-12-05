var content= document.getElementById("diceRoll");
var sum= document.getElementById("total");
var reset= document.getElementById("reset");
var roll= 0;
var total= 0;

function changeContent() {
	roll = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
	total = total + roll;
	content.innerHTML = roll;
	sum.innerHTML = ("Total: " + total);
	
}

function changeReset() {
	content.innerHTML = 0;
	sum.innerHTML = 0;
	total = 0;
}

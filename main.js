var someNumbers = [];   


function enteredNumbers (e) {
  	var someNumbers = document.getElementById("helpTheButton").value;
 }
function themDigits(){
 for ( var i = 0; i < someNumbers.length; i++){
    var someNumbers  = someNumbers[i];
    document.getElementById("helpTheButton").innerHTML = someNumbers;
	}
}

console.log(themDigits);
    
var button = document.getElementById("clickedNum");

button.onclick = enteredNumbers;
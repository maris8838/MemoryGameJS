var resultArray; // resultArray is for storing RandomNumber
var selectedElement; // selectedElement is for identifying the whether user clicks on the circle
var waitingForInput = false; // this waitingForInput variable is for when the user types value on the circle
var selectedIndex;
var userAttemptInRow = 0;
var numberGuessedCorrect = 0;
var attempt = 1;
function generateRandomNumber(min, max) {
	//1st storing a randomNumber to variable and then converting a randomNumber to string .toostring() is used.
	var randomNumber = Math.floor(Math.random() * (max - min) + min).toString(); //now string is converted to array .split() is used.

	resultArray = randomNumber.split('');
	console.log(resultArray);
}
generateRandomNumber(1000, 9999);

function circleClicked(element, index) {
	//assigning this element to variable selectedElement assigned in top.
	selectedElement = element;
	element.target.classList.add('wait');
	//here we changed waitingFor input = true because it should allow to type only after the user clicks the circle
	waitingForInput = true;
	selectedIndex = index;
}

function detectKeyPress(event) {
	console.log(event);
	if (waitingForInput == true) {
		if (event.keyCode >= 48 && event.keyCode <= 57) {
			selectedElement.target.innerHTML = event.key;
			waitingForInput == false;
			selectedElement.target.classList.remove('wait');
			checkNumberExist(event.key, selectedIndex);
			userAttemptInRow++;
			if (userAttemptInRow == 4) {
				attempt++;
				if (numberGuessedCorrect != 4) {
					generateCircle();
				}
				numberGuessedCorrect = 0;
				userAttemptInRow = 0;
			}
		}
	}
}
function checkNumberExist(number, index) {
	var isNumberPresent = resultArray.indexOf(number);
	console.log(isNumberPresent);
	if (isNumberPresent !== -1) {
		if (isNumberPresent == selectedIndex) {
			console.log('number exist in correct place');
			selectedElement.target.classList.add('correct');
			numberGuessedCorrect++;
			if(numberGuessedCorrect == 4){
				console.log("you win");
				document.writeln(" congrats! you have gud memory power")
			}
		} else {
			console.log('number exist ,but in different place');
			selectedElement.target.classList.add('different');
		}
	} else {
		console.log('number not exist');
		selectedElement.target.classList.add('wrong');
	}
}
function generateCircle() {
	document.getElementById('content').innerHTML += ` <div class="row text-center">
	<div class="col-lg-4"></div>
	 <div class="col-lg-1 box-grid" onclick="circleClicked(event,'0')">
		 
	 </div>
	 <div class="col-lg-1  box-grid"  onclick="circleClicked(event,'1')">
		 
	 </div>
	 <div class="col-lg-1  box-grid"  onclick="circleClicked(event,'2')">
		 
	 </div>
	 <div class="col-lg-1  box-grid"  onclick="circleClicked(event,'3')">
		 
	 </div>

	 
	


 </div>`;
}
generateCircle();
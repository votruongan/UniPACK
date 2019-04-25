
var bookUpForm = document.getElementsByClassName('modal')[0];
var bookUpBtn = document.getElementById('submitBookUp');
var bookUp = document.getElementById('bookUp');


function showBookUpForm(){
  bookUpForm.style.display = "block";
}

function closeBookUpForm(){
	bookUpForm.style.display = "none";
}

bookUpBtn.onclick = function(){
	bookUpForm.style.display = "none";	
	bookUp.style.display = "block";
}
bookUp.style.display = "none";
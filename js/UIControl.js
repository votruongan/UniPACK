
// Get the modal
var modal = document.getElementsByClassName('modal')[0];
var userAvatar = document.getElementById('userAvatar');
var loginTxt = document.getElementById('loginTxt');
// Get the button that opens the modal
var btn = document.getElementById("showButton");
var closeBtn = document.getElementById("closeButton");
var regSubmitBtn = document.getElementById("submitRegInfo");
userAvatar.style.display = "none";
// Get the <span> element that closes the modal


// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

function showUserAvatar(){
	userAvatar.style.display = "block";	
	loginTxt.style.display = "none";	
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

}
var loginForm = document.getElementsByClassName('modal')[1];
var loginBtn = document.getElementById("logInButton");
function showLogInForm(){
  loginForm.style.display = "block";
}

loginBtn.onclick = function(){
	loginTxt.style.display = "none";
	loginForm.style.display = "none";	
	userAvatar.style.display = "block";
}

function closeLogInForm(){
	loginForm.style.display = "none";
}

function reloadPage(){
	location.reload();
}


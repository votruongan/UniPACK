
var bookUpForm = document.getElementsByClassName('modal')[0];
var bookUpBtn = document.getElementById('submitBookUp');
var bookUp = document.getElementById('bookUp');

var zoomContent = document.getElementsByClassName('modal')[1];	

$( document ).ready(function() {
  // Handler for .ready() called.
	$("#bookUp").hide();
	$("#notiHolder").hide();
	$("#showMe").hide();

});

$("#findBtn").click(function(){
	$("#showMe").show();

});

$("#submitBookUp").click(function(){
	bookUpForm.style.display = "none";
});


$("#submitBookUp2").click(function(){
	$("#formHolder").hide(200);
	$("#notiHolder").show(200);
});

function showBookUpForm(){
  bookUpForm.style.display = "block";
  zoomOutContent(100);
}

function closeBookUpForm(){
	bookUpForm.style.display = "none";
}

$("#okButton").click(function(){
	$("#formHolder").show();
	$("#notiHolder").hide();
	bookUpForm.style.display = "none";
	setTimeout(function(){
  		$("#bookUp").show();
	}, 3000);		
})

bookUpBtn.onclick = function(){
	$("#formHolder").hide("200");
	$("#notiHolder").show("200");
}

function zoomInContent(sId){
	zoomContent.style.display = "block";
}


function zoomOutContent(){
	zoomContent.style.display = "none";
}
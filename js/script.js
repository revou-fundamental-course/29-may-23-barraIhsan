// Ask the user for his/her name
var nama = prompt("Masukkan nama kamu");
document.getElementById("nama").innerText = nama;

// Validate "Message Us" forms
function validateForm() {
	const name = document.forms["message-form"]["full-name"].value;
	const birthDate = document.forms["message-form"]["birth-date"].value;
	const gender = document.forms["message-form"]["gender"].value;
	const message = document.forms["message-form"]["message"].value;

	// Get Current Time
	const currentDate = new Date();
	const formattedDate = currentDate.toDateString() + " " + currentDate.toLocaleTimeString();

	document.getElementById("output-full-name").innerHTML = name;
	document.getElementById("output-birth-date").innerHTML = birthDate;
	document.getElementById("output-gender").innerHTML = gender;
	document.getElementById("output-message").innerHTML = message;
	document.getElementById("current").innerHTML = formattedDate;

	return false;
}

// Image Slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	var i;
	var imgList = document.getElementsByClassName("img-slideshow")
	if (n > imgList.length) slideIndex = 1;
	else if (n < 1) slideIndex = imgList.length;

	for (let i = 0; i < imgList.length; i++) {
		imgList[i].style.display = "none";
	}

	imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
	plusDivs(1)
}, 5000);

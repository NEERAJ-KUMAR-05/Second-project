const myslide = document.querySelectorAll('.myslider'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].classList.remove('active');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].classList.add('active');
}
// ########### header ###########
const myWebsite = document.querySelector(".my-website")
const navMenu = document.querySelector(".nav-menu")

myWebsite.addEventListener("click", () => {
	myWebsite.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
	addEventListener("click", () => {
		myWebsite.classList.remove("active");
		navMenu.classList.remove("active");
	}))

	
// ############## contact form ##############

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

function validateForm(){

	clearMessages();
	let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
		nameInput.classList.add("error-border");
		errorFlag = true;
    }

	if(!emailIsValid(email.value)){
		errorNodes[1].innerText = "Invalid email address";
		email.classList.add("error-border");
		errorFlag = true;
	}

	if(message.value.length < 1){
		errorNodes[2].innerText = "Please enter message";
		message.classList.add("error-border");
		errorFlag = true;
	}

	if(!errorFlag){
		success.innerText = "Success!";
	}
}

function clearMessages(){
	for(let i = 0; i < errorNodes.length; i++){
		errorNodes[i].innerText = "";
	}
	success.innerText = "";
	nameInput.classList.remove("error-border");
	email.classList.remove("error-border");
	message.classList.remove("error-border");
}

function emailIsValid(email){
	let pattern = /\S+@\S+\.\S+/;
	return pattern.test(email);
}
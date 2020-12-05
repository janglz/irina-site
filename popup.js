"use strict";
function popUpByHover() {
	const popUp = document.getElementById('eot-info');
	popUp.style.visibility= 'visible';
	popUp.style.top = '0px';
}

function popUpHide() {
	const popUp = document.getElementById('eot-info');
	popUp.style.visibility= 'hidden';
	popUp.style.top = '-600px';
}

function scrollToBigButtons() {
	const buttonPosition = document.getElementById('services');
	buttonPosition.scrollIntoView();
	buttonPosition.scrollTo({ top: -100, behavior: "smooth" });
}
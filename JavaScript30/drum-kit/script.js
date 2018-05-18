function playSoundClass(e) {
	//when key is pressed, add that keyCode audio/div to const
	const audio	= document.querySelector(`audio[data-key="${e.keyCode}"]`)
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	//if there is no audio for the keyCode, exit function
	if (!audio) return;
	//everytime key is pressed, rewinds audio file to start instaed of waiting for it to finish
	audio.currentTime = 0;
	//play that keyCode's audio
	audio.play();
	//add playing class 
	key.classList.add("playing");
}

function removeTransition(e) {
	if (e.propertyName !== "transform") return;
	this.classList.remove("playing");
}

//add event listener on the window for when a key is pressed
window.addEventListener('keydown', playSoundClass);

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition))


// //add event listener on the window for when a key is released
// window.addEventListener('keyup', function(e){
// 	//when key is released, add that keyCode audio/div to const
// 	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
// 	//remove playing class
// 	key.classList.remove("playing");
// });

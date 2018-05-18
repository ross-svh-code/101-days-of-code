const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	//grab current time
	const now = new Date();
	//grab current time seconds
	const seconds = now.getSeconds();
	//set degrees of circle second hand will move each tic
	const secondsDegrees = ((seconds / 60) * 360) + 90
	//rotate/transform second hand
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	//prevent crazy transition movement
	if (secondsDegrees === 360) {
		secondHand.style.transitionDuration = "0s";
	}
	//repeat above for minute hand
	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes / 60) * 360) + 90
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	if (minutesDegrees === 360) {
		minuteHand.style.transitionDuration = "0s";
	}
	//repeat for hour hand
	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) * 360) + 90
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	if (hoursDegrees === 360) {
		hourHand.style.transitionDuration = "0s";
	}
}

//run setDate() every 1 second
setInterval(setDate, 1000);

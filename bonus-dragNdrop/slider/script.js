const slider = document.querySelector("#slider");
const thumb = document.querySelector("#thumb");
const sliderWidth = slider.getBoundingClientRect().width;
thumb.addEventListener("mousedown", (event) => {
	event.preventDefault();

	document.addEventListener("mousemove", moving);

	document.addEventListener("mouseup", (event) => {
		document.removeEventListener("mousemove", moving);
	});
});
function moving(event) {
	if (
		thumb.getBoundingClientRect().left <= slider.getBoundingClientRect().left
	) {
		thumb.style.left = slider.getBoundingClientRect().left + "px";
		console.log(slider.getBoundingClientRect().left);
	} else if (
		thumb.getBoundingClientRect().left >=
		slider.getBoundingClientRect().left + sliderWidth
	) {
		thumb.style.left =
			slider.getBoundingClientRect().left + sliderWidth - 15 + "px";
	}

	if (
		event.clientX >= slider.getBoundingClientRect().left &&
		event.clientX <= slider.getBoundingClientRect().left + sliderWidth
	) {
		thumb.style.left = event.clientX - 15 + "px";
	}
}

window.addEventListener("DOMContentLoaded", (event) => {
	const button = document.querySelector("#button");
	button.addEventListener("click", (clicked) => {
		button.remove();
	});
});

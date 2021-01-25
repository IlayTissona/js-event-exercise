window.addEventListener("DOMContentLoaded", (event) => {
	const button = document.querySelector("#button");
	const textDiv = document.querySelector("#text");
	button.addEventListener("click", (clicked) => {
		textDiv.innerHTML = "";
	});
});

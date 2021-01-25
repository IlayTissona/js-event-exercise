const container = document.querySelector("#container");
let div = {};
container.addEventListener("click", (event) => {
	if (event.target.tagName !== "BUTTON") {
		return;
	} else {
		div = event.target.closest("DIV");
		div.hidden = true;
	}
});

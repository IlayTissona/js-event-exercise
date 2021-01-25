//button class="remove-button">[x]</ >;

window.addEventListener("DOMContentLoaded", main);

function main() {
	const divsArr = document.querySelectorAll(".pane");
	for (let div of divsArr) {
		const button = document.createElement("button");
		button.className = "remove-button";
		button.innerHTML = "[X]";
		div.appendChild(button);
		button.addEventListener("click", () => {
			div.remove();
		});
	}
}

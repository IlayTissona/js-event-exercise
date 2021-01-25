window.addEventListener("DOMContentLoaded", (loaded) => {
	const text = document.querySelector("#text");
	const menu = document.querySelector("#menu");
	menu.hidden = true;
	text.addEventListener("click", () => {
		if (menu.hidden) {
			menu.hidden = false;
		} else {
			menu.hidden = true;
		}
	});
});

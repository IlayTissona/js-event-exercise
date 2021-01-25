const links = document.querySelectorAll("a");
for (let link of links) {
	link.addEventListener("click", (event) => {
		if (!confirm(`Leave to ${event.target.innerText}?`)) {
			event.preventDefault();
		}
	});
}

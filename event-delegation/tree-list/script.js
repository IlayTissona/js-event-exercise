const tree = document.querySelector("#tree");
tree.addEventListener("click", (event) => {
	if (event.target.className !== "sub-tree") {
		return;
	} else {
		let insideList = event.target.querySelector("ul");
		if (insideList.hidden) {
			insideList.hidden = false;
		} else if (!insideList.hidden) {
			insideList.hidden = true;
		}
	}
});

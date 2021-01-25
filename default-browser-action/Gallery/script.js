const thumbnails = document.querySelectorAll(".thumbnail");
const mainImage = document.querySelector("#main-image");
for (let thumbnail of thumbnails) {
	thumbnail.addEventListener("click", (event) => {
		mainImage.setAttribute("src", thumbnail.getAttribute("src"));
	});
}

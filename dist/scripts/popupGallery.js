const gridContainer = document.getElementById("grid-container");
const popupOverlay = document.createElement("div");
popupOverlay.className = "popup-overlay";
document.body.appendChild(popupOverlay);

gridContainer.addEventListener("click", (event) => {
	if (event.target.tagName === "IMG") {
		const popupContent = document.createElement("div");
		popupContent.className = "popup-content";

		const popupImg = document.createElement("img");
		popupImg.className = "popup-img";
		popupImg.src = event.target.src;

		const closeButton = document.createElement("button");
		closeButton.className = "popup-close";
		closeButton.innerText = "×";
		closeButton.addEventListener("click", () => {
			popupOverlay.style.display = "none";
		});

		popupContent.appendChild(closeButton);
		popupContent.appendChild(popupImg);
		popupOverlay.innerHTML = "";
		popupOverlay.appendChild(popupContent);
		popupOverlay.style.display = "flex";
	}
});

popupOverlay.addEventListener("click", () => {
	popupOverlay.style.display = "none";
});

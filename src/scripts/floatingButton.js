const expandButton = document.getElementById("expandButton");
const container = document.getElementById("grid-container");
const gradient = document.getElementById("gradient");

expandButton.addEventListener("click", () => {
	if (container.classList.contains("height")) {
		container.classList.remove("height");
		gradient.style.opacity = "0";
		container.classList.add("expanded");
		container.classList.remove("closed");
		expandButton.innerHTML = 'Close <img src="img/arrow-down.svg" style="transform: rotate(180deg)"/>';
	} else {
		container.classList.add("height");
		gradient.style.opacity = "1";
		container.classList.remove("expanded");
		container.classList.add("closed");
    expandButton.innerHTML = "Expand";
    expandButton.innerHTML = 'Expand <img src="img/arrow-down.svg">';

	}
});

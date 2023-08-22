const menuItems = document.querySelectorAll(".menu-item");
const searchbar = document.getElementById("searchbar");
const searchToggle = document.getElementById("search-toggle");

menuItems.forEach((item) => {
	const submenuToggle = item.querySelector(".submenu-toggle");

	if (submenuToggle) {
		submenuToggle.addEventListener("click", (event) => {
			item.classList.toggle("active");
			event.stopPropagation();
		});
	}
});

document.addEventListener("click", (event) => {
	if (!event.target.closest(".submenu-toggle")) {
		menuItems.forEach((item) => {
			item.classList.remove("active");
		});
	}
});

searchToggle.addEventListener("click", () => {
	if (!searchbar.style.width) {
		searchbar.classList.remove("close-animation");
		searchbar.classList.add("click-animation");
	}
});

window.addEventListener("scroll", () => {
	if (searchbar.classList.contains("click-animation")) {
		searchbar.classList.remove("click-animation");
		searchbar.classList.add("close-animation");
	}
});

const links = document.querySelectorAll(".submenu-item a[data-target]");

function scrollToSection(sectionId) {
	const element = document.getElementById(sectionId);

	if (element) {
		const offset = element.offsetTop;
		window.scrollTo({ top: offset, behavior: "smooth" });
	}
}

links.forEach((link) => {
	link.addEventListener("click", function (event) {
		event.preventDefault();
		const targetId = link.getAttribute("data-target");
		scrollToSection(targetId);
	});
});

const nav = document.querySelector(".navbar")
const menu = document.querySelector(".navbar__list")
const burgerBtn = document.querySelector(".navbar__burger-btn")
const allNavItems = document.querySelectorAll(".navbar__link")
const logo = document.querySelector(".navbar__logo")

const addShadow = () => {
	if (window.innerWidth > 576 && window.scrollY >= 200) {
		nav.classList.add("shadow-bg")
		logo.classList.add("visible")
	} else {
		nav.classList.remove("shadow-bg")
		logo.classList.remove("visible")
	}
}

const showMenu = () => {
	menu.classList.toggle("show-menu")
	burgerBtn.classList.toggle("is-active")
	document.body.classList.toggle("fixed-body")

	allNavItems.forEach(item => {
		item.addEventListener("click", () => {
			menu.classList.remove("show-menu")
			burgerBtn.classList.remove("is-active")
			document.body.classList.remove("fixed-body")
		})
	})
}

const closeMenu = () => {
	burgerBtn.classList.remove("is-active")
	menu.classList.remove("show-menu")
	document.body.classList.remove("fixed-body")
}

const deleteClassOnDesktop = function () {
	if (576 < window.innerWidth) {
		menu.classList.remove("show-menu")
		burgerBtn.classList.remove("is-active")
		document.body.classList.remove("fixed-body")
	}
}

burgerBtn.addEventListener("click", showMenu)
logo.addEventListener("click", closeMenu)
window.addEventListener("scroll", addShadow)
window.addEventListener("resize", deleteClassOnDesktop)

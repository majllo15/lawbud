const accordion = document.querySelector(".accordion")
const accordionBtns = document.querySelectorAll(".accordion__btn")

function openAccordionitems() {
	if (this.nextElementSibling.classList.contains("active")) {
		this.nextElementSibling.classList.remove("active")
		this.querySelector(".feather-plus").style.display = "inline"
		this.querySelector(".feather-minus").style.display = "none"
	} else {
		closeAccordionitems()
		this.nextElementSibling.classList.toggle("active")
		this.querySelector(".feather-plus").style.display = "none"
		this.querySelector(".feather-minus").style.display = "inline"
	}
}

const closeAccordionitems = () => {
	const allActiveItems = document.querySelectorAll(".accordion__info")
	allActiveItems.forEach(item => {
		item.classList.remove("active")
        item.previousElementSibling.querySelector('.feather-minus').style.display = 'none'
		item.previousElementSibling.querySelector('.feather-plus').style.display = 'inline'
	})
}

const clickOutsideAccordion = e => {
	if (
		e.target.classList.contains("accordion__btn") ||
		e.target.classList.contains("accordion__info") ||
		e.target.classList.contains("accordion__info__text")
	)
		return

	closeAccordionitems()
}

accordionBtns.forEach(btn => btn.addEventListener("click", openAccordionitems))

window.addEventListener("click", clickOutsideAccordion)

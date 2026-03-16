(function () {
	const formats = document.querySelector(".formats")
	formats.addEventListener("click", e => {
		const clickedCard = e.target.closest(".card")
		const allCard = formats.querySelectorAll(".card")

		if (clickedCard) {
			allCard.forEach(el => {
				el.classList.remove("_active")
			})
			clickedCard.classList.add("_active")
		}
	})
}())
(function () {

	const CLASSES = {
		ACCORDION_SECTION: ".accordions",
		ACCORDION: ".accordion",
		ACCORDION_TRIGGER: ".accordion__trigger",
		ACCORDION_ANSWER: ".accordion__a",
		OPEN: "_open",
	}

	const accordionSection = document.querySelector(CLASSES.ACCORDION_SECTION);
	const accordions = document.querySelectorAll(CLASSES.ACCORDION);

	function initAccordions() {
		accordions.forEach(accordion => {
			const menu = accordion.querySelector(CLASSES.ACCORDION_ANSWER);

			if (accordion.classList.contains(CLASSES.OPEN)) {
				menu.style.overflow = "hidden";
				menu.style.transition = "0.3s";
				return
			}

			menu.style.height = "0";
			menu.style.overflow = "hidden";
			menu.style.transition = "0.3s";
		});
	}

	function close(accordion, menu) {
		menu.style.height = `${menu.scrollHeight}px`;

		// Принудительный reflow для анимации
		void menu.offsetHeight;

		menu.style.height = "0";
		menu.style.minHeight = "0";
		menu.style.pointerEvents = "none";
		accordion.classList.remove(CLASSES.OPEN);
	}

	function open(accordion, menu) {
		menu.style.height = `${menu.scrollHeight}px`;
		menu.style.minHeight = "var(--min-height)";
		menu.style.pointerEvents = "auto";
		accordion.classList.add(CLASSES.OPEN);
	}

	function toggle(accordion, menu) {
		const isClosed = menu.style.height === "0px";

		if (isClosed) {
			accordions.forEach(el => close(el, el.querySelector(CLASSES.ACCORDION_ANSWER)))
			open(accordion, menu);
		} else {
			close(accordion, menu);
		}

		// Обработчик завершения анимации
		const handleTransitionEnd = () => {
			if (menu.style.height !== "0px") {
				menu.style.height = "auto";
			}
			menu.removeEventListener("transitionend", handleTransitionEnd);
		};

		menu.addEventListener("transitionend", handleTransitionEnd);
	}

	function handleClick(e) {
		const trigger = e.target.closest(CLASSES.ACCORDION);
		if (!trigger) return;

		const accordion = trigger.closest(CLASSES.ACCORDION);
		const menu = accordion.querySelector(CLASSES.ACCORDION_ANSWER);

		toggle(accordion, menu);
	}

	initAccordions();
	accordionSection.addEventListener("click", handleClick);
}());

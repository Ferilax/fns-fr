(function () {
	const CLASSES = {
		MODIFICATION: "_open",
		CLOSE: ".modal__close",
		BODYLOCK: "_lock-scroll",
		MODAL_BODY: ".modal__content"
	}

	function createPopover(modalSelector, triggerSelector) {
		const modal = document.querySelector(modalSelector)
		const trigger = document.querySelector(triggerSelector)
		const HTMLElement = document.documentElement

		if (!modal || !trigger) return

		const closeButton = modal.querySelector(CLASSES.CLOSE)

		// Переключатель появления поповера
		function scrollSwitcher(action) {
			if (action === "lock") {
				HTMLElement.classList.add(CLASSES.BODYLOCK)
				modal.classList.add(CLASSES.MODIFICATION)
				document.addEventListener("click", clickOutsideHandler)
			}

			if (action === "unlock") {
				HTMLElement.classList.remove(CLASSES.BODYLOCK)
				modal.classList.remove(CLASSES.MODIFICATION)
				document.removeEventListener("click", clickOutsideHandler)
			}
		}

		// При открытом поповере вешаем на документ обработчик, для отлавливания кликов вне
		// При закрытии поповера удаляем обработчик
		function clickOutsideHandler(e) {
			const modal = e.target.closest(CLASSES.MODAL_BODY)
			const close = e.target.closest(triggerSelector)

			if (!modal && !close) {
				scrollSwitcher("unlock")
			}
		}

		trigger.addEventListener("click", () => {
			scrollSwitcher("lock")
		})

		closeButton.addEventListener("click", () => {
			scrollSwitcher("unlock")
		})
	}

	createPopover(".news-modal", ".tj-modal-trigger")
	createPopover(".news-modal", ".uz-modal-trigger")
}())
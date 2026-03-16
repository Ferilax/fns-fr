async function loadModules() {
	import("./header.js")

	function has(selector) {
		return !!document.querySelector(selector)
	}

	if (has(".splide")) {
		import("./sliders.js")
	}
	import("./formats.js")
	import("./accordion.js")
	import("./modal.js")
}

// Запускаем после загрузки DOM
document.addEventListener("DOMContentLoaded", loadModules);
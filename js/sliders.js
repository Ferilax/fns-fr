import "./libs/splide.min.js"
import "./libs/splide-extension-auto-scroll.min.js"

(function () {
	Splide.defaults = {
		pagination: false,
		arrows: false,
	}

	function createSwiper(swiperSelector, options) {
		const hasSwiper = !!document.querySelector(swiperSelector);
		if (hasSwiper) {
			let splide = new Splide(swiperSelector, options);
			splide.mount();

			return splide;
		}
	}

	// ------------------------------------------------------------------------------------------------------------------------------------
	const speed = 0.6

	const newsSharedOptions = {
		type: "loop",
		direction: "ttb",
		autoHeight: true,
		height: 960,
		gap: 28,

		pauseOnHover: false,
		autoScroll: {
			speed: speed,
			pauseOnHover: false,
			pauseOnFocus: false,
			rewind: true,
		},

		breakpoints: {
			1439: {
				gap: 18
			},
			1023: {
				height: 848
			}
		},
	}

	new Splide("#marque-1", newsSharedOptions).mount(window.splide.Extensions);

	new Splide("#marque-2", {
		...newsSharedOptions,

		autoScroll: {
			...newsSharedOptions.autoScroll,
			speed: speed * -1,
		},
	}).mount(window.splide.Extensions);

	new Splide("#marque-3", newsSharedOptions).mount(window.splide.Extensions);

	new Splide("#marque-4", {
		...newsSharedOptions,

		autoScroll: {
			...newsSharedOptions.autoScroll,
			speed: speed * -1,
		},
	}).mount(window.splide.Extensions);
	// ------------------------------------------------------------------------------------------------------------------------------------

	createSwiper("#glass_splide", {
		padding: "calc((100vw - 100%) / 2)",
		autoWidth: true,
		gap: 16,

		breakpoints: {
			767: {
				gap: 8
			}
		}
	})

	createSwiper("#advantages_splide", {
		padding: "calc((100vw - 100%) / 2)",
		autoWidth: true,
		gap: 16,

		breakpoints: {
			767: {
				gap: 8
			}
		}
	})

	createSwiper("#programs_splide", {
		padding: "calc((100vw - 100%) / 2)",
		autoWidth: true,
		gap: 16,

		breakpoints: {
			767: {
				gap: 8
			}
		}
	})

	createSwiper("#formation_splide", {
		arrows: true,
		type: "fade",
		drag: false,
		breakpoints: {
			767: {
			}
		}
	})

	// ------------------------------------------------------------------------------------------------------------------------------------
	const formationSplides = document.querySelectorAll(".formation_image_splide")
	formationSplides.forEach(el => {
		const splide = new Splide(el, {
			arrows: true,
			pagination: true,
		});
		splide.mount()
	})
	// ------------------------------------------------------------------------------------------------------------------------------------
}())

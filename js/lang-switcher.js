import { translations } from "./lang.js"

(function () {
	// Текущий язык (по умолчанию французский)
	let currentLang = localStorage.getItem("siteLanguage") || "fr";

	// Функция для обновления контента на странице
	function updateLanguage(lang) {
		// Находим все элементы у которых есть атрибут data-lang-key
		const elements = document.querySelectorAll("[data-lang-key]");

		elements.forEach(element => {
			const key = element.getAttribute("data-lang-key");
			// Проверяем есть ли такой ключ в словаре и есть ли перевод для этого языка
			if (translations[key] && translations[key][lang]) {
				// Для обычных тегов меняем textContent
				if (element.tagName !== "INPUT" && element.tagName !== "TEXTAREA") {
					element.textContent = translations[key][lang];
				}
				// Для полей ввода меняем placeholder
				if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
					if (element.placeholder) { // Проверяем, есть ли атрибут placeholder
						element.placeholder = translations[key][lang];
					}
				}
			}
		});

		// Меняем направление текста для всего документа
		if (lang === "ar") {
			document.documentElement.setAttribute("dir", "rtl");
			document.documentElement.setAttribute("lang", "ar");
			// Класс для body, чтобы управлять стилями
			document.body.classList.add("rtl");
			document.body.classList.remove("ltr");
		} else {
			document.documentElement.setAttribute("dir", "ltr");
			document.documentElement.setAttribute("lang", "fr");
			document.body.classList.add("ltr");
			document.body.classList.remove("rtl");
		}

		// Сохраняем выбор пользователя
		localStorage.setItem("siteLanguage", lang);
		currentLang = lang;
	}

	// Функция для инициализации переключателей
	function initLangSwitcher() {

		const langSwither = document.querySelector(".switch-language");

		langSwither.addEventListener("click", (e) => {
			const lang = document.documentElement.getAttribute("lang");


			if (lang === "ar") {
				updateLanguage("fr")
			} else {
				updateLanguage("ar")
			}
		});
	}

	// Устанавливаем язык по умолчанию (из localStorage или "fr")
	updateLanguage(currentLang);
	// Инициализируем переключатели
	initLangSwitcher();
}())
import en from '../lang/en.json'
import es from '../lang/es.json'
import jp from '../lang/jp.json'
import de from '../lang/de.json'

// async function loadLanguageFile(lang) {
// 	const res = await fetch(`../lang/${lang}.json`)
// 	return await res.json()
// }

window.addEventListener('DOMContentLoaded', async () => {
	const langEls = document.querySelectorAll('[data-lang]')
	const url = new URL(window.location.href)
	// const lang = $("#languageCode").html();
	const lang = (() => {
		const queryParams = new URLSearchParams(window.location.search).get('lang')
		if (queryParams == null) {
			const code = document.getElementById('languageCode').innerText.trim()
			if (code == '$languageCode') {
				return null
			} else return code
		} else {
			return queryParams
		}
	})()
	// #import all language file here
	const resources = {
		'en-US': { translation: en },
		'es-ES': { translation: es },
		'jp-JP': { translation: jp },
		'de-DE': { translation: de },
	}

	if (lang && lang !== 'en') {
		i18next.init(
			{
				lng: lang,
				fallbackLng: 'en',
				interpolation: { escapeValue: false },
				compatibilityJSON: 'v3',
				resources,
			},
			(err, t) => {
				if (err) return console.error(err)
				langEls.forEach((el) => {
					const key = el.getAttribute('data-lang')
					el.innerHTML = t(key)
				})
			},
		)

		// # for handling sidebar linka
		const sidebarLinks = document.querySelectorAll('[data-slot]')
		sidebarLinks.forEach((el) => {
			const url = el.getAttribute('href')
			el.setAttribute('href', `${url}?lang=${lang}`)
		})
	}
})

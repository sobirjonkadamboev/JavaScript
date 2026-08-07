window.addEventListener('DOMContentLoaded', () => {
	//Tabs
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabContent = document.querySelectorAll('.tab_content'),
		tabParents = document.querySelector('.tabheader__items')

	function hideTabContents() {
		tabContent.forEach(tabContent => {
			tabContent.classList.add('hide')
			tabContent.classList.remove('show')
		})

		tabs.forEach(tab => {
			tab.classList.remove('tabheader__item_active')
		})
	}

	function showTabContent(index = 0) {
		tabContent[index].classList.add('show', 'fade')
		tabContent[index].classList.remove('hide')
		tabs[index].classList.add('tabheader__item_active')
	}

	hideTabContents()
	showTabContent()

	tabParents.addEventListener('click', event => {
		const target = event.target

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((tab, index) => {
				if (target === tab) {
					hideTabContents()
					showTabContent(index)
				}
			})
		}
	})

	//Loader

	const wrapperLoader = document.querySelector('.loader-wrapper')

	setTimeout(() => {
		wrapperLoader.style.display = 'none'
	}, 2000)

	//Timer
	const deadline = '2026-11-15'

	function remainingTime(endtime) {
		const time = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor(time / (1000 * 60 * 60 * 24)),
			hours = Math.floor((time / (1000 * 60 * 60)) % 24),
			minutes = Math.floor((time / (1000 * 60)) % 60),
			seconds = Math.floor((time / (1000 * 60)) % 60),
	}
})

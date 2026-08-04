window.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabContent = document.querySelectorAll('.tab_content'),
		tabParents = document.querySelector('.tabheader__items')

	function hideTabContents() {
		tabContent.forEach(tabContent => {
			tabContent.style.display = 'none'
		})

		tabs.forEach(tab => {
			tab.classList.remove('tabheader__item_active')
		})
	}

	function showTabContent(index) {
		tabContent[index].style.display = 'block'
	}

	hideTabContents()
})

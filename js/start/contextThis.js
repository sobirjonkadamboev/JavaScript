//Context <<this>>

function logThis() {
	console.log(this)
}

logThis()

//#1. function dagi context this window objectga boradi, "use strict" modeda undefined bo'ladi
//#2. context this objectlarda objectlar methodi bilan teng bo'ladi
const person = {
	fName: 'Sobirjon',
	lName: 'Kadamboev',
	greeting: function () {
		const showThis = () => {
			console.log(this)
		}
		showThis()
		console.log(this)
	},
}

person.greeting()

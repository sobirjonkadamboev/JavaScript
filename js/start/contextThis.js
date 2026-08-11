//Context <<this>>

function logThis() {
	console.log(this)
}

logThis()

//#1. function dagi context this window objectga boradi, "use strict" modeda undefined bo'ladi
//#2. context this objectlarda objectlar bilan teng bo'ladi
const person = {
	fName: 'Sobirjon',
	lName: 'Kadamboev',
	greeting: function () {
		console.log(this)
	},
}

person.greeting()

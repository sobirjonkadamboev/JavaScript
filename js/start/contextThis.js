//Context <<this>>

function logThis() {
	console.log(this)
}

logThis()

//function dagi context this window objectga boradi, "use strict" modeda undefined bo'ladi

const person = {
	fName: 'Sobirjon',
	lName: 'Kadamboev',
	greeting: function () {
		console.log(this)
	},
}

person.greeting()

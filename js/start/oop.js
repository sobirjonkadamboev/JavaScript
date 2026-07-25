const suvModels = {
	weight: 2000,
	length: 2,
	speed: function () {
		console.log('100km/h')
	},
}

const nexia = {
	weight: 900,
}

nexia.__proto__ = suvModels

console.log(nexia.speed())

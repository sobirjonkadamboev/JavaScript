// console.dir([1, 2, 3]);

const suvCars = {
	weight: 1000,
	length: 3,
	speed: function(){
		console.log('100 km/h');
		
	},
};

const gentra = {
	weight: 800,
};

// gentra.__proto__ = suvCars; old version

Object.setPrototypeOf(gentra, suvCars); //new version

console.log(gentra.speed());
function getModule() {
	this.tabs = function () {
		console.log('New Tabs')
	}

	this.slider = function () {
		console.log('New Sliders')
	}
}

module.exports = getModule

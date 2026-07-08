const numberOfSeries = +prompt('Nechta serial kordingiz?', '')
const seriesDB = {
	count: numberOfSeries,
	series: {},
	actors: {},
	genres: [],
	private: false,
}

const a = prompt('Oxirgi korgan serialingiz', '')
const b = +prompt('Nechi baxo berasiz?', '')

const c = prompt('Oxirgi korgan serialingiz', '')
const d = +prompt('Nechi baxo berasiz?', '')

seriesDB.series[a] = b

console.log(seriesDB)

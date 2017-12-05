const csv = require('csvtojson')
const fs = require('fs')
const path = require('path')
const filePath = 'customer-data.csv'

const csvToJson = (filePath) => {
	let data = []

	csv()
	.fromFile(filePath)
	.on('json', (jsonObj) => {
		data.push(jsonObj)
	})
	.on('done', (error) => {
		if (error) return console.log(error)
		fs.writeFileSync(path.join(__dirname, 'customer-data.json'), JSON.stringify(data, null, 4))
		console.log('file saved')
	})
}

csvToJson(filePath)

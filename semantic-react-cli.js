"use strict";

const fs = require('fs');

const args = process.argv.slice(2);
const projectName = './'+args[0];
const sourceDir = projectName + '/src/';

let mainFile = '/index.js', lineNumberToInsert;

fs.readFile(sourceDir+mainFile, 'utf-8', function(error, data){
	let lines = data.split('\n');
	lines.map(function(value, index) {
		if(value.indexOf('import') > -1) lineNumberToInsert = index+1;
	});

	lines.splice(lineNumberToInsert, 0, `import 'semantic-ui-css/semantic.min.css';\n`);
	fs.writeFile(sourceDir+mainFile, lines.join('\n'), function(error) {
		if(error) return console.log(error);
	});
});
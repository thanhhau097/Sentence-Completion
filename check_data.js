// this file checks the structure of data if it's true or not

var fs = require('fs');
var readline = require('readline');
//you should change this path
filePath = '/Users/macos/Desktop/School/20172/Project\ 2/result.txt';

var rd = readline.createInterface({
    input: fs.createReadStream(filePath)
    // output: process.stdout,
    // console: false
});

var count = 0;
var previousLine = '';
rd.on('line', function(line) {
    if (count % 6 == 0){
    	if (line.length < 30){
    		console.log('previousLine: ', previousLine, '\n');
    		console.log('currentLine: ', line, '\n');
    		console.log("False at: ", line, " Count: ", count);
    		return;
    	}
    }
    previousLine = line;
    count ++;
    // printCount()
});

function printCount() {
	console.log(count);
}
// fs.readFile(filePath, 'utf8', function (err, data){
// 	if (err){
// 		return console.log(err);
// 	}
// 	console.log(data[0]);
// });
// over
// on
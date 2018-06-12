// this file crawl data to test from onthitoeic.vn

var request = require("request");
var DOMParser = require('dom-parser');
var fs = require('fs');

var parser = new DOMParser();
var html_data = '';
var file_path = '/Users/macos/Desktop/School/20172/Project\ 2/result.txt'
var file_str = ''

var page_links = [];



// for (let i = 1; i <= 96; i ++){
// 	let str = "http://www.onthitoeic.vn/part-5-level-700-900-luyen-tap-" + i.toString();
// 	page_links.push(str);
// }

for (let i = 106; i <= 106; i++){
	let str = "http://www.onthitoeic.vn/toeic-part-5-level-700-900-luyen-tap-" + i.toString();
	page_links.push(str);
}

for (let link of page_links){
	let options_get_page = { 
		method: 'GET',
	  	url: link,
	  	headers: { 'content-type': 'application/x-www-form-urlencoded' }
    };
    get_all(options_get_page);
}



function get_all(options_get_page){
	request(options_get_page, function (error, response, body) {
	if (error) throw new Error(error);
	htmlDoc = parser.parseFromString(body, "text/html");

	let regex = /[\n\r]*watuproTakerEmail[0-9]*/gi;
	let result = body.match(regex);
	if (result != null) {
		let quiz_id = result[0].replace('watuproTakerEmail', '');
		get_questions(get_options(quiz_id));
	}
	});
}

function get_options(quiz_id) {
	return { 
	method: 'POST',
  	url: 'http://www.onthitoeic.vn/wp-admin/admin-ajax.php',
  	headers: 
   		{ 
     		'content-type': 'application/x-www-form-urlencoded' },
  	form: 
   		{ 
   			action: 'watupro_submit',
     		quiz_id: quiz_id,
     		taker_email: 'abc@gmail.com' 
     	} 
    };
}

function get_questions(options){
	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		processResponse(body);
	});
}


processResponse = (body) => {
	htmlDoc = parser.parseFromString(body, "text/html");

	p = htmlDoc.getElementsByTagName("p")[4];
	list_questions = p.getElementsByClassName("show-question watupro-unresolved");

	for (let i = 0; i < list_questions.length; i++){
		parseSentence(list_questions[i]);
	}
};

parseSentence = (sentence) => {

	list_answers = sentence.getElementsByClassName("show-question-choices")[0];
	ul = list_answers.getElementsByTagName('ul')[0];
	li = ul.getElementsByTagName('li');

	if (ul.getElementsByClassName('answer correct-answer')[0] != null){
		console.log(sentence.getElementsByClassName("show-question-content")[0].textContent);

		let str = sentence.getElementsByClassName("show-question-content")[0].textContent + '\n';
		// fs.writeFile(file_path, sentence.getElementsByClassName("show-question-content")[0].textContent, function(err) {
		//     if(err) {
		//         return console.log(err);
		//     }
		// });

		for (let i = 0; i < li.length; i++) {
			console.log(li[i].textContent);
			str = str + li[i].textContent + '\n';
			// fs.writeFile(file_path, li[i].textContent, function(err) {
		 //    	if(err) {
		 //        	return console.log(err);
		 //    	}
	  //   	});
		};

		correct_answer = ul.getElementsByClassName('answer correct-answer')[0].textContent;
		console.log("Correct answer: ", correct_answer);

		str = str + correct_answer + '\n';
		// fs.writeFile(file_path, correct_answer, function(err) {
	 //    	if(err) {
	 //        	return console.log(err);
	 //    	}
	 //    });

	 	fs.appendFileSync(file_path, str);

	}
};








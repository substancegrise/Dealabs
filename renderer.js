// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
/*const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {
uri: 'https://www.dealabs.com/hot',
    transform: function (body) {
   return cheerio.load(body);
   }
};

rp(options)
	.then(($) => {
	console.log($);
})
	.catch((err) => {
	console.log(err);
});


var letter = document.getElementByClass('.text--b').text()
 console.log(letter);
const request = require('request'); // Function call -


const args = process.argv.slice(2);
const search = args[0];

request('https://api.thecatapi.com/v1/breeds/search?q=' + search, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  const data = JSON.parse(body);
  const cat = data[0];
  if (cat === undefined) {
    console.log('Cat not found!');
    return;
  }

  console.log(cat.description);
});
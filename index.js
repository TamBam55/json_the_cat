// index.js
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});


// const request = require('request'); // Function call -
// const args = process.argv.slice(2);
// const search = args[0];

// request('https://api.thecatapi.com/v1/breeds/search?q=' + search, (error, response, body) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   const data = JSON.parse(body);
//   const cat = data[0];
//   if (cat === undefined) {
//     console.log('Cat not found!');
//     return;
//   }

//   console.log(cat.description);
// });

module.exports = { fetchBreedDescription };
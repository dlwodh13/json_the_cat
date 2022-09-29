//console.log(breedType);
const request = require('request');

let URL = `https://api.thecatapi.com/v1/breeds/search?q=`;

const fetchBreedDescription = (breedType, callback) => {
  //console.log(breedType);
  request(`${URL}${breedType}`, (error, response, body) => {
    if (error) {
      callback(error,null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(null, `Bread cannot be Found!`);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};


module.exports = { fetchBreedDescription };



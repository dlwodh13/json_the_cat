const request = require('request');
const arg = process.argv.slice(2);


let breedType = arg[0];
//console.log(breedType);
let URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedType}`;


request(URL, (error, response, body) => {
  // console.error('error:',error);
  // console.log('response:',response && response.statusCode);
  // console.log('body:',JSON.parse(body));
  if (error) {
    console.log(`${URL} is not valid`);
    console.error('error:',error);
  } else {
    const data = JSON.parse(body);
    //console.log(data);
    //console.log(typeof data);
    //console.log(data[0]);
    if (data[0]) {
      console.log(data[0].description);
    } else {
      console.log(`${arg} not found!`);
    }
  }
});
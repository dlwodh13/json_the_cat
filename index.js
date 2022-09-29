const { fetchBreedDescription } = require('./breedFetcher');
const breedType = process.argv[2];
//console.log(breedType);

fetchBreedDescription(breedType, (error, desc) => {
  if(error) {
    console.log(`error fetch details: `,error);
  } else {
    console.log(desc);
  }
});

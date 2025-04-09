import generateName from 'sillyname';
var sillyName = generateName();

console.log(`${sillyName} is dying.`);

import superHero, { randomSuperhero } from 'superheroes';
const name = randomSuperhero();
console.log("I am " + name +", I have come to kill you!");
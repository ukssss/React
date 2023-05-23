// hw1
import { Bike, Car } from './a';

let 자동차: Car = { wheel: 4, model: 'avante' };
let 자전거: Bike = { wheel: 2, model: 'scott' };

// hw2

import { Hw2 } from './a';

let hw2: Hw2 = (a) => {
  console.log(a);
};

hw2({ test: 'hello' });

// hw3
///<reference path="./a.ts"/>

let stringDog: StringDog.Dog = 'chiwawa';
let objectDog: ObjectDog.Dog = { name: 'chika' };

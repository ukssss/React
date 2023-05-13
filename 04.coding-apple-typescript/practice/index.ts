type Girlfriend = {
  readonly name: string;
};

const girl: Girlfriend = {
  name: 'karina',
};

// girl.name = 'winter';

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type Postion = PositionX & PositionY;

let position: Postion = { x: 10, y: 20 };

// hw1

type Object1 = { x: number };
type Object2 = { x: string };
type ExtendObject = Object1 & Object2;

// let answer: ExtendObject = { x: 10 };

// hw2

type ObjectHw2 = { color?: string; size: number; readonly position: number[] };
let hw2Answer: ObjectHw2 = { color: 'red', size: 10, position: [1, 2] };

// hw3
type ObjectHw3 = { name: string; phone: number; email: string };
let hw3Answer: ObjectHw3 = { name: 'ukss', phone: 1234, email: '1872003115su@gmail.com' };

// hw4
type ObjectHw4 = { adult: boolean };
type Hw4 = ObjectHw3 & ObjectHw4;
let hw4Answer: Hw4 = { name: 'ukss', phone: 1234, email: '1872003115su@gmail.com', adult: true };

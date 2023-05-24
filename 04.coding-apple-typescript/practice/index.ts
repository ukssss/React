// function 함수<MyType>(x: MyType[]): MyType {
//   return x[0];
// }

// let a = 함수<number>([4, 2]);
// let b = 함수<string>(['4', '2']);
// console.log(a);
// console.log(b);

// function 함수2<MyType extends number>(x: MyType) {
//   return x - 1;
// }

// let c = 함수2<number>(100);

// interface LengthCheck {
//   length: number;
// }

// function 함수3<MyType extends LengthCheck>(x: MyType) {
//   return x.length;
// }

// let d = 함수3<string[]>(['100']);

// hw1

function hw1<T extends string | string[]>(x: T) {
  console.log(x.length);
}

let hw1a = hw1<string>('hello');
let hw1b = hw1<string[]>(['kim', 'park']);

// hw2

interface Animal {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function hw2<T>(x: string): void {
  console.log(JSON.parse(x));
}

hw2<Animal>(data);

// hw3

class Person<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}

let a = new Person<string>('어쩌구');
let b = new Person<string[]>(['어쩌구', '절씨구']);
let c = new Person<number>(123);

console.log(a.name);
console.log(b.name);
console.log(c.name);

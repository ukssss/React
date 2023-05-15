class Person {
  name: string;
  constructor(a: string) {
    this.name = a;
  }

  test(a: string) {
    console.log(`안녕 ${a}`);
  }
}

let human1 = new Person('ukss');
let human2 = new Person('hong');

// hw1

class Car {
  model: string;
  price: number;
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }
  tax(): number {
    return this.price / 10;
  }
}

let car1 = new Car('소나타 디 엣지', 4000);
console.log(car1);
console.log(car1.tax());

// hw2

class Word {
  num;
  str;
  constructor(...param: (number | string)[]) {
    const num: number[] = [];
    const str: string[] = [];

    param.forEach((el) => {
      if (typeof el === 'number') {
        num.push(el);
      } else if (typeof el === 'string') {
        str.push(el);
      } else {
        return;
      }
    });

    this.num = num;
    this.str = str;
  }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);

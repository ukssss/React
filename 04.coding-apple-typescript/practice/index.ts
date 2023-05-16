type Animal = { name: string };
type Cat = { age: number } & Animal;

interface 학생인터 {
  name: string;
}

interface 학생인터 {
  // 중복 선언 가능 (합쳐짐)
  score?: number;
}

interface 선생인터 extends 학생인터 {
  age: number;
}

let 학생: 학생인터 = { name: 'kim' };
let 선생: 선생인터 = { name: 'kim', age: 20 };

// hw1

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Product = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };

// hw2

interface Cart {
  product: string;
  price: number;
}

let 장바구니: Cart[] = [
  { product: '청소기', price: 7000 },
  { product: '삼다수', price: 800 },
];

// hw3

interface MoreCart extends Cart {
  card: boolean;
}

let 장바구니2: MoreCart[] = [{ product: '청소기', price: 7000, card: false }];

// hw4

interface CalType {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let calculator: CalType = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};

console.log(calculator.minus(3, 2));

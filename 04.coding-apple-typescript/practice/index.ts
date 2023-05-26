interface StringOnly {
  [key: string]: string | number;
}

let user: StringOnly = {
  name: 'kim',
  age: 20,
  location: 'seoul',
};

interface MyType {
  'font-size': MyType | number;
}

let css: MyType = {
  'font-size': {
    'font-size': {
      'font-size': 14,
    },
  },
};

// hw1

interface Hw1 {
  [key: string]: string | number;
}

let obj: Hw1 = {
  model: 'k5',
  brand: 'kia',
  price: 6000,
  year: 2030,
  date: '6월',
  percent: '5%',
  dealer: '김차장',
};

// hw2
interface Hw2 {
  'font-size': number;
  [key: string]: Hw2 | number;
}

let obj2: Hw2 = {
  'font-size': 10,
  'secondary': {
    'font-size': 12,
    'third': {
      'font-size': 14,
    },
  },
};

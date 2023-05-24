namespace 네임스페이스 {
  export type Name = string | number;
}

let test: 네임스페이스.Name = 'ukss';

// hw1

export type Car = {
  wheel: number;
  model: string;
};
export interface Bike {
  wheel: 2;
  model: string;
}

// hw2

export type Hw2 = (a?: object) => void;

// hw3

namespace StringDog {
  export type Dog = string;
}

namespace ObjectDog {
  export interface Dog {
    name: string;
  }
}

type Car = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
};

type NewType = TypeChanger<Car>;

// hw1

type Bus = {
  color: string;
  model: boolean;
  price: number;
};

type TypeChangerHw1<MyType> = {
  [key in keyof MyType]: string | number;
};

type NewTypeHw1 = TypeChangerHw1<Bus>;

let hw1: NewTypeHw1 = {
  color: 'silver',
  model: 'G80',
  price: 6457,
};

// hw2

type TypeChangerHw2<MyType, T> = {
  [key in keyof MyType]: T;
};

type NewTypeString = TypeChangerHw2<Bus, string>;
type NewTypeNumber = TypeChangerHw2<Bus, number>;

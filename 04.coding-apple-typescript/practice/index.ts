// extends 삼항연산자

type Age<T> = T extends string ? string : unknown;

let a1: Age<string>; // string
let a2: Age<number>; // unknown

type FirstItem<T> = T extends any[] ? T[0] : any;

let b1: FirstItem<[number[], string[]]>;
let b2: FirstItem<number>;

// infer

type GetType<T> = T extends () => infer R ? R : unknown;

type Infer = GetType<() => void>;

type ReturnCode = ReturnType<() => void>;

// hw1

type Hw1<T> = T extends [string, ...any] ? T[0] : unknown;
let test1: Hw1<[string, number]>;
let test2: Hw1<[boolean, number]>;

// hw2

type Hw2<T> = T extends (x: infer R) => void ? R : unknown;

let test3: Hw2<(x: number) => void>;
let test4: Hw2<(x: string) => void>;

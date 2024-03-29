type Age<T> = T extends string ? string : unknown;
declare let a1: Age<string>;
declare let a2: Age<number>;
type FirstItem<T> = T extends any[] ? T[0] : any;
declare let b1: FirstItem<[number[], string[]]>;
declare let b2: FirstItem<number>;
type GetType<T> = T extends () => infer R ? R : unknown;
type Infer = GetType<() => void>;
type ReturnCode = ReturnType<() => void>;
type Hw1<T> = T extends [string, ...any] ? T[0] : unknown;
declare let test1: Hw1<[string, number]>;
declare let test2: Hw1<[boolean, number]>;
type Hw2<T> = T extends (x: infer R) => void ? R : unknown;
declare let test3: Hw2<(x: number) => void>;
declare let test4: Hw2<(x: string) => void>;

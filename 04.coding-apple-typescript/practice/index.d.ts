interface StringOnly {
    [key: string]: string | number;
}
declare let user: StringOnly;
interface MyType {
    'font-size': MyType | number;
}
declare let css: MyType;
interface Hw1 {
    [key: string]: string | number;
}
declare let obj: Hw1;
interface Hw2 {
    'font-size': number;
    [key: string]: Hw2 | number;
}
declare let obj2: Hw2;

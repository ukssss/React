let 회원정보: Member = {
  name: 'ukss',
  age: 26,
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {
    return '메롱';
  },
};

회원정보.plusOne(2);
회원정보.changeName();

// hw1

type Member = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

// hw2

type Hw2 = {
  cutZero: (a: string) => string;
  removeDash: (a: string) => number;
};

let hw2: Hw2 = {
  cutZero(a) {
    let arr = a.toString().split('');
    if (arr[0] === '0') {
      arr = arr.slice(1, arr.length);
    }
    return arr.join('');
  },
  removeDash(a) {
    let arr = a.toString().split('');
    for (let i = 0; i < arr.length; i++) {
      arr[i] === '-' && arr.splice(i, 1);
    }
    return Number(arr.join(''));
  },
};

// hw3

type Func1 = (x: string) => string;
type Func2 = (x: string) => number;

const num = '010-1234-5678';
function hw3(x, func1: Func1, func2: Func2) {
  let result1 = func1(x);
  let result2 = func2(result1);
  return result2;
}

console.log(hw3(num, hw2.cutZero, hw2.removeDash));

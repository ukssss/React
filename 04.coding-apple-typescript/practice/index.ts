let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];

// hw1

let food: [string, number, boolean] = ['동서녹차', 4000, true];

// hw2

let hw2: [string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true];

// hw3

function hw3(...rest: [string, boolean, ...(number | string)[]]) {
  return '메롱';
}

hw3('test', true, 1, 1, '2', 5);

// hw4

function hw4(...rest: [...(number | string)[]]) {
  let result: [string[], number[]] = [[], []];

  rest.forEach((el) => {
    if (typeof el === 'string') {
      result[0].push(el);
    } else {
      result[1].push(el);
    }
  });

  return result;
}

let answer = hw4('b', 5, 6, 8, 'a');
console.log(answer);

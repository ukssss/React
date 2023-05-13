function 함수(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}

let 이름: string = 'ukss';

함수(123);

// hw1

function hw1(x: (number | string)[]) {
  let temp: number[] = [];

  x.forEach((el) => {
    if (typeof el === 'string') {
      temp.push(parseFloat(el));
    } else {
      temp.push(el);
    }
  });

  return temp;
}

console.log(hw1([123, '3']));

// hw2
let 철수쌤 = { subject: 'math' };
let 영희쌤 = { subject: ['science', 'english'] };
let 민수쌤 = { subject: ['science', 'art', 'korean'] };

function hw2(x: { subject: string | string[] }) {
  if (typeof x.subject === 'string') {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return 'Nothing,,';
  }
}

console.log(hw2(철수쌤));

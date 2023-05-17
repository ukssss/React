function 함수(...a: number[]) {
  console.log(a);
}

함수(1, 5, 3, 5, 6, 6);

let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];

let [변수1, 변수2] = ['안녕', 100];

let { student: student, age: age } = {
  student: true,
  age: 26,
};

let 오브젝트 = { student: true, age: 26 };

function 함수2({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}

함수2({ student: true, age: 26 });

// hw1

function hw1(...a: number[]) {
  let max = 0;
  for (let i of a) {
    if (max <= i) max = i;
  }
  console.log(`hw1 : ${max}`);
}

hw1(1, 2, 3, 4);

// hw2

function hw2({ user, comment, admin }: { user: string; comment: number[]; admin: boolean }) {
  console.log(`hw2 : ${user}, ${comment}, ${admin}`);
}

hw2({ user: 'kim', comment: [3, 5, 4], admin: false });

// hw3

function hw3([cnt, product, status]: (number | string | boolean)[]) {
  console.log(`hw3 : ${cnt}, ${product}, ${status}`);
}

hw3([40, 'wine', false]);

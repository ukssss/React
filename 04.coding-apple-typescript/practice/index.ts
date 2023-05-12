let 회원: number | string = 123;

let 어레이: (number | string)[] = [1, '2', 3];
let 오브젝트: { a: string | number } = { a: 123 };

let 나이: string | number;

let 이름: unknown;

// 숙제 1
let user: string = 'kim';
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

// 숙제 2
let 학교: { score: (number | boolean)[]; teacher: string; friend: string | string[] } = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];

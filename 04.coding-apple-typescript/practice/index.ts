let 접니다: '머리풍성' | '커플';

function 함수(a: 'hello'): 1 | 0 {
  return 1;
}

함수('hello');

function 가위바위보(x: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
  return [x];
}

가위바위보('가위');

let 자료 = {
  name: 'ukss',
} as const;

function 자료함수(a: 'ukss') {}

자료함수(자료.name);

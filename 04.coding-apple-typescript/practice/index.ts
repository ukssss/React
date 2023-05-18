type Car = {
  wheel: '4개';
  color: string;
};

type Bike = {
  wheel: '2개';
  color: string;
};

function 함수(x: Car | Bike) {
  if (x.wheel === '4개') {
    console.log(`자동차 바퀴 ${x.wheel}`);
  } else {
    console.log(`바이크 바퀴 ${x.wheel}`);
  }
}

let test: Car = { wheel: '4개', color: 'blue' };

함수(test);

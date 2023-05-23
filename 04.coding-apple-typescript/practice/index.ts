class User {
  static skill = 'js';
  intro = User.skill + ' expect';
}

let ukss = new User();
console.log(ukss);

User.skill = 'java';
let hong = new User();
console.log(hong);

// hw1

class Hw1 {
  private static x = 10;
  public static y = 20;
  protected z = 30;
}

// 1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만 x와 y에는 static 키워드가 붙었기 때문에
// User.x 와 같은 식으로만 접근해서 사용할 수 있다.  즉, User의 자식들은 x, y를 사용할 수 console.log('없다 : ',없다)
// 2. private static x는 class 내부에서만 수정이 가능하다.
// 3. public static y는 class 내,외부 상관없이 수정이 가능하다.
// 4. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데,
// 약간 범위가 넓어 extends로 복사한 class 내부에서도 사용할 수 있다.

// hw2
class Hw2 {
  private static x = 10;
  public static y = 20;
  static addOne(num: number) {
    Hw2.x += num;
  }
  static printX() {
    console.log(Hw2.x);
  }
}

Hw2.addOne(3);
Hw2.addOne(4);
Hw2.printX();

// hw3
class Square {
  constructor(public width: number, public height: number, public color: string) {}
  draw() {
    let a = Math.random();
    let square = `<div style="position:relative; 
      top:${a * 400}px; 
      left:${a * 400}px; 
      width:${this.width}px; 
      height : ${this.height}px; 
      background:${this.color}"></div>`;
    document.body.insertAdjacentHTML('beforeend', square);
  }
}

let 네모 = new Square(30, 30, 'green');
네모.draw();
네모.draw();
네모.draw();
네모.draw();

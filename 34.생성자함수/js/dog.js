function Dog(dogName, dogAge, feel) {
  this.name = dogName
  this.age = dogAge
  this.feel = Math.floor(Math.random() * 3)
  this.say = function () {
    if (this.feel == 0) {
      document.write(`멍멍! 나는 ${this.name}이다! 기분이 좋다 멍멍!<br>`)
    } else if (this.feel == 1) {
      document.write(`${this.name}는 오늘 심심하군!! 뭐 먹을 거 없나~! 왈왈!!!<br>`)
    } else {
      document.write(`${this.name}는 지금 굉장히 화가난다 왈왈!!<br>`)
    }
  }

}
  //return this가 생략되어 있는 상태













// let dog1 = {
//   name: "뽀삐",
//   age: 2,
//   say: function () {
//     document.write("멍멍!")
//   }
// }

// let dog2 = {
//   name: "흰둥이",
//   age: 4,
//   say: function () {
//     document.write("멍멍!")
//   }
// }
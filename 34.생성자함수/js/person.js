function Person(userName, userAge) {
  this.name = userName
  this.age = userAge
  //this-생성자함수로 만들어지게 될 객체를 의미
  this.sayHello = function () {
    document.write("<p>안녕하세요" + this.name + "입니다.</p>")
  }
  this.intro = function () {
    document.write(`<p>${this.name}님은 ${this.age}살입니다.</p>`)
  }
}
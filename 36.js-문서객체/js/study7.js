window.onload = function () {

  let dtlist = document.querySelectorAll(".tapMenu>dt")
  for (let i = 0; i < dtlist.length; i++) {
    dtlist[i].addEventListener("click", function () {

      for (let j = 0; j < dtlist.length; j++) {
        dtlist[j].classList.remove("on")
      }
      //on클래스를 지워주는 소스코드

      this.classList.add("on")
      //클릭하는 맥락 안에서 클릭한 태그를 this로 표현할 수 있다.
      //클릭한 dt에게만 on클래스가 추가되게 하는 소스코드
    })
  }

}
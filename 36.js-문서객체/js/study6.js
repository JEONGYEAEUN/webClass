window.onload = function () {
  let menuState = false
  //문서를 끝까지 읽은 뒤 실행할 소스코드
  let btnMenu = document.querySelector(".btnMenu")
  //html에서btnmenu클래스를 찾아서 이 자리에 남긴다 > 그렇기 때문에 html의 모든 문서를 다 읽은 후 실행되어야만 한다
  let navTag = document.querySelector("nav")



  //변수선택.동작함수("이벤트의형태",동작-function(){

  //})


  btnMenu.addEventListener("click", function () {
    if (menuState == false) {
      //메뉴가 닫혀있는 경우 실행되는 코드
      btnMenu.classList.add("close")
      navTag.classList.add("show")
      menuState = true
    } else {
      //메뉴가 열려있는 경우 실행되는 코드
      btnMenu.classList.remove("close")
      navTag.classList.remove("show")
      menuState = false
    }
  })

}



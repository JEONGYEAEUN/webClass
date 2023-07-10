window.onload = function () {
  let btn1 = document.querySelector(".btnClick")
  btn1.addEventListener("click", function () {
    //클릭햇을 때 실행되는 소스코드
    //이벤트 형태, 익명함수(동작) : 구성요소
    document.querySelector(".txtbox").style.color = "black"
  })

  let btnOpen = document.querySelector(".btnPopup")
  btnOpen.addEventListener("click", function () {
    // document.querySelector(".hiddenPopup").style.display = "flex"
    //보통은 이렇게 직접 선택하지 않는다
    document.querySelector(".hiddenPopup").classList.add("show")
  })

  let btnClose = document.querySelector(".btnPopupClose")
  btnClose.addEventListener("click", function () {
    document.querySelector(".hiddenPopup").classList.remove("show")
  })
}
//꼭 onload 중괄호 안에 있어야만 실행이 된다.



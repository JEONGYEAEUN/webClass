window.onload = function () {
  let title = document.querySelector("#title")
  title.style.color = "blue"

  let titleParent = title.parentElement
  //<div class="box"> 가 저장되어 있게 됨
  titleParent.style.border = "1px solid red"

  let ulTag = document.querySelector(".list")
  let list = ulTag.children
  for (let i = 0; i < 4; i++) {
    list[i].style.borderBottom = "1px solid black"
    // list[0].style.borderBottom = "1px solid black"
    // list[1].style.borderBottom = "1px solid black"
    // list[2].style.borderBottom = "1px solid black"
    // list[3].style.borderBottom = "1px solid black"
  }

  title.nextElementSibling.style.background = "lightblue"
  list[0].nextElementSibling.nextElementSibling.style.color = "red"
  ulTag.previousElementSibling.style.textDecoration = "underline"

}
//html의 읽는 순서(위>아래)로 인해 적용되지 않앗던 것 html문서를 다 읽고 스타일이 적용될 수 있도록 윈도우 온로드를 사용해준다
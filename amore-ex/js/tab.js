window.onload = function () {

  function tab(classname) {
    let tab = document.querySelectorAll("." + classname + ">dt")
    for (let i = 0; i < tab.length; i++) {
      tab[i].addEventListener("click", function () {
        for (let k = 0; k < tab.length; k++) {
          tab[k].classList.remove("on")
        }
        this.classList.add("on")
      })
    }
  }

  tab("tabMenu")
  tab("bannertabmenu")
}

//탭함수
//정의구는 온로드 안에 들어갈 필요는 없지만 실행구는 온로드 안에 들어가 있어야 한다.
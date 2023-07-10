window.onload = function () {

  // let bannerDT = document.querySelectorAll(".bannertabmenu>dt")
  // for (let i = 0; i < bannerDT.length; i++) {
  //   bannerDT[i].addEventListener("click", function () {
  //     for (let d = 0; d < bannerDT.length; d++) {
  //       bannerDT[d].classList.remove("on")
  //     }
  //     this.classList.add("on")
  //   })
  // }


  // let tabDT = document.querySelectorAll(".tabMenu>dt")
  // for (let t = 0; t < tapDT.length; t++) {
  //   tabDT[t].addEventListener("click", function () {
  //     for (let a = 0; a < tabDT.length; a++) {
  //       tabDT[a].classList.remove("on")
  //     }
  //     this.classList.add("on")
  //   })
  // }


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



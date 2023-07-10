$(document).ready(function () {

  $(".btn").click(function () {

    if ($(".skill").hasClass("on") == false) {
      //skill클래스에 on클래스가 없다면
      //아래 코드를 실행함
      $(".skill").addClass("on")

      $(".skill>li").each(function () {
        let list = $(this)
        let percent = $(this).find(".per").text()
        let count = 0
        let circle = $(this).find("circle")

        let timer = setInterval(function () {
          count++
          list.find(".per").text(count + "%")
          circle.css("stroke-dashoffset", 314 - (314 * (count / 100)))
          if (count >= percent) {
            clearInterval(timer)
          }
        }, 10)
      })
    }
  })

  $(window).scroll(function () {
    let a = $(window).scrollTop()
    let b = $(".skill").offset().top
    let c = $(window).height() * 0.5

    if (a + c >= b) {
      if ($(".skill").hasClass("on") == false) {
        // skill클래스에 on클래스가 없다면
        $(".skill").addClass("on")
        $(".skill>li").each(function () {
          let list = $(this)
          let percent = $(this).find(".per").text()
          let count = 0
          let circle = $(this).find("circle")

          let timer = setInterval(function () {
            count++
            list.find(".per").text(count + "%")
            circle.css("stroke-dashoffset", 314 - (314 * (count / 100)))
            if (count >= percent) {
              clearInterval(timer)
            }
          }, 10)
        })
      }
    }

  })

})




//scrollTop:위에서 스크롤바가 얼마나 떨어져있는지 계산해주는 함수
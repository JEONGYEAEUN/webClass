$(document).ready(function () {

  $(".btn").click(function () {
    if ($(this).parent().hasClass("on") == false) {
      $(this).parent().addClass("on")
      let per = Number($(this).parent().find(".per").text())
      //.find 자손 단위 중에서 원하는 클래스를 바로 찾아주는 명령어
      let circle = $(this).parent().find("circle")
      circle.css("stroke-dashoffset", 314 - (314 * (per / 100)))

      let percenTag = $(this).parent().find(".per")
      let count = 0;
      let timer = setInterval(function () {
        count++
        percenTag.text(count + "%")
        circle.css("stroke-dashoffset", 314 - (314 * (count / 100)))
        if (count >= per) {
          clearInterval(timer)
        }
      }, 30)
    }
  })
})
$(document).ready(function () {


  //마우스를 움직이면 cursor클래스가 따라다니도록
  $(document).mousemove(function (event) {
    //event(e)는 이미 만들어진 전역변수
    let posX = event.clientX - 15
    let posY = event.clientY - 15
    console.log(posX, posY)
    $(".cursor").css("left", posX + "px")
    $(".cursor").css("top", posY + "px")
    $(".cursor").addClass("on")

    $(".cursorguideBox").css("left", (posX + 150) + "px")
    $(".cursorguideBox").css("top", posY + "px")

  })

  // $(".wrap>section").click(function () {
  //   alert("test")
  //  pointer-events: none; 가 들어가줘야 선택이 된다
  //  })

  $(".slider").mouseover(function () {
    $(".cursor").addClass("big")
    let txt = $(".slider").attr("data-desc")
    $(".cursorguideBox").text(txt)
  })

  $(".slider").mouseout(function () {
    $(".cursor").removeClass("big")
  })

})
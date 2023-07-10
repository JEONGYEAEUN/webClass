$(document).ready(function () {
  //추후에 사용하고 싶을 때 ".wrap>div" 부분만 내가 지정한 클래스나 태그로 변경해주면 된다.


  //스크롤바가 움직일 때마다 실행되는 기능
  $(window).scroll(function () {
    let winst = $(window).scrollTop()  //한번 움직이면 변수 안에 저장되는 값 1000
    let con2top = $(".con2").offset().top //1000 콘투 클래스가 전체 문서 대비 위에서 떨어진 값
    if (winst >= con2top) {
      $(".con2").addClass("on")
    } else {
      $(".con2").removeClass("on")
    }
  })

  $(".wrap>div").on("wheel DOMMouseScroll", function (event) {
    //console.log(event)
    let E = event.originalEvent
    let delta = 0;
    if (E.detail) {
      delta = E.detail * -40
    } else {
      delta = E.wheelDelta
    }

    if (delta < 0) {
      //마우스 휠을 내렸을 때
      //console.log($(this).next().length)
      if ($(this).next().length != 0) {
        let posTop = $(this).next().offset().top
        $("html,body").stop().animate({ scrollTop: posTop }, 1000)
      }

    } else {
      //마우스 휠을 올렸을 때
      if ($(this).prev().length != 0) {
        let posTop = $(this).prev().offset().top
        $("html,body").stop().animate({ scrollTop: posTop }, 1000)
      }
    }
    return false

  })
})

// if ($(this).prev().length != 0){} -> 굳이 넣지 않아도 기능이 잘 실행이 되지만 혹시모를 브라우저의 오류를 방지하기 위함
$(document).ready(function () {



  let pathLength = $("#progress path").get(0).getTotalLength()
  $("#progress path").css("stroke-dasharray", pathLength)
  $("#progress path").css("stroke-dashoffset", pathLength)




  $(window).scroll(function () {
    let winTop = $(window).scrollTop()
    let fixedTop = $(".fixedFrame").offset().top
    let distance = winTop - fixedTop
    let movingAreaHeight = $(".movingArea").height()




    if (distance < 0) {
      $(".movingArea").css("position", "absolute")
      $(".movingArea").css("top", "0")
      $(".movingArea").css("left", "0")
    }

    if (distance >= 0 && distance <= 8000 - movingAreaHeight) {
      $(".movingArea").css("position", "fixed")
      $(".movingArea").css("top", "0")
      $(".movingArea").css("left", "0")
      // console.log(distance)

      let percent = (distance / (8000 - movingAreaHeight) * 100) //0~100까지의 수
      //내려가는 스크롤 수치를 퍼센트로 표현하는 수식
      $("#progress path").css("stroke-dashoffset", pathLength - (pathLength * percent / 100))
      $(".per").text(Math.round(percent) + "%")

      let percent2 = (distance / (8000 - movingAreaHeight) * 87.5) //0~87.5까지의 수
      $(".train").css("transform", "translateX(-" + percent2 + "%)")



    }



    if (distance > 8000 - movingAreaHeight) {
      $(".movingArea").css("position", "absolute")
      $(".movingArea").css("top", (8000 - movingAreaHeight) + "px")
      $(".movingArea").css("left", "0")
    }
  })

})

// scrollTop은 현재 윈도우 창 스크롤의 위치값을 나타냄
//scrollTop은 가변적 요소


// offset은 대상의 위치값을 나타냄
//offset은 고정적 요소







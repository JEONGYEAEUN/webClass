// let a = `100`
// let b = 100
// let c = { name: '이름', age; 38}
// c.name //이름
// let d = ['이름', 38]
// //변수에 저장될 수 있는 요소들
// d[0] //d라는 배열의 0번째 요소= 정현진
// ['이름', 38][0]//배열의 0번째 요소= 정현진

$(document).ready(function () {

  $(".list>li").each(function () {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;

    $(this).css("background", "rgb(" + red + "," + green + "," + blue + ")")

    let tagTop = $(this).offset().top
    //let tagTop = {left:0,top:0}
    $(this).text("저는 전체문서기준 위에서 " + tagTop + " 떨어진 곳에 있습니다.")

    $(this).addClass("on")
  })

  //$(".list>li").addClass("on")
})
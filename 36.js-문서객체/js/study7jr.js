$(document).ready(function () {
  $(".tapMenu>dt").click(function () {
    //1. dt태그들이 on클래스가 지워져야함
    $(".tapMenu>dt").removeClass("on")
    //2. 내가 클릭한 dt태그한테만 on클래스가 추가 
    $(this).addClass("on")
  })
})
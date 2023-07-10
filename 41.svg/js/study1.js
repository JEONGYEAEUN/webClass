window.onload = function () {

  //let path_a = document.querySelector(".a")
  let path_a = $(".c1").get(0)
  //제이쿼리 문서객체를 자바스크립트 문서객체로 변환(get(0)을 사용해서)하여 리턴함
  //get(0)은 하나로 묶여있는 형태 0말고 다른 숫자는 들어가지 않는다 
  let pathlength = path_a.getTotalLength()
  //getTotalLength() 함수는 선택한 svg태그 안의 오브젝트의 둘레길이를 계산해서 리턴함
  //자바스크립트 전용 문서객체의 메서드이다(제이쿼리x)
  $(".c1").css("stroke-dasharray", pathlength)
  $(".c1").css("stroke-dashoffset", pathlength)


}
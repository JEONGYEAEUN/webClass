window.onload = function () {

  let nextBtn = document.querySelector(".btnNext")
  let train = document.querySelector(".train")
  let prevBtn = document.querySelector(".btnPrev")
  let trainList = train.children //li태그들이 배열형태로 저장되어있음
  let count = 0 //전역변수
  let pagination = document.querySelector(".pagination")
  let paginationLi = pagination.children
  //let pagination = document.querySelectorAll(".pagination>li") 한방에 선택하는 방법


  nextBtn.addEventListener("click", function () {
    //train클래스를 선택해서 왼쪽으로 500px 이동
    count++
    if (count > 3) { count = 0 } //3을 하면 마지막 장에서 정지
    train.style.transform = "translateX(-" + 25 * count + "%)"



    for (let i = 0; i < trainList.length; i++) {
      trainList[i].classList.remove("on")
      paginationLi[i].classList.remove("on")
    }
    // trainList[0].classList.remove("on")
    // trainList[1].classList.remove("on")
    // trainList[2].classList.remove("on")
    // trainList[3].classList.remove("on")
    trainList[count].classList.add("on")
    paginationLi[count].classList.add("on")
  })

  prevBtn.addEventListener("click", function () {
    count--
    if (count < 0) { count = 3 }//0을 하면 처음에서 정지
    train.style.transform = "translateX(-" + 25 * count + "%)" //`translateX(-${25*count}%)` 로 써줄 수도 있다
    for (let i = 0; i < trainList.length; i++) {
      trainList[i].classList.remove("on")
      paginationLi[i].classList.remove("on")
    }
    trainList[count].classList.add("on")
    paginationLi[count].classList.add("on")
  })

  //---------------------------------------------------


  for (let p = 0; p < 4; p++) {
    paginationLi[p].addEventListener("click", function () {
      count = p //순번에 맞는 인덱스를 카운트 변수에 저장한다
      for (let i = 0; i < trainList.length; i++) {
        trainList[i].classList.remove("on")
        paginationLi[i].classList.remove("on")
      }
      trainList[p].classList.add("on")
      paginationLi[p].classList.add("on")
      train.style.transform = "translateX(-" + 25 * p + "%)"
    })
  }
}
window.onload = function () {
  let tabTitles = document.querySelectorAll(".tabTit>li")
  //ALL은 배열형태로 그냥 쿼리셀렉터는 하나만 불러옴
  let tabDes = document.querySelector(".tabDes")
  let tabDescription = [
    `<h3>title</h3>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptate sapiente nobis necessitatibus alias assumenda perspiciatis porro impedit vitae, repudiandae voluptates optio exercitationem. Facilis modi inventore corrupti aspernatur quo fugiat.</p>`,
    `<h3>title2</h3>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptate sapiente nobis necessitatibus alias assumenda perspiciatis porro impedit vitae, repudiandae voluptates optio exercitationem. Facilis modi inventore corrupti aspernatur quo fugiat.</p>`,
    `<h3>title3</h3>
<ul>
    <li>des1</li>
    <li>des2</li>
    <li>des3</li>
    <li>des4</li>
</ul>`
  ]
  for (let i = 0; i < tabTitles.length; i++) {
    tabTitles[i].addEventListener("click", function () {
      tabTitles[0].classList.remove("on")
      for (let j = 0; j < tabTitles.length; j++) {
        tabTitles[j].classList.remove("on")
      }
      this.classList.add("on")

      tabDes.innerHTML = tabDescription[i]
    })
  }
}
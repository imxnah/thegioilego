//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;
// KHai bào hàm hiển thị slide
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
  //chuyển đến slide tiếp theo
  slideIndex++;
  //nếu đang ở slide cuối cùng thì chuyển về slide đầu
  if (slideIndex > slides.length - 1) {
    slideIndex = 0
  }
  //tự động chuyển đổi slide sau 5s
  setTimeout(showSlides, 5000);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);

listitems=document.getElementsByClassName('layer1')
function currentSlide(n) {
  showSlides(slideIndex = n);
}
listData = localStorage.getItem('Data') != undefined ? JSON.parse(localStorage.getItem('Data')) : []
var load = function () {
  var htmlArray = listData.map(sp => `
  <div class="layer_item">
  <div class="img_sp">
    <a class="sp" href="chitietsp.html?id=${sp.id}"
      ><img src="/images/${sp.file}" alt=""
    /></a>
  </div>
  <div class="ten">
    <p id="tensp"><strong>${sp.name}</strong></p>
    <br />
    <div class="ten_items">
      ${sp.des}
    </div>
  </div>
  <div class="gia_items">
    <p class="giam">${sp.old}</p>
    <p class="gia">${sp.new}</p>
  </div>
</div>`
  ).join('\n');
  for(let i=0;i<listitems.length;i++){
    listitems[i].innerHTML=htmlArray
  }
}
load()
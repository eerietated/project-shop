let productsCountEL = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".item-cart-btn");

addToCartBtns.forEach((btn) => btn.addEventListener("click", onClick));
function onClick() {
  productsCountEL.textContent = +productsCountEL.textContent + 1;
}

//------------------------HOMETASK----------------------------
let likeBtns = document.querySelectorAll(".like");

function imageLikeBtn() {
  //   console.log("click");
  let imgSrc = this.getAttribute("src");

  if (
    imgSrc === "img/icon-5.png" ||
    this.style.backgroundColor === "transparent"
  ) {
    this.setAttribute("src", "img/icon-7.png");
    this.style.backgroundColor = "#2c71b8";
  } else {
    this.setAttribute("src", "img/icon-5.png");
    this.style.backgroundColor = "transparent";
  }
}
likeBtns.forEach((likeBtn) => likeBtn.addEventListener("click", imageLikeBtn));

//------------------------FORM----------------------------
let moreBtn = document.querySelectorAll(".item-more-btn");
let modal = document.querySelector(".modal");
let formBtn = document.querySelector(".btn-close-modal");

function openModal() {
  modal.classList.remove("hide");
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
}

moreBtn.forEach((btnMore) => btnMore.addEventListener("click", openModal));
formBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

//------------------------SLIDER----------------------------
$(".slider").slick({
    dots: true,
    prevArrow: '.prev-arrow',
    nextArrow: '.next-arrow',
});
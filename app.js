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

  if (imgSrc === "img/icon-5.png" || this.style.backgroundColor === "transparent") {
    this.setAttribute("src", "img/icon-7.png");
    this.style.backgroundColor = "#2c71b8";
  } else {
    this.setAttribute("src", "img/icon-5.png");
    this.style.backgroundColor = "transparent";
  }
}

likeBtns.forEach((likeBtn) => likeBtn.addEventListener("click", imageLikeBtn));

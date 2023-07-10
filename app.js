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
  prevArrow: ".prev-arrow",
  nextArrow: ".next-arrow",
});

//------------------------OBJECTS----------------------------

// function Car(model, year, color, a, b) {
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.a = a;
//   this.b = b;

//   this.hi = function () {
//     console.log("Hi " + this.model);
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
// }

// let audi = new Car("A4", "2015", "white", 10, 15);
// let lexus = new Car("Es350", "2014", "black");

// console.log(audi);
// console.log(lexus);

// console.log(audi.sum());

//------------------------PROTOTYPE----------------------------

// const fruitPrototype = {
//   eat() {
//     console.log(`This fruit = ${this.name} - is delicious`);
//   },
// };

// const apple = Object.create(fruitPrototype);
// apple.name = "Apple";

// apple.eat()
// console.log(apple);

//------------------------CLASS----------------------------

// class Car {
//   constructor(model, year, a, b) {
//     this.model = model;
//     this.year = year;
//     this.a = a;
//     this.b = b;
//   }
//   hi = function () {
//     console.log("Hi " + this.model);
//   };
//   sum = function () {
//     return this.a + this.b;
//   };
// }

// class BMW extends Car {
//   constructor(model, year, color) {
//     super(model);
//     this.year = year;
//     this.color = color;
//   }

//   hi = function() {
//     console.log("Hi " + this.model);
//   }
// }

// let audi = new Car("A4", "2015", 10, 15);
// let lexus = new Car("Es350", "2014");
// let bmw = new BMW("328", "2020", "black");

// console.log(audi);
// console.log(lexus);

// console.log(audi.sum());

// bmw.hi();

//------------------------BUTTONS(-/+)----------------------------
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let inputFields = document.querySelectorAll(".products-quantity input");

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };
  this.increment = function() {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  }
  this.decrement = function() {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  }
  this.toggleButtonState = function() {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };
  this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
  this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
}

// let counter1 = new Counter(incrementBtns, decrementBtns, inputFields);
let counterAll = [];
for(let i = 0; i < decrementBtns.length; i++) {
  counterAll[i] = new Counter(incrementBtns[i], decrementBtns[i], inputFields[i]);
}
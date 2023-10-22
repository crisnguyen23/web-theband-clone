const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modalClose = document.querySelector(".js-modal-close");

const sliders = document.querySelectorAll(".slider");

//Loops btn when click
for (const buyBtn of buyBtns) {
  buyBtn.onclick = function () {
    modal.classList.add("open");
  };
}

//turn off modal when clicking on the modal close button
modalClose.onclick = function () {
  modal.classList.remove("open");
};

modal.onclick = function () {
  modal.classList.remove("open");
};

// Prevent when click on modal tag
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

//RESONSIVE MOBILE
const header = document.getElementById("header");
const mobileMenu = document.getElementById("mobile-icon");
const headerHeight = header.clientHeight; //clientHeight: height of header

//Open/close menu
mobileMenu.onclick = function () {
  const isClose = header.clientHeight === headerHeight; //neu bang thi la dang dong
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

//Auto close when click menu
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (let i = 0; i < menuItems.length; i++) {
  const menuItem = menuItems[i];

  menuItem.onclick = function (event) {
    const isParrentMenu = this.classList.contains("menu-more");
    if (isParrentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}

// Slider 4s automation
let blockIndex = 1;
setInterval(() => {
  sliders.forEach((slider) => {
    slider.style.display = "none";
  });
  sliders[blockIndex].style.display = "block";
  blockIndex++;
  blockIndex = blockIndex >= sliders.length ? 0 : blockIndex;
}, 4000);

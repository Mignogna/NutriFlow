/*Input Search*/
const headerInput = document.querySelector(".search input");
const headerSearch = document.querySelector(".search");

headerSearch.addEventListener("click", () => {
  headerSearch.classList.toggle("active");
  headerInput.focus();
});
  /*Change Image's Plate*/
const imgBox = document.querySelector(".imgBox");
const btn = document.querySelector(".btn");

const foodData = {
  food_1: {
    title: "Grilled Chicken Platter",
    description: "A balanced meal featuring succulent grilled chicken fillets, fluffy white rice, seasoned beans, and a fresh garden salad with cherry tomatoes.",
    price: "$24.90"
  },
  food_2: {
    title: "Rainbow Detox Bowl",
    description: "A vibrant explosion of antioxidants! Featuring fresh broccoli florets, sweet mango slices, vine-ripened tomatoes, and a mix of antioxidant-rich berries.",
    price: "$18.50"
  },
  food_3: {
    title: "Oriental Tofu Bowl",
    description: "A protein-packed bowl with marinated grilled tofu, edamame beans, quail eggs, fresh corn, and crunchy red cabbage on a bed of greens.",
    price: "$27.00"
  }
};

btn.addEventListener("click", () => {
  imgBox.classList.toggle("active");
  btn.classList.toggle("active");
  btn.innerHTML = imgBox.classList.contains('active') ? "Back to Food <ion-icon name='arrow-back-circle-outline'></ion-icon>" : "Learn More <ion-icon name='search-circle-outline'></ion-icon>";
});

function changeImg(img) {
  const foodImg = document.querySelector(".food img");
  foodImg.src = `./assets/${img}.png`;

  const titleElement = document.querySelector(".description h3");
  const descElement = document.querySelector(".description p");
  const priceElement = document.querySelector(".description .price");

  if (foodData[img]) {
    titleElement.innerText = foodData[img].title;
    descElement.innerText = foodData[img].description;
    priceElement.innerText = foodData[img].price;
  }
}

    /*Menu Mobile*/
let menu = document.querySelector('.menu');
let menuIcon = document.querySelector('.menu ion-icon');
let navMobile = document.querySelector('.nav-mobile');

menu.onclick = function () {
  if (navMobile.style.opacity === "1") {
    navMobile.style.opacity = "0";
    navMobile.style.visibility = "hidden";
    navMobile.style.transform = "translateX(100%)";

    menuIcon.setAttribute('name', 'ellipsis-vertical-outline');
  } else {
    navMobile.style.opacity = "1";
    navMobile.style.visibility = "visible";
    navMobile.style.transform = "translateX(0)";

    menuIcon.setAttribute('name', 'close-outline');
  }
}

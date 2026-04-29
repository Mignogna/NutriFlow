const headerInput = document.querySelector(".search input");
const headerSearch = document.querySelector(".search");

headerSearch.addEventListener("click", () => {
  headerSearch.classList.toggle("active");
  headerInput.focus();
});

const imgBox = document.querySelector(".imgBox");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  imgBox.classList.toggle("active");
  btn.classList.toggle("active");
    btn.innerHTML = imgBox.classList.contains('active') ? "Back to Food" : "Learn More <ion-icon name='search-circle-outline'></ion-icon>";
});

function changeImg(img){
  const foodImg = document.querySelector(".food img");
  foodImg.src = `./assets/${img}.png`;
}

// Menu Mobile (Toggle)
let menu = document.querySelector('.menu');
let navMobile = document.querySelector('.nav-mobile');

menu.onclick = function() {
    if (navMobile.style.opacity === "1") {
        navMobile.style.opacity = "0";
        navMobile.style.visibility = "hidden";
        navMobile.style.transform = "translateX(100%)";
    } else {
        navMobile.style.opacity = "1";
        navMobile.style.visibility = "visible";
        navMobile.style.transform = "translateX(0)";
    }
}
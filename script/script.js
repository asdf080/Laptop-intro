// 다크모드
const greenColor = "#244655";
const lightGreen = "#c6ded8";
const mintLeaf = "#7bcb7b";

const darkBtn = document.querySelector("#theme");
darkBtn.addEventListener("click", () => {
  if (document.querySelector("#theme").checked) {
    for (let a of document.querySelectorAll(".bubbleApos, body")) {
      a.style.background = "#111";
    }
    document.querySelector("#headWrap").style.backgroundImage = 'url("../img/head2.png")';
    document.querySelector("#titWrap").style.color = "#f0f4f3";
    for (let a of document.querySelectorAll(".btnTxt, #popBrands a")) {
      a.style.color = lightGreen;
    }
    document.querySelector("#navBtm").style.background = greenColor;
    for (let a of document.querySelectorAll("#navBtm, #navBtm div, #navBtm i, section h3, .goodsTxtWrap, #togBrandWrap button, #popBrands article")) {
      a.style.color = "white";
    }
    for (let a of document.querySelectorAll(".secTit")) {
      a.style.color = mintLeaf;
    }
    for (let a of document.querySelectorAll("#popGoods li")) {
      a.style.border = "2px solid gray";
    }
  } else {
    for (let a of document.querySelectorAll("body, .bubbleApos, #navBtm")) {
      a.style.background = "";
    }
    for (let a of document.querySelectorAll("#titWrap, .btnTxt, #navBtm, #navBtm div, .secTit, #navBtm i, section h3, #popBrands a, .goodsTxtWrap, #togBrandWrap button, #popBrands article")) {
      a.style.color = "";
    }
    document.querySelector("#headWrap").style.backgroundImage = 'url("../img/headLg.png")';
    for (let a of document.querySelectorAll("#popGoods li")) {
      a.style.border = "none";
    }
  }
});

// 카드 슬라이드
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  loop: true,
});

// 브랜드 메뉴
let BrdArticles = document.querySelectorAll("#popBrands article");

function resetArt() {
  for (let a of BrdArticles) {
    a.style.display = "none";
    a.classList.remove("Scrovisible");
    a.classList.add("ScroHidden");
  }
}

function showArt(art) {
  art.style.display = "flex";
  setTimeout(() => {
    art.classList.remove("ScroHidden");
    art.classList.add("Scrovisible");
  }, 50);
}

document.querySelector("#brdBtn1").addEventListener("click", () => {
  resetArt();
  showArt(document.querySelector("#brdArt1"));
});

document.querySelector("#brdBtn2").addEventListener("click", () => {
  resetArt();
  showArt(document.querySelector("#brdArt2"));
});

document.querySelector("#brdBtn3").addEventListener("click", () => {
  resetArt();
  showArt(document.querySelector("#brdArt3"));
});

document.querySelector("#brdBtn4").addEventListener("click", () => {
  resetArt();
  showArt(document.querySelector("#brdArt4"));
});

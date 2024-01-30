// 다크모드
const greenColor = "#244655";
const lightGreen = "#c6ded8";
const mintLeaf = "#7bcb7b";
const navWhite = "#f9f9f9";

const darkBtn = document.querySelector("#theme");
darkBtn.addEventListener("click", () => {
  if (document.querySelector("#theme").checked) {
    for (let a of document.querySelectorAll(".bubbleApos, body")) {
      a.style.background = "#111";
    }
    document.querySelector("#navBtm").style.background = greenColor;
    for (let a of document.querySelectorAll("#navBtm a, #navBtm i")) {
      a.style.color = navWhite;
    }
    for (let a of document.querySelectorAll("#navBtm a")) {
      a.classList.add("darkHover");
    }
    document.querySelector(".headWrap").classList.add("darkBg");
    document.querySelector("#titWrap").style.color = "#f0f4f3";
    for (let a of document.querySelectorAll(".btnTxt, #popBrands a")) {
      a.style.color = lightGreen;
    }
    for (let a of document.querySelectorAll("section h3, .goodsTxtWrap, #togBrandWrap button, #popBrands article, #navBtmTxt p, #navBtmTxt div")) {
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
    for (let a of document.querySelectorAll("#titWrap, .btnTxt, .secTit, section h3, #popBrands a, .goodsTxtWrap, #togBrandWrap button, #popBrands article, #navBtm *, #navBtmTxt p, #navBtmTxt div")) {
      a.style.color = "";
    }
    for (let a of document.querySelectorAll("#navBtm a")) {
      a.classList.remove("darkHover");
    }
    document.querySelector(".headWrap").classList.remove("darkBg");
    for (let a of document.querySelectorAll("#popGoods li")) {
      a.style.border = "none";
    }
  }
});

// 커서
let mouseCursor = document.querySelector(".cursor");
let navBtm = document.querySelector("#navBtm");

// #navBtm에 mousemove 이벤트 리스너 추가
navBtm.addEventListener("mousemove", (e) => {
  // #navBtm 영역의 좌표
  let rect = navBtm.getBoundingClientRect();

  // 커서가 #navBtm 영역 내에 있는지 확인
  if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
    // #navBtm 내부일 때 커서를 보이게
    mouseCursor.style.opacity = "1";
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY + "px";
  } else {
    // #navBtm 외부일 때 숨기기
    mouseCursor.style.opacity = "0";
  }
});

// #navBtm에 li에 mouseover, mouseleave 이벤트 리스너 추가
navBtm.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseover", () => {
    if (document.querySelector("#theme").checked) {
      mouseCursor.classList.add("cursor-growBlack");
    } else mouseCursor.classList.add("cursor-grow");
  });
  link.addEventListener("mouseleave", () => {
    if (document.querySelector("#theme").checked) {
      mouseCursor.classList.remove("cursor-growBlack");
    } else mouseCursor.classList.remove("cursor-grow");
  });
});

// h1 제목
for (let h of document.querySelectorAll("#titWrap h1")) {
  h.classList.remove("h1Hidden");
}

// 말풍선, 섹션 제목
document.addEventListener("scroll", function () {
  let chat1 = document.querySelector(".chat1");
  if (chat1.getBoundingClientRect().top - window.innerHeight + 50 <= 0) {
    chat1.classList.remove("chatLe");
    document.querySelector(".topBtn").style.transform = "translateX(252px)";
  } else {
    chat1.classList.add("chatLe");
    document.querySelector(".topBtn").style.transform = "translateX(350px)";
  }
  let chat2 = document.querySelector(".chat2");
  if (chat2.getBoundingClientRect().top - window.innerHeight + 75 <= 0) {
    chat2.classList.remove("chatLe");
  } else chat2.classList.add("chatLe");
  let chat3 = document.querySelector(".chat3");
  if (chat3.getBoundingClientRect().top - window.innerHeight + 75 <= 0) {
    chat3.classList.remove("chatRi");
  } else chat3.classList.add("chatRi");

  for (let p of document.querySelectorAll(".scroHidden")) {
    if (p.getBoundingClientRect().top - window.innerHeight + 50 <= 0) {
      p.classList.add("scroVisible");
    } else {
      p.classList.remove("scroVisible");
    }
  }

  for (let b of document.querySelectorAll(".blurImg")) {
    if (b.getBoundingClientRect().top - window.innerHeight + 200 <= 0) {
      b.classList.remove("blur");
    } else {
      b.classList.add("blur");
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
    a.classList.remove("togVisible");
    a.classList.add("togHidden");
  }
}

function showArt(art) {
  art.style.display = "flex";
  setTimeout(() => {
    art.classList.remove("togHidden");
    art.classList.add("togVisible");
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

// 이미지 랜덤 선택
function one_Two() {
  return Math.random() < 0.5 ? 1 : 2;
}

var result = one_Two();
document.querySelector("#goTestArea img").src = `img/goTest${one_Two()}.png`;

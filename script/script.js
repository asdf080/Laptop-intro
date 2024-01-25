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

// 커서
let mouseCursor = document.querySelector(".cursor");
let navBtm = document.querySelector("#navBtm");
let navLinks = navBtm.querySelectorAll("li");

// #navBtm에 mousemove 이벤트 리스너 추가
navBtm.addEventListener("mousemove", function (e) {
  // #navBtm 영역의 좌표
  let rect = navBtm.getBoundingClientRect();

  // 마우스 커서가 #navBtm 영역 내에 있는지 확인
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
navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("cursor-grow");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("cursor-grow");
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

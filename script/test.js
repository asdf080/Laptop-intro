// 로티 애니메이션
document.addEventListener("DOMContentLoaded", () => {
  const mainSection = document.getElementById("main");
  const displayStyle = window.getComputedStyle(mainSection).display;

  if (displayStyle !== "block") {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";

    const lottiePlayer = document.createElement("dotlottie-player");
    lottiePlayer.setAttribute("src", "https://lottie.host/7f095fb7-93b3-43d8-ae32-25f708d3fe14/oMXFvBbato.json");
    lottiePlayer.setAttribute("background", "transparent");
    lottiePlayer.setAttribute("speed", "1.2");
    lottiePlayer.style.width = "500px";
    lottiePlayer.style.height = "500px";
    lottiePlayer.setAttribute("direction", "1");
    lottiePlayer.setAttribute("playMode", "normal");
    lottiePlayer.setAttribute("loop", "");
    lottiePlayer.setAttribute("autoplay", "");

    mainSection.insertBefore(script, mainSection.firstChild);
    mainSection.insertBefore(lottiePlayer, mainSection.firstChild);
  }
});

document.querySelector("#Btn1").addEventListener("click", () => btnClick("Btn1"));

const Wrap1 = document.querySelector(".qnaWrap1");
// 메인화면 버튼
document.querySelector("#main button").addEventListener("click", () => {
  document.querySelector("#main").classList.add("downHide");
  // 메인화면 제거
  setTimeout(() => {
    document.querySelector("#main").remove();
    document.querySelector("body").style.background = "#f0f4f3";
  }, 300);
  // 질문창 불러오기
  setTimeout(() => {
    Wrap1.classList.add("upShow");
    Wrap1.style.display = "flex";
  }, 350);
});

const qnaAWrap = document.querySelector(".qnaAWrap");
let resultStr = "";

// 첫번째 질문창 넘기기
function updatePage1(option) {
  resultStr += option;
  Wrap1.classList.remove("upShow");
  Wrap1.classList.add("downHide");
  setTimeout(() => {
    Wrap1.remove();
  }, 260);
  setTimeout(() => {
    addQna(2, "가격과 무게, 어느 쪽이 중요하신가요?", "가성비 좋고 저렴한 제품이 좋아요.", "휴대하기 간편한 가벼운 제품이 좋아요.", "fou", "fif");
    document.querySelector(".qnaWrap2").classList.add("upShow");
    document.querySelector(".qnaWrap2").style.display = "flex";
    document.querySelector("#Btn2").addEventListener("click", () => btnClick("Btn2"));
  }, 300);
}

// 두번째 질문창 넘기기
function updatePage2(option) {
  let Wrap2 = document.querySelector(".qnaWrap2");
  resultStr += option;
  Wrap2.classList.remove("upShow");
  Wrap2.classList.add("downHide");
  setTimeout(() => {
    Wrap2.remove();
  }, 260);
  setTimeout(() => {
    addQna(3, "특별히 원하는 기능이 있으신가요?", "터치펜, 터치스크린 등 특화 기능을 원해요.", "기본 기능에 충실하면 좋겠어요.", "six", "sev");
    document.querySelector(".qnaWrap3").classList.add("upShow");
    document.querySelector(".qnaWrap3").style.display = "flex";
    document.querySelector("#Btn3").addEventListener("click", () => btnClick("Btn3"));
  }, 300);
}

// 세번째 질문창 넘기기(결과창 띄우기)
function updatePage3(option) {
  let Wrap3 = document.querySelector(".qnaWrap3");
  resultStr += option;
  Wrap3.classList.remove("upShow");
  Wrap3.classList.add("downHide");
  setTimeout(() => {
    Wrap3.remove();
  }, 260);
}

// 새 질문창 만들기
function addQna(num, tit, cont1, cont2, id1, id2) {
  const qnaWrap = {}; // 객체를 생성합니다.
  qnaWrap[num] = document.createElement("article");
  qnaWrap[num].className = `qnaWrap${num}`;
  qnaWrap[num].classList.add("qnaWrap");
  qnaWrap[num].style.display = "none";

  // 왼쪽
  const qnaLe = document.createElement("div");
  qnaLe.className = "qnaLe";
  // 왼쪽 제목
  const qTitle = document.createElement("div");
  qTitle.className = "qTitle";
  const titleH3 = document.createElement("h3");
  titleH3.textContent = tit;
  qTitle.appendChild(titleH3);
  // 왼쪽이미지
  const qnaImage = document.createElement("img");
  qnaImage.src = `img/qna${num}.webp`;
  qnaImage.alt = "사용자이미지";

  qnaLe.appendChild(qTitle);
  qnaLe.appendChild(qnaImage);

  // 오른쪽
  const qnaRi = document.createElement("div");
  qnaRi.className = "qnaRi";
  // 오른쪽 선택지
  const qnaAWrap = document.createElement("div");
  qnaAWrap.className = "qnaAWrap";
  [cont1, cont2].forEach((text, index) => {
    const input = document.createElement("input");
    input.type = "radio";
    input.id = [id1, id2][index];
    input.name = "qna3";

    const label = document.createElement("label");
    label.htmlFor = input.id;
    label.className = "qnaA";
    label.textContent = text;

    qnaAWrap.appendChild(input);
    qnaAWrap.appendChild(label);
  });
  // 오른쪽 버튼
  const button = document.createElement("button");
  button.id = `Btn${num}`;
  button.textContent = "다음 →";

  qnaRi.appendChild(qnaAWrap);
  qnaRi.appendChild(button);

  // 왼쪽, 오른쪽 추가
  qnaWrap[num].appendChild(qnaLe);
  qnaWrap[num].appendChild(qnaRi);

  // qnaWrap 추가
  document.querySelector("#qna").appendChild(qnaWrap[num]);

  // 선택시 경고 문구 삭제
  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      let warning = document.querySelector(".redWord");
      if (warning) {
        warning.remove();
      }
    });
  });
}

// 선택시 경고 문구 삭제
document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    let warning = document.querySelector(".redWord");
    if (warning) {
      warning.remove();
    }
  });
});

// 다음 버튼 클릭
function btnClick(buttonId) {
  let selected = "";
  let wrapSelector = "";
  if (buttonId === "Btn1") {
    wrapSelector = ".qnaWrap1";
    if (document.querySelector("#fir").checked) selected = "A";
    else if (document.querySelector("#sec").checked) selected = "B";
    else if (document.querySelector("#thi").checked) selected = "C";
  } else if (buttonId === "Btn2") {
    wrapSelector = ".qnaWrap2";
    if (document.querySelector("#fou").checked) selected = "1";
    else if (document.querySelector("#fif").checked) selected = "2";
  } else if (buttonId === "Btn3") {
    wrapSelector = ".qnaWrap3";
    if (document.querySelector("#six").checked) selected = "a";
    else if (document.querySelector("#sev").checked) selected = "b";
  }

  if ("A" <= selected && selected <= "C") {
    updatePage1(selected);
    selected = null;
  } else if ("1" <= selected && selected < "3") {
    updatePage2(selected);
    selected = null;
  } else if ("a" <= selected && selected < "c") {
    updatePage3(selected);
    console.log(resultStr);
  } else {
    let redWord = document.querySelector(".redWord");
    if (!redWord) {
      let redDiv = document.createElement("div");
      redDiv.className = "redWord";
      redDiv.textContent = "옵션을 선택해주세요.";
      document.querySelector(`${wrapSelector} .qnaAWrap`).appendChild(redDiv);
    }
  }
}

// 결과 데이터
const resultObj = {
  A1a: {
    name: "아이디어패드 Flex5",
    brand: "레노버",
    desc: `Flex5는 다양한 방식으로 생산성을 발휘합니다. 일반 노트북 모드로 생산적인 업무가 가능하며, 스탠드 모드에서는 터치스크린을 통해 더욱 편리한 협업이 가능합니다.`,
    price: "876,800",
    link: "https://www.lenovo.com/kr/ko/p/laptops/ideapad/ideapad-flex-series/ideapad-flex-5-gen-8-(16-inch-amd)/82xycto1wwkr1",
  },
  A1b: {
    name: "14-em0050AU",
    brand: "HP",
    desc: `어떤 상황에서도 신뢰할 수 있는 HP 14 노트북. 바다에서 수거한 플라스틱, PCR(Post-Consumer Recycled)과 같은 지속 가능한 방식으로 생산된 소재를 사용합니다.`,
    price: "679,000",
    link: "https://www.hp.com/kr-ko/shop/laptops-tablets/hp-laptop-14-em0050au-7q713pa.html?facetref=3ce10af3cdd3583c",
  },
  A2a: {
    name: "그램360 14",
    brand: "LG",
    desc: `당신의 창작에 날개를 달아드립니다. 노트 필기, 자유로운 드로잉, 작업 환경에 맞추어 펜 기능을 설정할 수 있는
    와콤펜 최적의 소프트웨어를 활용해보세요.`,
    price: "1,656,200",
    link: "https://www.lge.co.kr/notebook/14td90r-gx56k",
  },
  A2b: {
    name: "그램 40.6cm",
    brand: "LG",
    desc: `여전히 초경량, 그램은 역시 그램입니다. 한 손으로 들 수 있어 언제나 함께할 수 있습니다.`,
    price: "1,190,000",
    link: "https://www.lge.co.kr/notebook/16z90q-gafwk",
  },
};
resultObj.B1a = resultObj.A1a;
resultObj.B1b = resultObj.A1b;
resultObj.B2a = resultObj.A2a;
resultObj.B2b = resultObj.A2b;
resultObj.C1a = resultObj.A1a;
resultObj.C1b = resultObj.A1b;
resultObj.C2a = resultObj.A2a;
resultObj.C2b = resultObj.A2b;

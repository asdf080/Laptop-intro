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

const Wrap1 = document.querySelector(".qnaWrap1");
const Wrap2 = document.querySelector(".qnaWrap2");

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
    addQna(2, "가격과 무게, 둘 중 뭐가 더 중요하신가요?", "가성비 좋고 저렴한 제품이 좋아요.", "휴대하기 간편한 제품이 좋아요.", "fou", "fif");
    document.querySelector(".qnaWrap2").classList.add("upShow");
    document.querySelector(".qnaWrap2").style.display = "flex";
    document.querySelector("#Btn2").addEventListener("click", () => btnClick("Btn2"));
  }, 300);
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
  qnaImage.src = "img/qna1.webp";
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
}

// 선택시 경고 문구 삭제
document.querySelectorAll('.qnaRi input[type="radio"]').forEach((radio) => {
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
  }

  if ("A" <= selected && selected <= "C") {
    updatePage1(selected);
    selected = null;
    console.log(resultStr);
  } else if ("1" <= selected && selected <= "3") {
    console.log("a");
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

document.querySelector("#Btn1").addEventListener("click", () => btnClick("Btn1"));

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
function updatePage(option) {
  resultStr += option;
  Wrap1.classList.remove("upShow");
  Wrap1.classList.add("downHide");
  setTimeout(() => {
    Wrap1.remove();
  }, 260);
  setTimeout(() => {
    addQna2();
    document.querySelector(".qnaWrap2").classList.add("upShow");
    document.querySelector(".qnaWrap2").style.display = "flex";
    document.querySelector("#secBtn").addEventListener("click", () => btnClick("secBtn"));
  }, 300);
  document.querySelectorAll('input[name="qna1"]').forEach((radio) => {
    radio.checked = false;
  });
}

// 두번째 질문창 만들기
function addQna2() {
  const qnaWrap2 = document.createElement("article");
  qnaWrap2.className = "qnaWrap2";
  qnaWrap2.classList.add("qnaWrap");
  qnaWrap2.style.display = "none";

  // 왼쪽
  const qnaLe = document.createElement("div");
  qnaLe.className = "qnaLe";
  // 왼쪽 제목
  const qTitle = document.createElement("div");
  qTitle.className = "qTitle";
  const titleH3 = document.createElement("h3");
  titleH3.textContent = "가격과 무게, 어떤 것이 더 중요하다고 생각하시나요?";
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
  ["가볍게 들 수 있는 제품이 좋아요.", "부담없이 쓸 수 있는 저렴한 제품이 좋아요."].forEach((text, index) => {
    const input = document.createElement("input");
    input.type = "radio";
    input.id = ["fou", "fif"][index];
    input.name = "qna2";

    const label = document.createElement("label");
    label.htmlFor = input.id;
    label.className = "qnaA";
    label.textContent = text;

    qnaAWrap.appendChild(input);
    qnaAWrap.appendChild(label);
  });
  // 오른쪽 버튼
  const button = document.createElement("button");
  button.id = "secBtn";
  button.textContent = "다음 →";

  qnaRi.appendChild(qnaAWrap);
  qnaRi.appendChild(button);

  // 왼쪽, 오른쪽 추가
  qnaWrap2.appendChild(qnaLe);
  qnaWrap2.appendChild(qnaRi);

  // qnaWrap 추가
  document.querySelector("#qna").appendChild(qnaWrap2);
}

// 세번째 질문창 만들기
function addQna3() {
  const qnaWrap3 = document.createElement("article");
  qnaWrap3.className = "qnaWrap3";
  qnaWrap3.classList.add("qnaWrap");
  qnaWrap3.style.display = "none";

  // 왼쪽
  const qnaLe = document.createElement("div");
  qnaLe.className = "qnaLe";
  // 왼쪽 제목
  const qTitle = document.createElement("div");
  qTitle.className = "qTitle";
  const titleH3 = document.createElement("h3");
  titleH3.textContent = "특별히 원하는 기능이 있으신가요?";
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
  ["터치펜, 터치 스크린 등 특화 기능이 필요해요.", "기본 기능에 충실한 제품이 좋아요."].forEach((text, index) => {
    const input = document.createElement("input");
    input.type = "radio";
    input.id = ["six", "sev"][index];
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
  button.id = "thiBtn";
  button.textContent = "다음 →";

  qnaRi.appendChild(qnaAWrap);
  qnaRi.appendChild(button);

  // 왼쪽, 오른쪽 추가
  qnaWrap3.appendChild(qnaLe);
  qnaWrap3.appendChild(qnaRi);

  // qnaWrap 추가
  document.querySelector("#qna").appendChild(qnaWrap3);
}

// 경고 문구
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
  let selected = null;
  let wrapSelector = "";
  if (buttonId === "firBtn") {
    wrapSelector = ".qnaWrap1";
    if (document.querySelector("#fir").checked) selected = "A";
    else if (document.querySelector("#sec").checked) selected = "B";
    else if (document.querySelector("#thi").checked) selected = "C";
  } else if (buttonId === "secBtn") {
    wrapSelector = ".qnaWrap2";
    if (document.querySelector("#fou").checked) selected = "1";
    else if (document.querySelector("#fif").checked) selected = "2";
  }

  if (selected) {
    updatePage(selected);
    selected = null;
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

document.querySelector("#firBtn").addEventListener("click", () => btnClick("firBtn"));

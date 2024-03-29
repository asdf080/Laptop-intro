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
    lottiePlayer.style.width = "450px";
    lottiePlayer.style.height = "450px";
    lottiePlayer.setAttribute("direction", "1");
    lottiePlayer.setAttribute("playMode", "normal");
    lottiePlayer.setAttribute("loop", "");
    lottiePlayer.setAttribute("autoplay", "");

    mainSection.insertBefore(script, mainSection.firstChild);
    mainSection.insertBefore(lottiePlayer, mainSection.firstChild);
  }
});
// 여기까지 로티 애니메이션

// 메인태그 삭제시 스크롤 가능
var observerCallback = function (mutationsList, observer) {
  for (var mutation of mutationsList) {
    if (mutation.type === "childList") {
      if (document.querySelector("#main")) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "";
      }
    }
  }
};
var observer = new MutationObserver(observerCallback);
var config = { attributes: false, childList: true, subtree: true };
observer.observe(document.body, config);

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
    document.querySelector("#qna").remove();
  }, 280);
  setTimeout(() => {
    addResult(resultStr);
    document.querySelector(".resultWrap").classList.add("upShow");
    document.querySelector(".resultWrap").style.display = "block";
  }, 300);
}

// 새 질문창 만들기
function addQna(num, tit, cont1, cont2, id1, id2) {
  const htmlContent = `
    <article class="qnaWrap${num} qnaWrap" style="display: none;">
      <div class="qnaLe">
        <div class="qTitle">
          <h3>${tit}</h3>
        </div>
        <img src="img/qna${num}.png" alt="사용자이미지">
      </div>
      <div class="qnaRi">
        <div class="qnaAWrap">
          <input type="radio" id="${id1}" name="qna3">
          <label for="${id1}" class="qnaA">${cont1}</label>
          <input type="radio" id="${id2}" name="qna3">
          <label for="${id2}" class="qnaA">${cont2}</label>
        </div>
        <button id="Btn${num}">다음 →</button>
      </div>
    </article>
  `;

  document.querySelector("#qna").insertAdjacentHTML("beforeend", htmlContent);

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

// 결과창 만들기
function addResult(str) {
  const result = resultObj[str];
  const htmlContent = `
    <section id="result">
      <div class="goHome">
        <a href="index.html">
          <i class="fa-solid fa-house" style="color: #244655"></i>
          <div>홈페이지</div>
        </a>
      </div>
      <article class="resultWrap" style="display: none;">
        <h3>당신에게 맞는 노트북은?</h3>
        <div class="resultWrapInner">
          <img src="img/result_${str}.png" alt="img">
          <div class="resultNoteWrap">
            <h5>${result.brand}</h5>
            <h4>${result.name}</h4>
            <p>${result.price}원</p>
            <div>${result.desc}</div>
            <div class="btnWrap">
                <a id="reload" href="#">
                  <div><i class="fa-solid fa-rotate"></i></div>
                  <div>다시하기</div>
                </a>
              <a href="${result.link}" target="_blank"><button>자세히 보기</button></a>
            </div>
          </div>
        </div>
      </article>
    </section>
  `;

  document.body.insertAdjacentHTML("afterbegin", htmlContent);

  // 다시하기 버튼 효과 추가
  let reload = document.querySelector("#reload");
  reload.addEventListener("click", () => {
    location.reload();
  });
  reload.addEventListener("mouseover", () => {
    document.querySelector(".fa-rotate").classList.add("fa-spin");
  });

  reload.addEventListener("mouseout", () => {
    document.querySelector(".fa-rotate").classList.remove("fa-spin");
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

console.log(`
      ROCKET SCIENCE

            ##
           #  #
          #    #
         #      #
        #   ##   #
       #  #    #  #
       #  #    #   #
     ##     ##     ##
    # #            # #
   #  #            #  #
  #   #            #   #
 #    #            #    #
 #  # #            # #  #
 # #   #          #   # #
 #      # # # # ##      #

         #      #
          #    #
           #  #
            ##

`)

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

document.querySelector("#main button").addEventListener("click", () => {
  document.querySelector("#main").classList.add("downHide");
  setTimeout(() => {
    document.querySelector("#main").style.display = "none";
  }, 300);
});

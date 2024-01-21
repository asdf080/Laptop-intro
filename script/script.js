// const html = document.querySelector("html");

// html.classList.add("bg-dark");

// document.querySelector("input").addEventListener("change", (event) => {
//   bgSwitch(event);
// });

// const bgSwitch = (event) => {
//   if (event.target.checked) {
//     // html.classList.add("bg-dark");
//   } else {
//     // html.classList.remove("bg-dark");
//   }
// }

let BrdArticles = document.querySelectorAll("#popBrands article");

function resetArt() {
  for (let a of BrdArticles) {
    a.style.display = "none";
    a.classList.remove("Scrovisible");
    a.classList.add("ScroHidden");
  }
}

function showArt(art) {
  art.style.display = "block";
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

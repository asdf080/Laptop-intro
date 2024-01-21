var brandWrap = document.getElementById("togBrandWrap");
var line = document.createElement("div");
line.classList.add("line");
brandWrap.appendChild(line);

var activeButton = brandWrap.querySelector(".active");
var pos = 0;
var wid = 0;

if (activeButton) {
  pos = activeButton.getBoundingClientRect().left - brandWrap.getBoundingClientRect().left;
  wid = activeButton.offsetWidth;
  line.style.left = pos + "px";
  line.style.width = wid + "px";
}

var buttons = brandWrap.getElementsByTagName("button");

Array.from(buttons).forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (!this.classList.contains("active") && !brandWrap.classList.contains("animate")) {
      brandWrap.classList.add("animate");

      Array.from(buttons).forEach(function (btn) {
        btn.classList.remove("active");
      });

      var position = this.getBoundingClientRect().left - brandWrap.getBoundingClientRect().left;
      var width = this.offsetWidth;

      if (position >= pos) {
        line.style.width = position - pos + width + "px";
        setTimeout(function () {
          line.style.width = width + "px";
          line.style.left = position + "px";
          setTimeout(function () {
            brandWrap.classList.remove("animate");
          }, 150);
        }, 300);
      } else {
        line.style.left = position + "px";
        line.style.width = pos - position + wid + "px";
        setTimeout(function () {
          line.style.width = width + "px";
          setTimeout(function () {
            brandWrap.classList.remove("animate");
          }, 150);
        }, 300);
      }

      this.classList.add("active");
      pos = position;
      wid = width;
    }
  });
});

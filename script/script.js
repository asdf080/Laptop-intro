// 다크모드
const greenColor = "#244655";
const lightGreen = "#f0f4f3";
const mintLeaf = "#7bcb7b";

const darkBtn = document.querySelector("#theme");
darkBtn.addEventListener("click", () => {
  if (document.querySelector("#theme").checked) {
    for (let a of document.querySelectorAll(".bubbleApos, body")) {
      a.style.background = "#111";
    }
    document.querySelector("#headWrap").style.backgroundImage = 'url("../img/head2.png")';
    document.querySelector("#titWrap").style.color = "#f0f4f3";
    for (let a of document.querySelectorAll(".btnTxt")) {
      a.style.color = lightGreen;
    }
    document.querySelector("#navBtm").style.background = greenColor;
    for (let a of document.querySelectorAll("#navBtm, #navBtm div, #navBtm i, section h3")) {
      a.style.color = "white";
    }
    for (let a of document.querySelectorAll(".secTit")) {
      a.style.color = mintLeaf;
    }
  } else {
    for (let a of document.querySelectorAll("body, .bubbleApos, #navBtm")) {
      a.style.background = "";
    }
    for (let a of document.querySelectorAll("#titWrap, .btnTxt, #navBtm, #navBtm div, .secTit, #navBtm i, section h3")) {
      a.style.color = "";
    }
    document.querySelector("#headWrap").style.backgroundImage = 'url("../img/headLg.png")';
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

// 지도
var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

var mapContainer = document.querySelector("#divMap"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(35.865496405, 128.593444283), // 지도의 중심좌표
    level: 5, // 지도의 확대 레벨
  };

// 지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places();

// 키워드로 장소를 검색합니다
ps.keywordSearch("대구 전자제품", placesSearchCB);

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB(data, status, pagination) {
  if (status === kakao.maps.services.Status.OK) {
    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
    // LatLngBounds 객체에 좌표를 추가합니다
    var bounds = new kakao.maps.LatLngBounds();

    for (var i = 0; i < data.length; i++) {
      displayMarker(data[i]);
      bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
    }

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    map.setBounds(bounds);
  }
}

var imageSrc = "../img/marker1.png", // 마커이미지의 주소입니다
  imageSize = new kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
  imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
  // 마커를 생성하고 지도에 표시합니다
  var marker = new kakao.maps.Marker({
    image: markerImage,
    map: map,
    position: new kakao.maps.LatLng(place.y, place.x),
  });

  // 마커에 클릭이벤트를 등록합니다
  kakao.maps.event.addListener(marker, "click", function () {
    // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
    infowindow.setContent('<div style="padding:5px;font-size:16px;">' + place.place_name + "</div>");
    infowindow.open(map, marker);
  });
}

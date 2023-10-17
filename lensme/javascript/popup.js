// 필요한 요소들을 가져옴
var popup = document.getElementById("popup");
var closeButton = document.getElementById("closeButton");

// 일정 시간(3초) 후에 팝업창을 띄움
setTimeout(function () {
  popup.style.display = "block";
}, 3000); // 3000 밀리초 = 3초

// 닫기 버튼을 클릭하면 팝업창을 닫음
closeButton.addEventListener("click", function () {
  popup.style.display = "none";
});
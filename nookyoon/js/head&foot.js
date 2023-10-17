//메뉴 호버시 영어 -> 한글 변환
const navLinks = document.querySelectorAll(".nav-link");
const categoryLists = document.querySelectorAll(".category_list");

navLinks.forEach((navLink) => {
  const navP = navLink.querySelector(".nav-p");
  const spans = navP.querySelectorAll("span");

  navLink.addEventListener("mouseenter", () => {
    spans.forEach((span) => {
      span.style.transform = "translateY(-24px)";
    });
  });

  navLink.addEventListener("mouseleave", () => {
    spans.forEach((span) => {
      span.style.transform = "none";
    });
  });
});

categoryLists.forEach((categoryList) => {
  //소메뉴 호버시에도 변환 유지
  const navP = categoryList.previousElementSibling.querySelector(".nav-p");
  const spans = navP.querySelectorAll("span");
  //previousElementSibling -> 부모요소 선택
  categoryList.addEventListener("mouseenter", () => {
    spans.forEach((span) => {
      span.style.transform = "translateY(-24px)";
    });
  });

  categoryList.addEventListener("mouseleave", () => {
    spans.forEach((span) => {
      span.style.transform = "none";
    });
  });
});
//
document.addEventListener("DOMContentLoaded", function () {
  const menuClick = document.querySelector(".menu_click");
  const menuIcon = menuClick.querySelector(".menu-icon");
  const closeIcon = menuClick.querySelector(".close-icon");
  const menuWrap = document.querySelector(".menu_wrap");
  const btnControl = menuWrap.querySelector(".btn-control");

  menuClick.addEventListener("click", function () {
    menuClick.classList.toggle("clicked"); // clicked 클래스 토글
    menuWrap.classList.toggle("show"); // .menu_wrap에 show 클래스 토글

    // 아이콘과 닫기 아이콘의 위치 변경을 위한 클래스 토글
    if (menuClick.classList.contains("clicked")) {
      menuIcon.style.transform = "translateY(-10px)";
      menuIcon.style.opacity = "0";
      closeIcon.style.transform = "translateY(0)";
      closeIcon.style.opacity = "1";
    } else {
      menuIcon.style.transform = "translateY(0)";
      menuIcon.style.opacity = "1";
      closeIcon.style.transform = "translateY(20px)";
      closeIcon.style.opacity = "0";
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const sch = document.querySelector(".sch");
  const searchmenu = document.querySelector(".search_menu");
  const menusearch = document.querySelector(".menu-search");

  sch.addEventListener("click", function () {
    sch.classList.toggle("clicked");
    searchmenu.classList.toggle("search-menu-open");
  });

  searchmenu.addEventListener("click", function () {
    if (menusearch.classList.toggle("clicked")) {
      searchmenu.classList.contains("search-menu-open");
    }
    else {
      searchmenu.classList.remove("search-menu-open");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const msch = document.querySelector(".m-sch");
  const msearchmenu = document.querySelector(".m-search_menu");
  const mmenusearch = document.querySelector(".m-menu-search");

  msch.addEventListener("click", function () {
    msch.classList.toggle("clicked");
    msearchmenu.classList.toggle("m-search-menu-open");
  });

  msearchmenu.addEventListener("click", function () {
    if (mmenusearch.classList.toggle("clicked")) {
      msearchmenu.classList.contains("m-search-menu-open");
    }
    else {
      msearchmenu.classList.remove("m-search-menu-open");
    }
  });
});




var topButton = document.querySelector(".top_btn");

// .top_btn을 클릭할 때 페이지 맨 위로 스크롤하는 함수를 정의
topButton.addEventListener("click", function (event) {
event.preventDefault(); // 기본 링크 동작을 중단

// 스크롤을 맨 위로 이동시키는 애니메이션
var scrollToTop = window.setInterval(function () {
var position = window.pageYOffset;
if (position > 0) {
    window.scrollTo(0, position - 20); // 스크롤 속도 및 간격을 조정
    } else {
    window.clearInterval(scrollToTop); // 맨 위에 도달하면 애니메이션을 중지
    }
  }, 5); // 매 5밀리초마다 스크롤 이벤트를 발생
});

document.addEventListener("DOMContentLoaded", function () {
  const topButton = document.querySelector(".top_btn");
  
  // top 버튼의 가시성을 전환하는 함수
  function toggleTopButtonVisibility() {
    if (window.scrollY > 100) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }

  // 스크롤 이벤트를 듣고, 스크롤 할 때마다 가시성을 검사
  window.addEventListener("scroll", toggleTopButtonVisibility);

  // 초기 페이지 로드 시에도 가시성을 검사
  toggleTopButtonVisibility();
});

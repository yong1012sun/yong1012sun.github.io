//상단바 fixed
// const header = document.getElementById("main_header2");
// const body = document.body;
// let prevScrollPos = window.pageYOffset;

// window.addEventListener("scroll", () => {
//   const currentScrollPos = window.pageYOffset;

//   if (prevScrollPos > currentScrollPos) {
//     header.classList.remove("hidden");
//     body.style.paddingTop = "140px";
//   } else {
//     header.classList.add("hidden");
//     body.style.paddingTop = "0";
//   }
const header = document.getElementById("main_header2");
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.classList.remove("header_fixed_tran");
  } else {
    header.classList.add("header_fixed_tran");
  }

  prevScrollPos = currentScrollPos;
});
//메뉴 호버시 영어 -> 한글 변환
const navLinks = document.querySelectorAll(".nav-link");
const categoryLists = document.querySelectorAll(".category_list");

navLinks.forEach((navLink) => {
  const navP = navLink.querySelector(".nav-p");
  const spans = navP.querySelectorAll("span");

  navLink.addEventListener("mouseenter", () => {
    spans.forEach((span) => {
      span.style.transform = "translateY(-19px)";
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
      span.style.transform = "translateY(-19px)";
    });
  });

  categoryList.addEventListener("mouseleave", () => {
    spans.forEach((span) => {
      span.style.transform = "none";
    });
  });
});
//검색창
document.addEventListener("DOMContentLoaded", function () {
  const schClick = document.querySelector(".sch_click");
  const searchIcon = schClick.querySelector(".search-icon");
  const closeIcon = schClick.querySelector(".close-icon");
  const schWrap = document.querySelector(".sch_wrap");
  const btnControl = schWrap.querySelector(".btn-control");

  schClick.addEventListener("click", function () {
    schClick.classList.toggle("clicked"); // clicked 클래스 토글
    schWrap.classList.toggle("show"); // .sch_wrap에 show 클래스 토글

    // 검색 아이콘과 닫기 아이콘의 위치 변경을 위한 클래스 토글
    if (schClick.classList.contains("clicked")) {
      searchIcon.style.transform = "translateY(-10px)";
      searchIcon.style.opacity = "0";
      closeIcon.style.transform = "translateY(0)";
      closeIcon.style.opacity = "1";
    } else {
      searchIcon.style.transform = "translateY(0)";
      searchIcon.style.opacity = "1";
      closeIcon.style.transform = "translateY(10px)";
      closeIcon.style.opacity = "0";
    }
  });

  // 검색 버튼 클릭 시 .sch_wrap 감추기
  btnControl.addEventListener("click", function () {
    schClick.classList.remove("clicked");
    schWrap.classList.remove("show");
    searchIcon.style.transform = "translateY(10px)";
    searchIcon.style.opacity = "1";
    closeIcon.style.transform = "translateY(10px)";
    closeIcon.style.opacity = "0";
  });
});
//메인픽 슬라이드
var swiper = new Swiper(".pickSwiper", {
  slidesPerView: 2.2,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  navigation: {
    //버튼
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//베스트 아이템
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  autoplay: {
    //자동 넘기기
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 50,
    },
    1459: {
      slidesPerView: 5.5,
      spaceBetween: 50,
    },
  },
});

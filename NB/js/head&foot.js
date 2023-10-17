$(document).ready(function () { //문서가 준비되면 함수 실행
  let fixhead = $(".fixhead").offset(); // 변수 선언
  $(window).scroll(function () { // 윈도우가 스크롤 될 때 실행
    if ($(document).scrollTop() > fixhead.top) { //.fixhead의 top이 스크롤의 top보다 작을 때 실행
      $(".fixhead").addClass("fixed");
    } else { //이 경우 제외할 때
      $(".fixhead").removeClass("fixed"); //fixed 제거
    }
  });
});



$(function () { 
  let btnLayerClose02 = document.getElementsByClassName("btnLayerClose02"); //변수선언
  let layerTopWrap = document.getElementsByClassName("layerTopWrap"); //변수선언
  $(btnLayerClose02).click(function () { //버튼을 클릭할 때
      $(".layerTopWrap").addClass("display-n"); //박스 제거
  });
});

//부드럽게 나타나게 하려면
// $(function () {
//   $(".submenu").css({ display: "none" }); //서브메뉴 안보이게

//   $(".menu ul li,.submenu").hover( //후버했을 때
//     function () { //실행
//       let i = $(this).index();
//       console.log(i);
//       $(".submenu").eq(i).siblings().css({ display: "none" });
//       $(".submenu").eq(i).stop().slideDown();
//       $(".menu ul li").eq(i).find("a").addClass("on");
//     },
//     function () {
//       $(".submenu").stop().slideUp();
//       $(".menu ul li a").removeClass("on");
//     }
//   );
// });


//딱딱하게 나타나게 하려면
$(function () {
  $(".submenu").css({ display: "none" }); // submenu 초기에 숨김 상태로 설정
  $(".category_box").css({ display: "none" }); // category_box 초기에 숨김 상태로 설정

  // 메뉴 및 서브메뉴에 hover 이벤트 핸들러 추가
  $(".menu ul li:not(.nav-nonecate), .submenu").hover(
    function () {
      let i = $(this).index();
      $(".submenu").eq(i).siblings().css({ display: "none" }); // 다른 submenu는 숨김
      $(".submenu").eq(i).css({ display: "block" }); // 선택한 submenu 나타나기
      if (!$(this).hasClass("nav-nonecate")) { 
        $(".dimm_gnb").css({ display: "block" });
        $(".header .gnb .menu > ul > li a").removeClass("on");
        $(".header .gnb .menu > ul > li").eq(i).find('a').addClass("on");
      }
    },
    function () {
      $(".submenu").css({ display: "none" }); // submenu 숨기기
      $(".dimm_gnb").css({ display: "none" });
      $(".header .gnb .menu > ul > li a").removeClass("on");
    }
  );

  // btn_srch에 hover 이벤트 핸들러 추가
  $(".btn_srch").hover(
    function () {
      $(".category_box").css({ display: "block" }); // 카테고리 박스 나타나기
      $(".dimm_gnb").css({ display: "block" });
    },
    function () {
      $(".category_box").css({ display: "block" }); // 마우스를 category_box로 이동해도 계속 나타나도록
    }
  );

  // category_box에 hover 이벤트 핸들러 추가
  $(".category_box").hover(
    function () {
      // 마우스가 category_box 내부에 있을 때는 유지
      $(this).css({ display: "block" });
    },
    function () {
      $(this).css({ display: "none" }); // category_box를 벗어나면 숨김
      $(".dimm_gnb").css({ display: "none" });
    }
  );
});



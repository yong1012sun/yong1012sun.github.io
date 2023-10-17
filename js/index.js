$(function () {
    let x_posi = 0;
    let y_posi = 0;
    let x_current = -50;
    let y_current = -50;
    let masksize = 50;
    let size_current = 0;
    let acc = 0.11; //작은 원의 속도 방향
    let acc2 = 0.15; //작은 원에서 큰 원으로 변하는 속도
    $(document).mousemove(function (e) {
      x_posi = e.pageX;
      y_posi = e.pageY;
      calEase();
      // $(".start_btn").css({ color: "#fff" });
    });
    function calEase() {
      x_current = x_current + (x_posi - x_current) * acc;
      y_current = y_current + (y_posi - y_current) * acc;
      size_current = size_current + (masksize - size_current) * acc2;
      $(".maskLayer").css({
        "--mask-size": size_current + "px",
        "--mask-x": x_current + "px",
        "--mask-y": y_current + "px",
      });
    }
    $(".hoverLayer").hover(
      function () {
        masksize = 270;
        $(".start_btn").css({ zIndex: "999" });
        // $(".start_btn").css({ zIndex: "999" });
      },
      function () {
        masksize = 100;
        //$(".start_btn").css({ color: "#fff" });
      }
    );
});
  


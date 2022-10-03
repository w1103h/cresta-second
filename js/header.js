/* ヘッダー：途中から背景色を入れる */
$(window).scroll(function () {
  if (!$(".bl_toggleBtn").hasClass("is_close")) {
    if ($(window).height() < $(window).scrollTop()) {
      $(".ly_header").addClass("ly_header__bg");
    } else {
      $(".ly_header").removeClass("ly_header__bg");
    }
  }
});

/* トグルボタン制御 */
$(".bl_toggleBtn").click(function () {
  $(this).toggleClass("is_close");
  $(".bl_headerNav").toggleClass("is_fade");
  $("body").toggleClass("is_noscroll");
});

/* メニューのリンクが押下されたときに、ナビゲーションを隠す */
$(".bl_headerNav_link").click(function () {
  if ($(window).width() < 768) {
    $(".bl_headerNav").removeClass("is_fade");
    $(".bl_toggleBtn").removeClass("is_close");
    $("body").removeClass("is_noscroll");
  }
});

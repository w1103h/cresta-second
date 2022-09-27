/* トグルボタン制御 */
$('.bl_toggleBtn').click(function () {
  $(this).toggleClass('is_close');
  $('.bl_headerNav').toggleClass('is_fade');
  $('body').toggleClass('is_noscroll');
});

/* メニューのリンクが押下されたときに、ナビゲーションを隠す */
if ($(window).width() < 768) {
  $('.bl_headerNav_link').click(function () {
    $('.bl_headerNav').removeClass('is_fade');
    $('.bl_toggleBtn').removeClass('is_close');
    $('body').removeClass('is_noscroll');
  });
}

/* ジャンボトロン：画像スライド */
$('.bl_jumbotron_slide').slick({
  autoplay: true,  /* 自動再生 */
  autoplaySpeed: 5000, /* 自動スライド切り替え速度（ミリ秒） */
  fade: true, /* フェードオン */
  speed: 1500, /* 切り替えにかかる時間（ミリ秒） */
  infinite: true,  /* 無限リピートオン */
  draggable: true /* マウスドラッグオン */
});

/* ヘッダー：途中から背景色を入れる */
$(window).scroll(function(){
  if($(window).height() < $(window).scrollTop()){
    $('.ly_header').addClass('ly_header__bg');
  }else{
    $('.ly_header').removeClass('ly_header__bg');
  }
})
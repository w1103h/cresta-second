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
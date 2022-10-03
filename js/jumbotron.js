/* ジャンボトロン：画像スライド */
$(".bl_jumbotron_slide").slick({
  autoplay: true /* 自動再生 */,
  autoplaySpeed: 5000 /* 自動スライド切り替え速度（ミリ秒） */,
  fade: true /* フェードオン */,
  speed: 1500 /* 切り替えにかかる時間（ミリ秒） */,
  infinite: true /* 無限リピートオン */,
  draggable: true /* マウスドラッグオン */,

  /* タブレット幅以下の場合はアニメーションを無効化 */
  responsive: [
    {
      breakpoint: 768,
      settings: "unslick",
    },
  ],
});

function show(index) {
  $(".image>button").prop("disabled",true);
  let image = $(".image>img")[index].currentSrc;
  let createElement = `<div class = 'fullImage'><img src=${image}></div>`;
  $("body").append(createElement);
  $("#fullpage").css("opacity","0.3");
  $(".fullImage").append("<button>X</button");
  $(".fullImage>button").on("click",() => {
    $(".fullImage").addClass("closeImage");
    setTimeout(() => {
      $(".fullImage").remove();
      $("#fullpage").css("opacity","1");
      $(".image>button").prop("disabled",false);
    },750);
  })
}

$(document).ready(() => {
  $(".nav-link").click(function(e){
    let jump = $(this).attr("href");
    let new_position = $(jump).offset();
    $("html,body").animate({scrollTop:new_position.top-104},1000);
    e.preventDefault();
  });
}) 






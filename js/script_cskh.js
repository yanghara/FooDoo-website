function init(){
  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });

    $("div.buble-position").mouseenter(function(){
      $("div img").animate({right: '30px'})
      });

      $("div.buble-position").click(function(){
        $("div img").animate({right: '0px'});
      });

      $("#id1, .sdt").click(function(){
          $("#panel").show();
      })
  });
}
//...
/*back index*/
function back(){
  location.href ="index.html";
}


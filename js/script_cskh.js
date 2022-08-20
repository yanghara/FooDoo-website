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

  /*$(document).ready(function(){
    $("div.send-button button").click(function(){
        alert("Tin nhắn đã gửi thành công! Hãy check Messenger mỗi ngày nhé!");  
      });
    });*/
}

function back(){
  location.href ="index.html";
}


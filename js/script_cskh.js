function init(){
  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });

  /*$(document).ready(function(){
    $("div.send-button button").click(function(){
        alert("Tin nhắn đã gửi thành công! Hãy check Messenger mỗi ngày nhé!");  
      });
    });*/

    $(document).ready(function(){
      $("div.buble-position").mouseenter(function(){
        $("div img").animate({right: '30px'})
        });
    });
    
    $(document).ready(function(){
      $("div.buble-position").click(function(){
        $("div img").animate({right: '0px'});
      });
    });

    

}



$(document).ready(function(){
    $(".button ").click(function(){
        $(".bonus").show()
    });
    $("#exit").click(function(){
        $(".bonus").hide()
    });
    $("#share").click(function(){
        location.replace("https://www.facebook.com/")
    })
    $(".bForm").click(function(){
        alert("Đặt hàng thành công");
    })
});
function DK(){
    if (confirm("BẠN ĐÃ CHẮC CHẮN CHƯA?")==true) {
        alert("CHÚNG TÔI SẼ LIỆN HỆ VỚI BẠN TRONG THỜI GIAN SỚM NHẤT! XIN CẢM ƠN!")

       }    else {
        alert( "XIN THỬ LẠI!")
       }
}





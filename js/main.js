$(document).ready(function(){
    $(".button ").click(function(){
        $(".fullscreen").show()
    });
    $("#exit").click(function(){
        $(".fullscreen").hide()
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
$(document).ready(function() {
    $("a.go").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})
function back() {
    location.href ="index.html"
}

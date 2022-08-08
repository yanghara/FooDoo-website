$(document).ready(function(){
    $(".button ").click(function(){
        $(".bonus").show()
    });
    $("#exit").click(function(){
        $(".bonus").hide()
    });
    $(".bForm").click(function(){
        alert("Đặt hàng thành công");
    })
});
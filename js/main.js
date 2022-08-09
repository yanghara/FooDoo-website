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
        alert("CHÚC MỪNG VÀ CẢM ƠN ĐÃ TIN TƯỞNG CHÚNG TÔI!")

       }    else {
        alert( "XIN THỬ LẠI!")
       }
}

    /*var e=document.getElementById("main")
    let b=document.getElementsByClassName("bForm")
    b.onclick = function(){
        e.style.backgroundColor = "blue";
    }*/

    




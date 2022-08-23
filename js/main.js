/*name food*/
let names = ['Trà sữa GongCha', 'Trà sữa', 'Trà sữa Boba Pop', 'Cơm tấm', 'Bún thịt nướng',
            'Cơm gà', 'Bánh mì', 'sandwich', 'Bánh kem', 'Phở']
//...
$(document).ready(function(){
    /*hiện form*/
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
        alert("Thêm vào giỏ hàng thành công");
    })
//...
    /*go to top*/
    $("a.go").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('a.go').fadeIn();
        } else {
            $('a.go').fadeOut();
        }
    });
//...
    /*gợi ý tên */
    $("#foodname").keyup(function(){
        let txt = $(this).val().toLowerCase();

        let h = '';
        for(let n of names)
            if(n.toLowerCase().indexOf(txt) >= 0){
                h += `
                <li><a href="#">${n}</a></li>`;
        }

        if (h !== ''){}
        $("#findfood").html(h);
    })
    $("#findfood").on("click", "a", function(){
        $("#foodname").val($(this).text());
    })
//...
    /*img of form */
    $("#1").click(function(){
        let m1=document.getElementById("mainImg1")
        $("#title-img").attr("src", m1.src);
        $("#title-name").text("Trà sữa GongCha nhà làm")
    })
    $("#2").click(function(){
        let m2=document.getElementById("mainImg2")
        $("#title-img").attr("src", m2.src);
        $("#title-name").text("Trà sữa hạnh phúc Boba Pop")
    })
    $("#3").click(function(){
        let m3=document.getElementById("mainImg3")
        $("#title-img").attr("src", m3.src);
        $("#title-name").text("Cơm tấm Sài Thành cô Hạnh")
    })
    $("#4").click(function(){
        let m4=document.getElementById("mainImg4")
        $("#title-img").attr("src", m4.src);
        $("#title-name").text("Bún thịt nướng Nam đặt biệt")
    })
    $("#5").click(function(){
        let m5=document.getElementById("mainImg5")
        $("#title-img").attr("src", m5.src);
        $("#title-name").text("Cơm gà núi Tam kỳ cô Vân")
    })
    $("#6").click(function(){
        let m6=document.getElementById("mainImg6")
        $("#title-img").attr("src", m6.src);
        $("#title-name").text("Bánh mì thịt nướng Ánh Tuyết")
    })
    $("#7").click(function(){
        let m7=document.getElementById("mainImg7")
        $("#title-img").attr("src", m7.src);
        $("#title-name").text("Bánh mì sandwich thơm - 3 phần")
    })
    $("#8").click(function(){
        let m8=document.getElementById("mainImg8")
        $("#title-img").attr("src", m8.src);
        $("#title-name").text("Bánh mì giòn da thơm thịt")
    })
    $("#9").click(function(){
        let m9=document.getElementById("mainImg9")
        $("#title-img").attr("src", m9.src);
        $("#title-name").text("Bánh kem tươi Cô Thành")
    })
    $("#10").click(function(){
        let m10=document.getElementById("mainImg10")
        $("#title-img").attr("src", m10.src);
        $("#title-name").text("Phở bò tái chuẩn Hà Nội")
    })
    $("#11").click(function(){
        let m11 = document.getElementById("mainImg11")
        $("#title-img").attr("src", m11.src);
        $("#title-name").text("Hotdog xúc xích phô mai Hàn Quốc")
    })

    $("#12").click(function(){
        let m12 = document.getElementById("mainImg12")
        $("#title-img").attr("src", m12.src);
        $("#title-name").text("Bánh tráng trộn Chú Cuội")
    })
    $("#13").click(function(){
        let m13=document.getElementById("mainImg13")
        $("#title-img").attr("src", m13.src);
        $("#title-name").text("Cơm gà xối mỡ Dương Châu")
    })
    $("#14").click(function(){
        let m14=document.getElementById("mainImg14")
        $("#title-img").attr("src", m14.src);
        $("#title-name").text("Phở tái gân bò viên Hà Nội")
    })
    $("#15").click(function(){
        let m15=document.getElementById("mainImg15")
        $("#title-img").attr("src", m15.src);
        $("#title-name").text("Bún thịt nướng miền Nam")
    })
    $("#16").click(function(){
        let m16=document.getElementById("mainImg16")
        $("#title-img").attr("src", m16.src);
        $("#title-name").text("Hamburger gà rán")
    })
    $("#17").click(function(){
        let m17=document.getElementById("mainImg17")
        $("#title-img").attr("src", m17.src);
        $("#title-name").text("Bánh nhân tôm trứng")
    })
    $("#18").click(function(){
        let m18=document.getElementById("mainImg18")
        $("#title-img").attr("src", m18.src);
        $("#title-name").text("Beefsteak")
    })
    $("#19").click(function(){
        let m19=document.getElementById("mainImg19")
        $("#title-img").attr("src", m19.src);
        $("#title-name").text("Bánh xèo cô Sáu")
    })
    $("#20").click(function(){
        let m20=document.getElementById("mainImg20")
        $("#title-img").attr("src", m20.src);
        $("#title-name").text("Bánh bạch tuột")
    })
    $("#21").click(function(){
        let m21=document.getElementById("mainImg21")
        $("#title-img").attr("src", m21.src);
        $("#title-name").text("Sushi Nhật Bản")
    })
    $("#22").click(function(){
        let m22=document.getElementById("mainImg22")
        $("#title-img").attr("src", m22.src);
        $("#title-name").text("Kem các vị")
    })
    $("#23").click(function(){
        let m23=document.getElementById("mainImg23")
        $("#title-img").attr("src", m23.src);
        $("#title-name").text("Bánh Donut Chocolate")
    })
    $("#24").click(function(){
        let m24=document.getElementById("mainImg24")
        $("#title-img").attr("src", m24.src);
        $("#title-name").text("Nem chua Thanh Hóa")
    })
    $("#25").click(function(){
        let m25=document.getElementById("mainImg25")
        $("#title-img").attr("src", m25.src);
        $("#title-name").text("Gỏi cuốn Hà Giang")
    })
});
//...
    /*subcrise shipper*/
    function DK(){
        if (confirm("BẠN ĐÃ CHẮC CHẮN CHƯA?")==true) {
            alert("CHÚNG TÔI SẼ LIỆN HỆ VỚI BẠN TRONG THỜI GIAN SỚM NHẤT! XIN CẢM ƠN!")
            }
            else {
            alert( "XIN THỬ LẠI!")
        }
    }
//...
/*back index*/
    function back() {
        location.href ="index.html"
    }
//...

let names = ['Cà phê phin nóng', 'Trà sữa thái', `Trà`, `Cà phê phin đá`, `Espresso`, `Milo đá`, `Milo hộp`,
`Mì trộn xúc xích trứng chiên`, `Bánh bao trứng cút`, `Mì trộn Indomie`, `Bánh giò`, `DimSum`, `Bánh mì ốp la`
]

function init() {
    let m = document.getElementById("mainImg1");
    let buttons = document.querySelectorAll(".bnt1 > input")
    for (let bnt of buttons){
        bnt.addEventListener("click", function() {
            let prefix = bnt.getAttribute("rel");
                m.src=`./imgs/circlek/drink2${prefix}.png`

        })
    }

    let m1 = document.getElementById("mainImg2");
    let buttons1 = document.querySelectorAll(".bnt2 > input")
    for (let bnt1 of buttons1){
        bnt1.addEventListener("click", function() {
            let prefix1 = bnt1.getAttribute("rel");
                m1.src=`./imgs/circlek/drink3${prefix1}.png`
        })
    }

    let m2 = document.getElementById("mainImg3");
    let buttons2 = document.querySelectorAll(".bnt3 > input")
    for (let bnt2 of buttons2){
        bnt2.addEventListener("click", function() {
            let prefix2 = bnt2.getAttribute("rel");
                m2.src=`./imgs/circlek/drink4${prefix2}.png`
        })
    }

    let m3 = document.getElementById("mainImg4");
    let buttons3 = document.querySelectorAll(".bnt4 > input")
    for (let bnt3 of buttons3){
        bnt3.addEventListener("click", function() {
            let prefix3 = bnt3.getAttribute("rel");
                m3.src=`./imgs/circlek/drink6${prefix3}.png`
        })
    }

    let m4 = document.getElementById("mainImg5");
    let buttons5 = document.querySelectorAll(".bnt6 > input")
    for (let bnt6 of buttons5){
        bnt5.addEventListener("click", function() {
            m4.src=`./imgs/circlek/drink1.png`
        })
    }

    let m5 = document.getElementById("mainImg6");
    let buttons6 = document.querySelectorAll(".bnt7 > input")
    for (let bnt7 of buttons6){
        bnt7.addEventListener("click", function() {
            m5.src=`./imgs/circlek/drink7.png`
        })
    }

    const time = new Date().getHours();
    let greeting;
    if (time < 21) {
        greeting = "Đang mở cửa";
    } else if (time < 22) {
        greeting = "Sắp đóng cửa";
    } else {
        greeting = "Đã đóng cửa";
    }
    document.getElementById("hour").innerHTML = greeting;

    $(document).ready(function(){
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
        $(".page-confirm").hide();

        $("#cmt").click(function(){
            alert("Đã thêm vào cửa hảng yêu thích của bạn!")
            $("#cmt").addClass("cmt")
        })

        $(".close").click(function(){
            $("div.popup").hide();
        })

        $("span.add-to-cart").click(function(){
            $(".confirm-box").show();
        })

        /*chọn giỏ hàng sẽ hiện lên page confirm*/

        $("#1, #2, #3, #4, #5, #6, #7, #8, #9, #10, #11, #12, #13, #14, #15").click(function(){
            $("div.page-confirm").show();
        })

        $("#16, #17, #18, #19, #20, #21, #22, #23, #24, #25, #26, #27, #28, #29, #30").click(function(){
            $("div.page-confirm").show();
        })

        $("#arrow").click(function(){
            $("div.page-confirm").hide();
        })

        /*chọn đường, đá*/
        $("div.selection-suga div").click(function(){
            $("div.selection-suga div").removeClass("afterClick")
            $(this).addClass("afterClick");
        })

        $("div.selection-ice div").click(function(){
            $("div.selection-ice div").removeClass("afterClick")
            $(this).addClass("afterClick");
        })

        $("div.selection-size-1 div").click(function(){
            $("div.selection-size-1 div").removeClass("afterClick")
            $(this).addClass("afterClick");
        })

        /*chọn mỗi giỏ hàng, đổi ảnh đại diện, đổi tên sản phẩm đó*/

        $("#1").click(function(){
            $("#title-img").attr("src", m.src);
            $("#title-name").text("Cà phê phin nóng");
        })

        $("#2").click(function(){
            $("#title-img").attr("src", m1.src);
            $("#title-name").text("Trà sữa thái");
        })

        $("#3").click(function(){
            $("#title-img").attr("src", m2.src);
            $("#title-name").text("Trà");
        })

        $("#4").click(function(){
            $("#title-img").attr("src", m3.src);
            $("#title-name").text("Cà phê phin đá");
        })

        $("#5").click(function(){
            $("#title-img").attr("src", m4.src);
            $("#title-name").text("Espresso");
        })

        $("#6").click(function(){
            $("#title-img").attr("src", m5.src);
            $("#title-name").text("Milo");
        })

        /*Tính giá tiền*/

        $("#1, #3, #5").click(function(){
            $("#sizeM").click(function(){
                $("#sum").text("15.000VND")
            })
            $("#sizeL").click(function(){
                $("#sum").text("20.000VND")
            })
        })

        $("#2, #4").click(function(){
            $("#sizeM").click(function(){
                $("#sum").text("15.000VND")
            })
            $("#sizeL").click(function(){
                $("#sum").text("18.000VND")
            })
        })

        $("#6").click(function(){
            $("#sizeM").click(function(){
                $("#sum").text("17.000VND")
            })
            $("#sizeL").click(function(){
                $("#sum").text("20.000VND")
            })
        })

        /*Gợi ý tìm đồ ăn, nước uống*/

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
        
        /*Click thêm vào giỏ hàng*/

        $("div.payment").click(function(){
            $(".page-confirm").hide("slow", function(){
                alert("Đã thêm vào giỏ hàng!");
            });
        })

        $(".menu-store-1").hide();

        $("#icon-cate").click(function() {
            $("div.menu-store-1").slideToggle("slow");
        })


        
    })
}
function back(){
    location.href = "index.html";
}

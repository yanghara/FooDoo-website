// go to top
$(document).ready(function() {
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
})
//...
//back index
function back(){
        location.href ="index.html"
}
//...
//change img
function init()
{
    let img = document.getElementById("mainImg1")
        img.addEventListener("mouseenter",function(){
        img.src=`./images/sang_${2}.jpg`;
    })
        img.addEventListener("mouseleave",function(){
            img.src=`./images/sang_${1}.jpg`
    })


    let img1 = document.getElementById("mainImg2")
        img1.addEventListener("mouseenter",function(){
        img1.src=`./images/trua_${2}.jpg`;
    })
        img1.addEventListener("mouseleave",function(){
           img1.src=`./images/trua_${1}.jpg`
    })


    let img2 = document.getElementById("mainImg3")
        img2.addEventListener("mouseenter",function(){
        img2.src=`./images/toi_${2}.jpg`;
    })
        img2.addEventListener("mouseleave",function(){
           img2.src=`./images/toi_${1}.jpg`
    })


    let img3 = document.getElementById("mainImg4")
        img3.addEventListener("mouseenter",function(){
        img3.src=`./images/tra_${2}.jpg`;
    })
        img3.addEventListener("mouseleave",function(){
           img3.src=`./images/tra_${1}.jpg`
    })


    let img4 = document.getElementById("mainImg5")
        img4.addEventListener("mouseenter",function(){
        img4.src=`./images/to_${2}.jpg`;
    })
        img4.addEventListener("mouseleave",function(){
           img4.src=`./images/to_${1}.jpg`
    })


    let img5 = document.getElementById("mainImg6")
        img5.addEventListener("mouseenter",function(){
        img5.src=`./images/cafe_${2}.jpg`;
    })
        img5.addEventListener("mouseleave",function(){
           img5.src=`./images/cafe_${1}.jpg`
    })

    let img6 = document.getElementById("mainImg7")
        img6.addEventListener("mouseenter",function(){
        img6.src=`./images/bun_${2}.jpg`;
    })
        img6.addEventListener("mouseleave",function(){
           img6.src=`./images/bun_${1}.jpg`
    })

    let img7 = document.getElementById("mainImg8")
        img7.addEventListener("mouseenter",function(){
        img7.src=`./images/pho_${2}.jpg`;
    })
        img7.addEventListener("mouseleave",function(){
           img7.src=`./images/pho_${1}.jpg`
    })

    let img8 = document.getElementById("mainImg9")
        img8.addEventListener("mouseenter",function(){
        img8.src=`./images/mi_${2}.jpg`;
    })
        img8.addEventListener("mouseleave",function(){
           img8.src=`./images/mi_${1}.jpg`
    })

    let img9 = document.getElementById("mainImg10")
        img9.addEventListener("mouseenter",function(){
        img9.src=`./images/com_${2}.jpg`;
    })
        img9.addEventListener("mouseleave",function(){
           img9.src=`./images/com_${1}.jpg`
    })


    let img10 = document.getElementById("mainImga")
        img10.addEventListener("mouseenter",function(){
        img10.src=`./images/ga_${2}.jpg`;
    })
        img10.addEventListener("mouseleave",function(){
           img10.src=`./images/ga_${1}.jpg`
    })


    let img11 = document.getElementById("mainImg12")
        img11.addEventListener("mouseenter",function(){
        img11.src=`./images/nieu_${2}.jpg`;
    })
        img11.addEventListener("mouseleave",function(){
           img11.src=`./images/nieu_${1}.jpg`
    })


    let img12 = document.getElementById("mainImg13")
        img12.addEventListener("mouseenter",function(){
        img12.src=`./images/keo_${2}.jpg`;
    })
        img12.addEventListener("mouseleave",function(){
           img12.src=`./images/keo_${1}.jpg`
    })


    let img13 = document.getElementById("mainImg14")
        img13.addEventListener("mouseenter",function(){
        img13.src=`./images/banh_${2}.jpg`;
    })
        img13.addEventListener("mouseleave",function(){
           img13.src=`./images/banh_${1}.jpg`
    })


    let img14 = document.getElementById("mainImg15")
        img14.addEventListener("mouseenter",function(){
        img14.src=`./images/nuoc_${2}.jpg`;
    })
        img14.addEventListener("mouseleave",function(){
           img14.src=`./images/nuoc_${1}.jpg`
    })

    let img15 = document.getElementById("mainImg16")
        img15.addEventListener("mouseenter",function(){
        img15.src=`./images/tom_${2}.jpg`;
    })
        img15.addEventListener("mouseleave",function(){
           img15.src=`./images/tom_${1}.jpg`
    })

    let img16 = document.getElementById("mainImg17")
        img16.addEventListener("mouseenter",function(){
        img16.src=`./images/${3}.jpg`;
    })
        img16.addEventListener("mouseleave",function(){
           img16.src=`./images/nuong_${1}.jpg`
    })

    let img17 = document.getElementById("mainImg18")
        img17.addEventListener("mouseenter",function(){
        img17.src=`./images/${6}.jpg`;
    })
        img17.addEventListener("mouseleave",function(){
           img17.src=`./images/sushi_${1}.jpg`
    })

    let img18 = document.getElementById("mainImg19")
        img18.addEventListener("mouseenter",function(){
        img18.src=`./images/ham_${1}.jpg`;
    })
        img18.addEventListener("mouseleave",function(){
           img18.src=`./images/${1}.jpg`
    })

    let img19 = document.getElementById("mainImg20")
        img19.addEventListener("mouseenter",function(){
        img19.src=`./images/${10}.jpg`;
    })
        img19.addEventListener("mouseleave",function(){
           img19.src=`./images/${9}.png`
    })
}
//...
$(function(){
    $(".search-btn").click(function(){
        $(".search-text").animate({width:'200'},500);
        $(".input-esc").delay(500).css({"display":"inline-block"});
        $("this").css({"display":"none"});
    })
    $(".input-esc").click(function(){
        $(".search-text").animate({width:'0'},500); 
        $(".input-esc").css({"display":"none"});
        $("this").css({"display":"inline-block"});
    })

    // 小界面导航栏
    $("#button_nav").click(function(){
        $(".header-nav ").slideToggle();
    })

    // banner图
    var bannerSwiper = new Swiper("#bannerSwiper",{
        loop:true,
        autoplay:true,
        speed:1000,
        pagination: {
            el: '#bannerSwiper .swiper-pagination',
            clickable:true,
          },
    })
    
    // 首页产品
    var swiper = new Swiper('#swiper2.swiper-container', {
        loop:true,
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay:true,
		speed:1000,
        pagination: {
          el: '#swiper2 .swiper-pagination',
          clickable: true,
        },
        navigation: {
            nextEl: '#swiper2 .swiper-button-next',
            prevEl: '#swiper2 .swiper-button-prev',
        },
        breakpoints: { //对于响应式网站中的操作
            //当宽度小于等于320
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
           //当宽度小于等于480
            480: { 
              slidesPerView: 2,
              spaceBetween: 20
            },
            //当宽度小于等于640
            640: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }

    });
    $(".index-pro-pic").mouseenter(function () { 
        $(this).children(".pro-mask").animate({opacity:0.6},500);
    });
    $(".index-pro-pic").mouseleave(function () { 
        $(this).children(".pro-mask").animate({opacity:00},500);
    });

    // 产品页
    $("#button_pro").click(function(){
        $(".product-fl").slideToggle();
    })

    $(".products-pic").mouseenter(function(){
        $(this).children(".products-mask").animate({opacity:"0.4"},500);
    })
    $(".products-pic").mouseleave(function(){
        $(this).children(".products-mask").animate({opacity:"0"},500);
    })


    // 厂房设备
    $(document).ready(function () {
        $(".group1").colorbox({ rel: 'group1' });
    });


    // // 产品内页
    $(".productsd-class").click(function(){
        $(".productsd-box").css('display','none');
        $(this).attr('class','active1');
        $(this).siblings().removeClass('active1');
        $(".productsd-box").eq($(this).index()).css('display','block');
    })
})
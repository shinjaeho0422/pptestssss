// HTML문서내용을 전체 로드 후 실행
$(function(){
    // Slick Slider - welcome
    $('.slideshow').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 1000,
        pauseOnHover: false
      });

    //   TypeIt - welcome
    $("#typing").typeIt({
        strings: ['Business strategy', 'Organization Management', 
        'Business Innovation'],
        speed: 150,
        autoStart: true,
        breakLines: false,
    })

    // Slick Slider - review & guide
    $('.review-slider, .mockup-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800
      });

    // faq Accordion
    $('.faq-desc').eq(0).show();
    $('.faq-title').click(function() {
        $(this).siblings().stop().slideDown();
        $(this).parent().siblings().children('.faq-desc').stop().slideUp();
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    })

    // Video Modal
    $('.play-modal').click(function() {
        $('.video-modal').fadeIn();
        $('body').addClass('active');
    })

    $('.close-modal').click(function() {
        $('.video-modal').fadeOut();
        $('body').removeClass('active');
    })

    // Scroll Go to top & Header
    $(window).scroll(function() {
        if($(this).scrollTop() > 200) {
            $('.btn-top').fadeIn();
            $('header').addClass('active');
        } else {
            $('.btn-top').fadeOut();
            $('header').removeClass('active');
        }
    })

    $('.btn-top').click(function() {
        $('html').animate({
            scrollTop : 0
        },100)
    })

    // WoW Scroll Animation
    wow = new WOW({
        boxClass: 'wow',
        offset: 150,
        mobile: false
    })
    wow.init()

    // Trigger
    $('#trigger').click(function() {
        $('.gnb').toggleClass('active');
        $(this).toggleClass('active');
    })

    $('.gnb a, section').click(function() {
        $('.gnb, #trigger').removeClass('active');
    })
})

// faq Accordion
// $(function(){
//     $('.faq-desc').eq(0).show();
//     $('.faq-title').click(function() {
//         $(this).siblings().stop().slideDown();
//         $(this).parent().siblings().children('.faq-desc').stop().slideUp();
//         $(this).parent().addClass('active');
//         $(this).parent().siblings().removeClass('active');
//     })
// })
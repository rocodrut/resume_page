$(document).ready(function(){
    $('.short-card').hide().fadeIn(1500);
    $('.dark-btn').click(function(){
        $('.main-content-wrapper').animate({
            height: 'toggle'
        });
        $('html, body').animate({
            scrollTop: $("#hidden-content").offset().top
        }, 1500);
    });
    $('.back-to-top').click(function(){
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 1500);
    });
    $('ul.nav-tabs li').click(function(){
        $('html, body').animate({
            scrollTop: $("#hidden-content").offset().top
        }, 1500);
    });
    $(window).scroll(function() {
        if ($(window).scrollTop()>=200) {
            $(".back-to-top").css("display","block");
        }else {
            $(".back-to-top").css("display","none");
        }
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href");
        if (target === "#resume") {
            $(function() {
              $('.progress-bar').each(function() {
                var bar_value = $(this).attr('aria-valuenow') + '%';
                $(this).animate({ width: bar_value });
              });
            });
        }
    });
});

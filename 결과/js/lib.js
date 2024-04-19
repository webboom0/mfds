$(function () {
    // 브라우저 ie8 버전시 브라우저 업데이트 페이지 이동
    var Browser = {
        chk: navigator.userAgent.toLowerCase()
    }

    Browser = {
        ie: Browser.chk.indexOf('msie') != -1,
        ie6: Browser.chk.indexOf('msie 6') != -1,
        ie7: Browser.chk.indexOf('msie 7') != -1,
        ie8: Browser.chk.indexOf('msie 8') != -1,
        ie9: Browser.chk.indexOf('msie 9') != -1,
        ie10: Browser.chk.indexOf('msie 10') != -1,
        opera: !!window.opera,
        safari: Browser.chk.indexOf('safari') != -1,
        safari3: Browser.chk.indexOf('applewebkir/5') != -1,
        mac: Browser.chk.indexOf('mac') != -1,
        chrome: Browser.chk.indexOf('chrome') != -1,
        firefox: Browser.chk.indexOf('firefox') != -1
    }

    if (Browser.ie9 || Browser.ie8) {
        location.href = "/common/update.html";
    }

    // 지방식약청
    $(".headTop .regionBtn").click(function(){
        $(this).toggleClass("up");
        $(".headTop .utilMenu .reginList").slideToggle();
    })
  
    // 모바일 메뉴
    $(".mb_menuBtn").click(function () {
        $(".mb_navi").addClass("active");
        $("body").css("overflow-y", "hidden");
        $("body").addClass("modalbg")

    })
    $(".mb_navi .closeBtn").click(function () {
        $(".mb_navi").removeClass("active");
        $("body").css("overflow-y", "auto");
        $("body").removeClass("modalbg")
    })
    $(".mb_navi>ul>li>a").click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass("active");
    })

    $(".mb_navi .allMenu").click(function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(this).find("span").text("메뉴 전체닫기")
            $(".mb_navi .sub").slideDown();
            $(".mb_navi .sub").parents("li").find(">a").addClass("active");
        } else {
            $(this).find("span").text("메뉴 전체보기");
            $(".mb_navi .sub").slideUp();
            $(".mb_navi .sub").parents("li").find(">a").removeClass("active");
        }
    })
   
   // 메뉴
   var $navi = $("#navi .pc_navi");
   $("#navi .pc_navi>li").hover(function(){
    if($(this).find('>div').hasClass("subWrap")){
        $navi.addClass("active");
        $(this).find(".subWrap").addClass("active");
    }else{
        $navi.removeClass("active")
        $(this).find(".subWrap").removeClass("active");
    }
    sitemapSwitch();
   }, function(){
      $navi.removeClass("active");
      $(this).parent().find(".subWrap").removeClass("active");
   })

   $("#navi .pc_navi>li>a").focus(function(){
    if($(this).parent().find('>div').hasClass("subWrap")){
        $navi.addClass("active");
        $("#navi .subWrap.active").removeClass("active");
        $(this).parent().find(".subWrap").addClass("active");
    }else{
        $navi.removeClass("active");
        $("#navi .subWrap.active").removeClass("active");
    }
    sitemapSwitch();
   })
   // 0914추가 여기부터
   $("#navi .subWrap a").focus(function(){
        $navi.addClass("active");
       $("#navi .subWrap.active").removeClass("active");
        $(this).parents(".subWrap").addClass("active");
        sitemapSwitch()
   })
    // 0914추가 여기까지

   $("body *").focus(function(){
    $(this).not("#navi .pc_navi>li a").parent().find(".subWrap.active").removeClass("active");
    $(this).not("#navi .pc_navi>li a").parents("body").find("#navi .pc_navi").removeClass("active");
   })
   function sitemapSwitch(){
    if($(".sitemapBtn").hasClass("active")){
      $(".sitemapBtn").removeClass("active");
      $(".stiemapWrap").removeClass("active");
    }
   }
    // 사이트맵
    $(".sitemapBtn").click(function () {
        $(this).toggleClass("active");
        $(".stiemapWrap").toggleClass("active");
    })

    // 탭기능
    // 0914 탭 수정
    $("*[data-tab='tab']").find("*[data-target]").click(function(){
        var $preActive = $("*[data-tab='tab']").find(".active");
        var $active = $(this);
        var prvTarget = $preActive.attr("data-target");
        var target = $(this).attr("data-target");
        $preActive.removeClass("active");
        $preActive.removeAttr("title").attr("aria-selected","false");
        $active.addClass("active");
        $active.attr("title",$active.text()+" 선택됨").attr("aria-selected","true");
        $(prvTarget).hide().attr("aria-hidden","true");
        $(target).show().attr("aria-hidden","false");
    });


    // tobBtn
    $(window).scroll(function(){
        if($(window).scrollTop() > 50){
            $(".topBtn").addClass('up');
        }else{
            $(".topBtn").removeClass('up');
        }
    })
     $(".topBtn").on("click", function(){
        if($(this).hasClass("up")){
            $('html, body').animate({scrollTop:0}, 400);
        }else{
            $('html, body').animate({scrollTop:500}, 400);      
        }
    })
     
    // 서브메뉴
    $(".depth2, .depth1").click(function () {
        $(this).find("ul").slideToggle();
        $(this).toggleClass("active");
    });

});
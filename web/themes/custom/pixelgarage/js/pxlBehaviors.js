/**
 * This file contains all Drupal behaviours of the pixelgarage theme.
 *
 * Created by marius on 09.11.2018
 */

(function ($) {

  Drupal.behaviors.fixHeaderOnScroll = {
    attach: function (context) {
      var isFixedHeader = true,
        fixedHeaderScrollPos = 300 ;

      $(window).on("load", function () {
        if ($(window).scrollTop() >= fixedHeaderScrollPos) {
          $("header.navbar").addClass('nav-solid');
        }
      });


      $(window).off("scroll");
      $(window).on("scroll", function () {
        var $nav = $("header.navbar .navbar-header");
        //$navCont = $("header.navbar .container")
        //$width   = $(window).width();

//              if ($width >= 1024) {
//                fixedHeaderScrollPos = 50;
//              }
//              else if ($width >= 768) {
//                fixedHeaderScrollPos = 50;
//              }
//              else if ($width >= 480) {
//                fixedHeaderScrollPos = 50;
//              }
//              else {
//                fixedHeaderScrollPos = 50;
//              }

        if ($(window).scrollTop() >= fixedHeaderScrollPos) {
          if (isFixedHeader) return;

          // keep nav fixed at this scroll position
          $nav.addClass('nav-solid');
          //$('body').removeClass('navbar-is-static-top').addClass('navbar-is-fixed-top');

          // fix nav
          //$nav.css({position: 'fixed', top: 0, bottom: 'auto'});
          //$navCont.css("box-shadow", "0 4px 3px -4px gray");

          isFixedHeader = true;
        }
        else {
          if (!isFixedHeader) return;

          // set header to static in top scroll region
          $nav.removeClass('nav-solid');
          //$nav.removeClass('navbar-fixed-top').addClass('navbar-static-top');
          //$('body').removeClass('navbar-is-fixed-top').addClass('navbar-is-static-top');

          // remove shadow from header
          //$nav.css({position: 'absolute', top: 'auto', bottom: 0});
          //$navCont.css("box-shadow", "none");

          isFixedHeader = false;
        }
      });
    }
  };
  /**
   * This behavior adds individual bg videos to the header.
   *
   */

  Drupal.behaviors.bgVideos = {
    attach: function () {
      var body = document.getElementsByTagName("BODY")[0],
      nid = body.classList[0],
      vPath = "/themes/custom/pixelgarage/videos/",
      videoUrl,
      $videoParentContainer = $('.header-background');

      function addVideo(vurl) {
        var v = document.createElement("video");
        var s = document.createElement("source");
        v.autoplay = true;
        v.loop = true;
        v.id = "bgvideo";
        //v.muted = true;
        s.src = vPath + vurl;
        s.setAttribute("type", "video/mp4");
        v.append(s);
        $videoParentContainer.append(v);
        setTimeout(function(){
          v.play();
        },1000);
      }

      $(window).on("load", function () {
        switch(nid){
          case "page-node-1":
            videoUrl = "sunwu_intro.mp4";
            addVideo(videoUrl);
            break;

          case "page-node-3":
            videoUrl = "sunwu_kungFu01.mp4";
            addVideo(videoUrl);
            break;

          case "page-node-2":
            videoUrl = "sunwu_kungFu02.mp4";
            addVideo(videoUrl);
            break;

          case "page-node-4":
            videoUrl = "sunwu_sanda.mp4";
            addVideo(videoUrl);
        }
      });
    }
  };

  Drupal.behaviors.scrolltoanchors = {
    attach: function(context, settings) {$(function() {
      $('ul.menu li a').click(function() {
        var pos = this.href.indexOf('#');
        if (pos == -1) return true;
        var target = $(this.href.slice(pos));
        if (target.length) {
          $('html, body').stop().animate({
            scrollTop: target.offset().top - 80
          }, 500, 'swing');
          return false;
        }
      });
    });
    }
  };


  /**
   * This behavior adds shadow to header on scroll.
   *
   */
  /**
   * Drupal.behaviors.addHeaderShadow = {
    attach: function (context) {
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 10) {
          $("header.navbar .container").css("box-shadow", "0 4px 3px -4px gray");
        }
        else {
          $("header.navbar .container").css("box-shadow", "none");
        }
      });
    }
  };
  */

  /**
   * Allows full size clickable items.
   Drupal.behaviors.fullSizeClickableItems = {
    attach: function () {
      var $clickableItems = $('.node-link-item.node-teaser .field-group-div')
        .add('.node-team-member.node-teaser .field-group-div');

      $clickableItems.once('click', function () {
        $(this).on('click', function () {
          window.location = $(this).find("a:first").attr("href");
          return false;
        });
      });
    }
  };
   */

  /**
   * Swaps images from black/white to colored on mouse hover.
   Drupal.behaviors.hoverImageSwap = {
    attach: function () {
      $('.node-project.node-teaser .field-name-field-images a img').hover(
        function () {
          // mouse enter
          src = $(this).attr('src');
          $(this).attr('src', src.replace('teaser_bw', 'teaser_normal'));
        },
        function () {
          // mouse leave
          src = $(this).attr('src');
          $(this).attr('src', src.replace('teaser_normal', 'teaser_bw'));
        }
      );
    }
  }
   */

  /**
   * Open file links in its own tab. The file field doesn't implement this behaviour right away.
   Drupal.behaviors.openDocumentsInTab = {
    attach: function () {
      $(".field-name-field-documents").find(".field-item a").attr('target', '_blank');
    }
  }
   */

})(jQuery);

$(document).ready(function(){

//AJAX requests to retrieve product data and imgs

$.ajax({
  type: "GET",
  url: "https://www.redbullshopus.com/products.json",
  success: function(res){
    console.log(res.products.title)
    for(var i = 0; i < res.products.length; i++) {
      // var item = $('<div')
      // $('<div></div>').addClass('component').append()


      $(".row").append(
        "<div class='component'>"+
            "<div class='item'>"+res.products[i].title+"</div>"+
            "<div class='price'>$"+res.products[i].variants[0].price+"</div>"+
            "<div class='img'><img src='"+ res.products[i].images[0].src +"'></div>"+
            "<div class='description'>"+res.products[i].body_html+"</div>"+
            "<button class='purchase'>Add to Cart</button>"+
        "</div>"
      )
    }
  }
}) //end ajax


  //mobile menu

    $(".mobile-menu_open").on("click", function(e){
      e.preventDefault();
      $(".top-nav ul").slideDown();
      $(".mobile-menu_open").hide();
      $(".mobile-menu_close").show();

    })

    $(".mobile-menu_close").on("click", function(e){
      e.preventDefault();
      $(".top-nav ul").slideUp();
      $(".mobile-menu_close").hide();
      $(".mobile-menu_open").show();

    })

    //suppose to slide up the menu when user scrolls or clicks on container on mobile devices, but it's a little uncooperative

    if(innerWidth<=600){
      $(".container").on("click", function(){
          $(".top-nav ul").slideUp();
          $(".mobile-menu_close").hide();
          $(".mobile-menu_open").show();    
      })

      $(window).scroll(function(){
        $(".top-nav ul").slideUp();
        $(".mobile-menu_close").hide();
        $(".mobile-menu_open").show();
      })
    }

  //scroll back to top 

    $(".js-top").on("click", function(e){
      e.preventDefault();
      scroll(0);
    });

    function scroll(y){
      $('html,body').animate({
        scrollTop: y
       },500)
    }

//header appears on nav bar on scroll.

    $(window).on("scroll", function(){
      $(".top-nav h1 span").fadeIn();
      $("header h1").fadeOut();
    })


}); //end document.ready


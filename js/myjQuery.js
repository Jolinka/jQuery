$(document).ready(function () {
  // All code should be here so that the document loads first and then our code should execute e.g all the images should load up first

  //   console.log($)
  //   $('selector').action() syntax for jQuery
  // $(".first").click();
  // // this will hide all the p's
  // $(".first").click(function () {
  //   console.log("clicked on p");
  //   $("p").hide();
  // });

  // // this will hide the specific clicked p
  //   $("p").click(function () {
  //     console.log("clicked on p");
  //     $(this).hide();
  //   });

  //   $("p").click(function () {
  //     console.log("You have clicked", this);
  //   });
  // // .first will be clicked automatically as the page loads
  //   $(".first").click();

  /**
   * There are 3 main type of query selector in jQuery
   * 1) element selector
   * 2) class selector
   * 3) ID selector
   * **/

  //   Events is jQuery
  /**
   * Mouse events = click, dblclick, mouseenter, mouseleave
   * keyboard events = keypress, keydown, keyup, MediaKeyStatusMap
   * formm events = submit, change, focus, blur
   * document/window events = load, resize, scroll, unload
   */
  //   $("p").dblclick(function () {
  //     console.log("You double clicked on", this);
  //   });

  //   $("p").mouseenter(function () {
  //     console.log("You entered ", this);
  //   });

  //   $("p").mouseleave(function () {
  //     console.log("mouse leave ", this);
  //   });

  //   $("p").mousedown(function () {
  //     console.log("mouse down ", this);
  //   });

  //   $("p").mouseup(function () {
  //     console.log("mouse up ", this);
  //   });

  //   // this take two events mouse enter and mouse leave so this will be trigerred two times
  //   $("p").hover(function () {
  //     console.log("you hovered ", this);
  //   });

  // // demo of the on method
  $("p").on({
    click: function () {
      console.log("you just clicked", this);
    },
  });

  // // to hide and unhide
  //   $("#me").hide();
  //   $("#me").show();
  // // it will hide with an animation after 1000 miliseconds
  //   $("#me").hide(1000);

  // // with an argument and a call back to get the confirmation
  //   $("#me").hide(1000, function(){
  //       console.log("hidden!")
  //   });
  $("button").click(function () {
    // //  to hide /unhide
    // $("#me").toggle(1000);
    // // to fadeOut animation
    // $("#me").fadeOut(1000);
    // // to slide up/down
    // $("#me").slideUp(1000);
    // // animate function in jQuery
    // // these will be placed in a queue and then they will execute in an order
    $("#me").animate({ opacity: 0.3 }, 4000);
    $("#me").animate({ height: "380px" }, 1000);
    $("#me").animate({ width: "380px" }, 1000);
  });

  //   practice fadeIn() fadeOut() fadeToggle() fadeTo()

  // // to stop process
  //   $(#me).stop();
  // // to overwrite the text
  //   $("#me").text("haha gotcha");
//   $("body").html("Huzaifa is the KING");
 
});

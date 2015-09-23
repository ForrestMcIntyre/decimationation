var logo = $(".logo");
logo.on("mouseenter", function(){
  var $this = $(this);
  $this.addClass("hover");
});
logo.on("mouseleave", function(){
  $(".hover").removeClass("hover");
});
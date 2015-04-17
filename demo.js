$(window).scroll(function() {
    if ($(this).scrollTop() == 0) {
        $("header").removeClass("shadow");
    }else{
      $("header").addClass("shadow");
    }
});
$(".well").click(function() {
  	var div = "#"+this.id.toString();
  	$('html, body').animate({scrollTop: $(div).offset().top-61}, 200);
    $(div).toggleClass("expand");
  	setTimeout(function(){ hideOthers(div); }, 300);
});

function hideOthers(div){
  var divs = ["#d1", "#d2", "#d3", "#d4", "#d5"];
  for (i = 0; i < divs.length; i++) { 
    if(divs[i] != div){
      $(divs[i]).toggleClass("hide");
    }
  }
};

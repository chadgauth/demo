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
    $("#smoothspace").height($(window).height());
  	setTimeout(function(){ hideOthers(div); }, $(div).hasClass("expand")? 200 : 0);
  	setTimeout(function(){ $("#smoothspace").height(0); }, 200);
  	if !($(div).hasClass("expand")){
  	    $('html, body').animate({scrollTop: $(div).offset().top-61}, 0);
  	    $('html, body').animate({scrollTop: $("#d1").offset().top-61}, 200);
  	}
});

function hideOthers(div){
  var divs = ["#d1", "#d2", "#d3", "#d4"];
  for (i = 0; i < divs.length; i++) { 
    if(divs[i] != div){
      $(divs[i]).toggleClass("hide");
    }
  }
  $('html, body').scrollTop($(div).offset().top-61);
};

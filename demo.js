$(window).scroll(function() {
    if ($(this).scrollTop() == 0) {
        $("header").removeClass("shadow");
    }else{
      $("header").addClass("shadow");
    }
});

window.onload = function () {
    if (typeof history.pushState === "function") {
        history.pushState("jibberish", null, null);
        window.onpopstate = function () {
            history.pushState('newjibberish', null, null);
            if($(".expand").trigger("click").length===0){
                history.go(-2);
            }
            // Handle the back (or forward) buttons here
            // Will NOT handle refresh, use onbeforeunload for this.
        };
    }
    else {
        var ignoreHashChange = true;
        window.onhashchange = function () {
            if (!ignoreHashChange) {
                ignoreHashChange = true;
                window.location.hash = Math.random();
                // Detect and redirect change here
                // Works in older FF and IE9
                // * it does mess with your hash symbol (anchor?) pound sign
                // delimiter on the end of the URL
            }
            else {
                ignoreHashChange = false;   
            }
        };
    }
};

$(".well").click(function() {
  	var div = "#"+this.id.toString();
  	$('html, body').animate({scrollTop: $(div).offset().top-61}, 200);
    $(div).toggleClass("expand");
  	setTimeout(function(){ hideOthers(div); }, $(div).hasClass("expand")? 200 : 0);
  	if ($(div).hasClass("expand"))
  	    $("#smoothspace").height($(window).height());
  	    setTimeout(function(){ $("#smoothspace").height(0); }, 200);
});

function hideOthers(div){
  var divs = ["#d1", "#d2", "#d3", "#d4"];
  for (i = 0; i < divs.length; i++) { 
    if(divs[i] != div){
      $(divs[i]).toggleClass("hide");
    }
  }
  if (!$(div).hasClass("expand")){
  	    $('html, body').animate({scrollTop: $(div).offset().top-61}, 0);
  	    $('html, body').animate({scrollTop: $("#d1").offset().top-61}, 200);
  	}
};

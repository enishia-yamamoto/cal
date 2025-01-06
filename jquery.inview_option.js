// JavaScript Document
$(function() {
	$('.f_up_list').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('f_up');
		}
		else{
			$(this).stop().removeClass('f_up');
		}
	});

	$('.f_list_left').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('f_left');
		}
		else{
			$(this).stop().removeClass('f_left');
		}
	});
	
	$('.f_list_right').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('f_right');
		}
		else{
			$(this).stop().removeClass('f_right');
		}
	});
	
	$('.f_list_in').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('f_down');
		}
		else{
			$(this).stop().removeClass('f_down');
		}
	});
	
	$('.f_list_in').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('f_in');
		}
		else{
			$(this).stop().removeClass('f_in');
		}
	});
	
});

(function($){
	
var windowWidth = $(window).width();
var windowSm = 600;
if (windowWidth <= windowSm) {
    $(function(){});
} else {
  $(function(){
  $(".f_list_order").one("inview", function (event, isInView) {
    if (isInView) {
       $('.fadein li.kamoku_slide_ct').each(function(i){
            $(this).delay(i * 300).css({visibility:'visible',opacity:'0'}).animate({opacity:'1'},1500);
        });
    }
  });
});
}	
})(jQuery);	

(function($){
	
var windowWidth = $(window).width();
var windowSm = 0;
if (windowWidth <= windowSm) {
    $(function(){});
} else {
  $(function(){
  $(".f_list_order_2").one("inview", function (event, isInView) {
    if (isInView) {
       $('.fadein_2 li').each(function(i){
            $(this).delay(i * 300).css({visibility:'visible',opacity:'0',left:'100px'}).animate({opacity:'1',left:'0'},1500);
        });
    }
  });
});
}	
})(jQuery);	



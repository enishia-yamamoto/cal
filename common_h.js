// JavaScript Document

//繝槭え繧ｹ繧ｪ繝ｼ繝舌�
(function($){
	
var windowWidth = $(window).width();
var windowSm = 600;
if (windowWidth <= windowSm) {
    $(function(){});
} else {
	
	
function smartRollover() {
    if(document.getElementsByTagName) {
        var images = document.getElementsByTagName("img");
 
        for(var i=0; i < images.length; i++) {
            if(images[i].getAttribute("src").match("_off."))
            {
                images[i].onmouseover = function() {
                    this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
                }
                images[i].onmouseout = function() {
                    this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
                }
            }
        }
    }
}
 
if(window.addEventListener) {
    window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
    window.attachEvent("onload", smartRollover);
}
 
 
// cross fade
 
new function(){
  function setRollOver2(){
    if(!document.images){return;}
    var imgs = document.images;
    var insert = [];
    for(var i=0;i<imgs.length;i++){
      var splitname = imgs[i].src.split('_off.');
      if((splitname[1])&&(imgs[i].parentNode.tagName=='A')){
        var rolloverImg = document.createElement('img');
        rolloverImg.src = splitname[0]+'_on.'+splitname[1];
        var alpha = 0;
        rolloverImg.currentAlpha = alpha;
        rolloverImg.style.opacity = alpha/100;
        rolloverImg.style.filter = 'alpha(opacity='+alpha+')';
        rolloverImg.style.position = 'absolute';
 
 
        addEvent(rolloverImg,'mouseover',function(){setFader(this,100);});
        addEvent(rolloverImg,'mouseout',function(){setFader(this,0);});
 
        insert[insert.length] = {position:imgs[i],element:rolloverImg};
      }
    }
    for(var i=0;i<insert.length;i++){
      var parent = insert[i].position.parentNode;
      parent.insertBefore(insert[i].element,insert[i].position);
    }
  }
 
 
  function setFader(targetObj,targetAlpha){
    targetObj.targetAlpha = targetAlpha;
    if(targetObj.currentAlpha==undefined){
      targetObj.currentAlpha = 100;
    }
    if(targetObj.currentAlpha==targetObj.targetAlpha){
      return;
    }
    if(!targetObj.fading){
      if(!targetObj.fader){
        targetObj.fader = fader;
      }
      targetObj.fading = true;
      targetObj.fader();
    }
  }
 
  function fader(){
    this.currentAlpha += (this.targetAlpha - this.currentAlpha)*0.2;
    if(Math.abs(this.currentAlpha-this.targetAlpha)<1){
      this.currentAlpha = this.targetAlpha;
      this.fading = false;
    }
    var alpha = parseInt(this.currentAlpha);
    this.style.opacity = alpha/100;
    this.style.filter = 'alpha(opacity='+alpha+')';
    if(this.fading){
      var scope = this;
      setTimeout(function(){fader.apply(scope)},30);
    }
  }
 
  function addEvent(eventTarget, eventName, func){
    if(eventTarget.addEventListener){
      eventTarget.addEventListener(eventName, func, false);
    }else if(window.attachEvent){
      // IE
      eventTarget.attachEvent('on'+eventName, function(){func.apply(eventTarget);});
    }
  }
 
  addEvent(window,'load',setRollOver2);
 
}

}
})(jQuery);

//鬮倥＆閾ｪ蜍戊ｪｿ遽

(function($){

/*!--------------------------------------------------------------------------*
 *  
 *  jquery.heightLine.js
 *  
 *  MIT-style license. 
 *  
 *  2013 Kazuma Nishihata 
 *  http://www.to-r.net
 *  
 *--------------------------------------------------------------------------*/
	$.fn.heightLine = function(){
		var target = this,fontSizeChangeTimer,windowResizeId= Math.random();
		var heightLineObj = {
			op : {
				"maxWidth" : 10000,
				"minWidth" : 0,
				"fontSizeCheck" : false
			},
			setOption : function(op){
				this.op = $.extend(this.op,op);
			},
			destroy : function(){
				target.css("height","");
			},
			create : function(op){
				var self = this,
					maxHeight = 0,
					windowWidth = $(window).width();
				self.setOption(op);
				if( windowWidth<=self.op.maxWidth && windowWidth>=self.op.minWidth ){
					target.each(function(){
						if($(this).outerHeight()>maxHeight){
							maxHeight = $(this).outerHeight();
						}
					}).each(function(){
						var height = maxHeight
								   - parseInt($(this).css("padding-top"))
								   - parseInt($(this).css("padding-bottom"));
						$(this).height(height);
					});
				}
			},
			refresh : function(op){
				this.destroy();
				this.create(op);
			},
			removeEvent :function(){
				$(window).off("resize."+windowResizeId);
				target.off("destroy refresh");
				clearInterval(fontSizeChangeTimer);
			}
		}
		if(typeof arguments[0] === "string" && arguments[0] === "destroy"){
			target.trigger("destroy");
		}else if(typeof arguments[0] === "string" && arguments[0] === "refresh"){
			target.trigger("refresh");
		}else{
			heightLineObj["create"](arguments[0]);
			
			$(window).on("resize."+windowResizeId,function(){
				heightLineObj["refresh"]();
			});

			target.on("destroy",function(){
				heightLineObj["removeEvent"]();
				heightLineObj["destroy"]();
			}).on("refresh",function(){
				heightLineObj["refresh"]();
			});

			if(heightLineObj.op.fontSizeCheck){
				
				if($("#fontSizeChange").length<=0){
					var fontSizeChange = $("<span id='fontSizeChange'></span>").css({
						width:0,
						height:"1em",
						position:"absolute",
						left:0,
						top:0
					}).appendTo("body");
				}
				var defaultFontSize = $("#fontSizeChange").height();
				fontSizeChangeTimer = setInterval(function(){
					if(defaultFontSize != $("#fontSizeChange").height()){
						heightLineObj["refresh"]();
					}
				},100);
			}
		}
		return target;
	}
	
})(jQuery);	

	


//髮ｻ隧ｱ繝ｪ繝ｳ繧ｯ繧担P縺�縺代↓縺､縺代ｋ

(function($){
	
$(function(){
	var device = navigator.userAgent;
	if((device.indexOf('iPhone') > 0 && device.indexOf('iPad') == -1) || device.indexOf('Android') > 0){
		$(".tellink1").wrap('<a href="tel:072-852-3961"></a>');
	}

	var device = navigator.userAgent;
	if((device.indexOf('iPhone') > 0 && device.indexOf('iPad') == -1) || device.indexOf('Android') > 0){
		$(".tellink2").wrap('<a href="tel:072-840-7221"></a>');
	}
});

})(jQuery);	

(function($){
$(function(){
  // 笘�莉ｻ諢上�繧ｺ繝ｬ鬮倥＆繝斐け繧ｻ繝ｫ謨ｰ繧貞�蜉帙竊�
	var headerHight =60;
   // #縺ｧ蟋九∪繧九い繝ｳ繧ｫ繝ｼ繧偵け繝ｪ繝�け縺励◆蝣ｴ蜷医↓蜃ｦ逅�
   jQuery('a[href^=#]').not('#tabs a , #tabs_b a , a[href^=#footer_ct1_r]').click(function() {
	  // 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ騾溷ｺｦ
	  var speed = 400; // 繝溘Μ遘�
	  // 繧｢繝ｳ繧ｫ繝ｼ縺ｮ蛟､蜿門ｾ�
	  var href= jQuery(this).attr("href");
	  // 遘ｻ蜍募�繧貞叙蠕�
	  var target = jQuery(href == "#" || href == "" ? 'html' : href);
	  // 遘ｻ蜍募�繧呈焚蛟､縺ｧ蜿門ｾ�
	  var position = target.offset().top-headerHight; // 窶ｻ縲-headerHight縺ｧ繧ｺ繝ｬ縺ｮ蜃ｦ逅�
	  // 繧ｹ繝�繝ｼ繧ｺ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
	  jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
	  return false;
   });
});
})(jQuery);	

(function($){
	
$(document).ready(function(){
 
    $(".go_top").hide();
     // 竊代�繝ｼ繧ｸ繝医ャ繝励�繧ｿ繝ｳ繧帝撼陦ｨ遉ｺ縺ｫ縺吶ｋ
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
            // 竊� 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ菴咲ｽｮ縺�100繧医ｊ繧ょｰ上＆縺��ｴ蜷医↓莉･荳九�蜃ｦ逅�ｒ縺吶ｋ
                $('.go_top').slideDown("fast");
                // 竊� (100繧医ｊ蟆上＆縺�凾縺ｯ)繝壹�繧ｸ繝医ャ繝励�繧ｿ繝ｳ繧偵せ繝ｩ繧､繝峨ム繧ｦ繝ｳ
            } else {
                $('.go_top').slideUp("fast");
                // 竊� 縺昴ｌ莉･螟悶�蝣ｴ蜷医�蝣ｴ蜷医�繧ｹ繝ｩ繧､繝峨い繝��縺吶ｋ
            }
        });
         
// 繝輔ャ繧ｿ繝ｼ蝗ｺ螳�
 
    $(window).bind("scroll", function() {
 
        scrollHeight = $(document).height();
        // 繝峨く繝･繝｡繝ｳ繝医�鬮倥＆
        scrollPosition = $(window).height() + $(window).scrollTop();
        //縲繧ｦ繧｣繝ｳ繝峨え縺ｮ鬮倥＆+繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆鬮倥＆竊偵迴ｾ蝨ｨ縺ｮ繝医ャ繝励°繧峨�菴咲ｽｮ
        footHeight = $("#foot_ct02").innerHeight();
        // 繝輔ャ繧ｿ繝ｼ縺ｮ蜀��縺ｮ鬮倥＆
                 
        if ( scrollHeight - scrollPosition  <= footHeight ) {
        // 迴ｾ蝨ｨ縺ｮ荳九°繧峨�菴咲ｽｮ縺後√ヵ繝�ち繝ｼ縺ｮ鬮倥＆縺ｮ菴咲ｽｮ縺ｫ縺ｯ縺�▲縺溘ｉ
            $(".go_top").css({ 
				position: "absolute",
				bottom: footHeight + 30,
				right: "35px"
			});
        } else {
        // 縺昴ｌ莉･螟悶�蝣ｴ蜷医�蜈��css繧ｹ繧ｿ繧､繝ｫ繧呈欠螳�
            $(".go_top").css({
                "position":"fixed",
                "bottom": "30px",
				"right": "35px"
            });
        }
    });
    });
 
});	

})(jQuery);	
	

(function($){
	
//繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺吶ｋ縺ｨ荳企Κ縺ｫ蝗ｺ螳壹＆縺帙ｋ縺溘ａ縺ｮ險ｭ螳壹ｒ髢｢謨ｰ縺ｧ縺ｾ縺ｨ繧√ｋ
function FixedAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){//荳翫°繧�200px繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆繧�
		$('#head_ct').addClass('fixed');
	}else{
		$('#head_ct').removeClass('fixed');
	}
}

function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){//荳翫°繧�200px繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆繧�
		$('#page-top').removeClass('DownMove');//#page-top縺ｫ縺､縺�※縺�ｋDownMove縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ髯､縺�
		$('#page-top').addClass('UpMove');//#page-top縺ｫ縺､縺�※縺�ｋUpMove縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ莉倅ｸ�
	}else{
		if($('#page-top').hasClass('UpMove')){//縺吶〒縺ｫ#page-top縺ｫUpMove縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪′縺､縺�※縺�◆繧�
			$('#page-top').removeClass('UpMove');//UpMove縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ髯､縺�
			$('#page-top').addClass('DownMove');//DownMove縺ｨ縺�≧繧ｯ繝ｩ繧ｹ蜷阪ｒ#page-top縺ｫ莉倅ｸ�
		}
	}
}

// 逕ｻ髱｢繧偵せ繧ｯ繝ｭ繝ｼ繝ｫ繧偵＠縺溘ｉ蜍輔°縺励◆縺��ｴ蜷医�險倩ｿｰ
$(window).scroll(function () {
	PageTopAnime();
	FixedAnime();
});
	
})(jQuery);

(function($){
  // display繝励Ο繝代ユ繧｣縺ｮ蛟､縺系one縺ｧ縺ｯ縺ｪ縺�怙蠕後�蟄占ｦ∫ｴ�縺ｫ繧ｯ繝ｩ繧ｹ繧定ｿｽ蜉�縺吶ｋ髢｢謨ｰ
  function visible_last_child() {
    // .visible-last 繧剃ｸ弱∴繧峨ｌ縺溯ｦ∫ｴ�(ul)繧貞叙蠕�
    var elements = document.getElementsByClassName('visible-last');
    // 隕∫ｴ�(ul)縺ｮ謨ｰ繧貞叙蠕�
    var l = elements.length;
    // for 繝ｫ繝ｼ繝怜�逅�畑縺ｮ螟画焚繧貞ｮ｣險
    var element, children, c, child, target;
    // .visible-last 繧剃ｸ弱∴繧峨ｌ縺溯ｦ∫ｴ�(莉雁屓縺ｯul隕∫ｴ�縺ｫ謖�ｮ�)繧貞句挨縺ｫ蜿門ｾ励☆繧九◆繧√�繝ｫ繝ｼ繝�
    for (var i = 0; i < l; ++i) {
      // 蛟句挨縺ｮ隕∫ｴ�(ul)繧貞叙蠕�
      element = elements[i];
      // 蟄占ｦ∫ｴ�(li)繧貞叙蠕�
      children = element.children;
      // 蟄占ｦ∫ｴ�(li)縺ｮ謨ｰ繧貞叙蠕�
      c = children.length;
      // 蟄占ｦ∫ｴ�(li)繧貞句挨縺ｫ蜿門ｾ励☆繧九◆繧√�繝ｫ繝ｼ繝�
      for (var j = 0; j < c; ++j) {
        // 蟄占ｦ∫ｴ�(li)繧貞句挨縺ｫ蜿門ｾ�
        child = children[j];
        // display繝励Ο繝代ユ繧｣縺ｮ蛟､縺系one莉･螟悶�蟄占ｦ∫ｴ�繧貞叙蠕�
        if (child.style.display !== 'none') {
          // 螟画焚target縺ｫ蟄占ｦ∫ｴ�繧剃ｻ｣蜈･
          target = child;
        }
      }
      // 螟画焚target縺ｫ譛蠕後↓莉｣蜈･縺輔ｌ縺溯ｦ∫ｴ�縺ｫ繧ｯ繝ｩ繧ｹ繧定ｿｽ蜉�
      // 莉悶�繧ｯ繝ｩ繧ｹ縺後≠繧九→縺阪�繧ｹ繝壹�繧ｹ繧堤ｩｺ縺代※.last-child繧定ｿｽ蜉�
      if (target.className) {
        target.className = target.className + ' last-child';
      // 莉悶↓繧ｯ繝ｩ繧ｹ縺後↑縺�→縺阪�縺昴�縺ｾ縺ｾ.last-child繧定ｿｽ蜉�
      } else {
        target.className = 'last-child';
      }
    }
  }
  // DOM繧定ｪｭ縺ｿ霎ｼ縺ｿ邨ゅ∴縺溘→縺阪↓visible_last_child()繧貞ｮ溯｡�
  document.addEventListener('DOMContentLoaded', visible_last_child, false);

}());

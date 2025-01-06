"use strict";

var flag = '';
// 逕ｻ髱｢繧ｵ繧､繧ｺ縺ｮ蛻､螳�
function windowSize() {
    // 逕ｻ髱｢蟷�叙蠕�
    var w = $(window).innerWidth();
 
    // 逕ｻ髱｢蟷�767莉･荳具ｼ医ヵ繝ｩ繧ｰ縺茎p縺ｧ縺ｯ縺ｪ縺�凾��
    if (w <= 640 && flag != 'sp') {
        flag = 'sp';
		// sp譎ゅ�蜃ｦ逅�ｒ縺薙％縺ｫ譖ｸ縺�
      $(".gnav_list_in").on("click", function () {
		$(this).next().slideToggle();
		$(this).toggleClass("clicked")
	  })
		
		var gnav_btn = document.getElementById("gnav_btn");
		var gnav_wrap = document.getElementById("gnav_wrap");
		var gnav_btn_txt = document.getElementById("gnav_btn_txt");
		var body = document.querySelector("body");
		gnav_btn.addEventListener("click", function (a) {
		  a.preventDefault();
		  gnav_wrap.classList.toggle("visible");
		  gnav_btn.classList.toggle("clicked");
		  body.classList.toggle("fixed");
		  if (gnav_btn.classList.contains("clicked")) {
			gnav_btn_txt.textContent = "髢峨§繧�"
		  } else {
			gnav_btn_txt.textContent = "繝｡繝九Η繝ｼ"
		  }
		});
		var gnav_bg = document.getElementById("gnav_bg");
		gnav_bg.addEventListener("click", function () {
		  gnav_wrap.classList.toggle("visible");
		  gnav_btn.classList.toggle("clicked");
		  body.classList.toggle("fixed");
		  if (gnav_btn.classList.contains("clicked")) {
			gnav_btn_txt.textContent = "髢峨§繧�"
		  } else {
			gnav_btn_txt.textContent = "繝｡繝九Η繝ｼ"
		  }
		});
		var gnav_list_childs = document.querySelectorAll(".gnav_list_child > a");
		var gnav_list_childs_arr = Array.prototype.slice.call(gnav_list_childs);
		gnav_list_childs_arr.forEach(function (a) {
		  a.addEventListener("click", function (b) {
			gnav_wrap.classList.toggle("visible");
			gnav_btn.classList.toggle("clicked");
			body.classList.toggle("fixed");
			if (gnav_btn.classList.contains("clicked")) {
			  gnav_btn_txt.textContent = "髢峨§繧�"
			} else {
			  gnav_btn_txt.textContent = "繝｡繝九Η繝ｼ"
			}
		  })
		});
		var gnav_list_grandchilds = document.querySelectorAll(".gnav_list_grandchild > a");
		var gnav_list_grandchilds_arr = Array.prototype.slice.call(gnav_list_grandchilds);
		gnav_list_grandchilds_arr.forEach(function (a) {
		  a.addEventListener("click", function (b) {
			gnav_wrap.classList.toggle("visible");
			gnav_btn.classList.toggle("clicked");
			body.classList.toggle("fixed");
			if (gnav_btn.classList.contains("clicked")) {
			  gnav_btn_txt.textContent = "髢峨§繧�"
			} else {
			  gnav_btn_txt.textContent = "繝｡繝九Η繝ｼ"
			}
		  })
		});
		var gnav_list_wrap_ins = document.querySelectorAll(".gnav_list_in > a");
		var gnav_list_wrap_ins_arr = Array.prototype.slice.call(gnav_list_wrap_ins);
		gnav_list_wrap_ins_arr.forEach(function (a) {
		  a.addEventListener("click", function (b) {
			gnav_wrap.classList.toggle("visible");
			gnav_btn.classList.toggle("clicked");
			body.classList.toggle("fixed");
			if (gnav_btn.classList.contains("clicked")) {
			  gnav_btn_txt.textContent = "髢峨§繧�"
			} else {
			  gnav_btn_txt.textContent = "繝｡繝九Η繝ｼ"
			}
		  })
		});

      // 逕ｻ髱｢蟷�768莉･荳奇ｼ医ヵ繝ｩ繧ｰ縺継c縺ｧ縺ｯ縺ｪ縺�凾��
    } else if (w > 641 && flag != 'pc') {
        flag = 'pc';
      //$(document).ready( function(){
		//if (window.name != "reload") {
			//location.reload();
			//window.name = "reload";
		//} else {
			//window.name = "";
		//}
	//});
		
	$(function(){
		$('.gnav_list').hover(function(){
			$("ul:not(:animated)", this).fadeIn();
		}, function(){
			$("ul.gnav_li_child",this).fadeOut();
		});
	});
		
    }
}
$(function() {
    // 逕ｻ髱｢繧ｵ繧､繧ｺ縺ｮ繝√ぉ繝�け
    $(window).on('load resize', function() {
        windowSize();
    });
});

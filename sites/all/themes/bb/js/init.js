Drupal.behaviors.init = {
	attach: function (context, settings) {
		var is_ie = false;

		if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { 
		 var ieversion = new Number(RegExp.$1);
		 	if (ieversion <= 8){
		  		jQuery('#ie-warning').show();
		  		is_ie = true;
			}
		}

		function closeIEWarning(){
			jQuery('#ie-warning').hide();
		}

		jQuery('#close-warning').click(function(){
			closeIEWarning();
		});
		


		// SERVICE LINKS TOGGLE
		jQuery('.footer .share h3').click(function(){

			jQuery(this).next().slideToggle();
			return false;

		});

		// COMMENT FORM
		jQuery('.add-comment-btn').click(function(){
			jQuery('.comment-form-holder').slideToggle();
		});
			

		// MOBILE STUFF
		jQuery('.menu-toggle').click(function(){
			jQuery('#nav').stop(false, true).slideToggle();
		});

		jQuery(window).resize(function(){

			windowResized();
		});


		var theWindow        =jQuery(window),
	    $bg              = jQuery(".field-name-field-background-image img"),
	    aspectRatio      = $bg.width() / $bg.height();
		
		function windowResized(){
			
			var win_w = jQuery(window).width();
			var win_h = jQuery(window).height();

			if(win_w < 700){
				jQuery('body').addClass('mobile');
			}else{
				jQuery('body').removeClass('mobile');
			}

			if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
			    $bg
			    	.removeClass()
			    	.addClass('bgheight');
			} else {
			    $bg
			    	.removeClass()
			    	.addClass('bgwidth');
			}

			//console.log(win_w);
		}

		windowResized();
		if(jQuery('body').hasClass('mobile') && jQuery('body').hasClass('front')){
			window.location.replace("/welcome"); 
		}
	}
}

Drupal.behaviors.intro = {
	attach: function (context, settings) {
		var is_ie = false;

		if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { 
		 var ieversion = new Number(RegExp.$1);
		 	if (ieversion <= 8){
		  		is_ie = true;
			}
		}


		if(jQuery('body').hasClass('front')){
			jQuery('#logo').hide().fadeIn(3000);
			jQuery('h1').hide().delay(500).fadeIn(3000);
			jQuery('#enter').hide().delay(1000).fadeIn(3000);
			

		}

		var items =  jQuery('.front .images .image-holder');
		var total_items = items.length;
		var current_item = 0;
		var last_item = 0;
		var trans_speed = 3000;
		var zoom_speed = 13000;
		var border = 50;
		
		
		// Process images
		jQuery(items).each(function(index) {
		   var $this = jQuery(this)
		   $this.addClass('item-' + index).hide();
		  
		   if(index == 0 && !is_ie){
		   	$this.delay(2000).fadeIn(trans_speed);
		   	jQuery('.image', this).css({'width' : '100%', 'height' : '100%', top : '0', left : '0'}).animate({'width' : '110%', 'height' : '110%', top : '-5%', left : '-5%'}, { duration: zoom_speed, easing : 'linear' });
		   }else if(index == 0){
		   	$this.delay(2000).fadeIn(trans_speed);
		   }
		});
		
		
		// gallery functions
		function nextImage(){
			last_item = current_item;
			current_item++;
			if(current_item == total_items){
				current_item = 0;
			}
			fadeItems();
		}
		

		function fadeItems(){
			if(!jQuery('body').hasClass('mobile')){
				if(last_item != current_item){
					jQuery(' .item-' + current_item).fadeIn(trans_speed);
					jQuery(' .item-' + current_item + ' .image').css({'width' : '100%', 'height' : '100%', top : '0', left : '0'}).animate({'width' : '110%', 'height' : '110%', top : '-5%', left : '-5%'}, { duration: zoom_speed, easing : 'linear' });
					
					jQuery(' .item-' + last_item).fadeOut(trans_speed);
				}			
			}
		}

		var slide_show;
		if(!jQuery('body').hasClass('mobile') && jQuery('body').hasClass('front') && !is_ie){
			setTimeout(init_intro, 2000);
		}

		function init_intro(){
			slide_show = setInterval(nextImage, 10000);
		}


	 }
}



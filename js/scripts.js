$(function() {
	function newsSlider() {
		var enabled = false;
		$(window).on('resize', function() {
			var size = $('.news-i .core ul li').size();
			var width = $('.news-i .core ul li').outerWidth();
			var quantity = $('.news-i .core ul li').size();
			if  ( Modernizr.mq('(max-width:1000px)') && Modernizr.mq('(min-width:701px)') ) {
				var max = quantity-2;
			} else if ( Modernizr.mq('(max-width:700px)') ) {
				var max = quantity-1;
			} else {
				var max = quantity-3;
			}
			if ( enabled ) {
				$('.news-i .drag').slider('destroy');
				$('.news-i .core ul').css({
					'margin-left': 0
				})
			}
			$('.news-i .drag').slider({
				min: 0,
				max: max,
				slide: function(event,ui) {
					$('.news-i .core ul').stop().animate({
						'margin-left': -ui.value*width+'px'
					}, 500);
				},
				change: function(event,ui) {
					$('.news-i .core ul').stop().animate({
						'margin-left': -ui.value*width+'px'
					}, 500);
					console.log('asd');
				}
			});
			enabled = true;
		});
		$('.news-i .core').on('swipeleft', function() {
			var t = $('.news-i .drag');
			t.slider('value',t.slider('value')+1);
		});
		$('.news-i .core').on('swiperight', function() {
			var t = $('.news-i .drag');
			t.slider('value',t.slider('value')-1);
		});
	}
	newsSlider();
	$('.img-bg').each(function() {
		$(this).parent().css({
			'background': 'url("'+$(this).attr('src')+'") no-repeat center center',
			'background-size': 'cover'
		});
	});
	$('.introduction-i').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		dots: true,
		draggable: true,
		autoplay: true,
  	autoplaySpeed: 5000,
	});
	$('.statistics-i ul li').each(function() {
		var t = $(this);
		t.find('div').circleProgress({
				value: eval(t.find('div').attr('data')),
				size: 147,
				lineCap: 'round',
				startAngle: -Math.PI/2,
				thickness: 6,
				emptyFill: 'transparent',
				fill: { color: '#f5a623' },
				animation: { duration: 1500 }
		});
		t.find('.count').counterUp({
			delay: 10,
			time: 1000
		});
	});
	$('.map-i .lc .core').jScrollPane({
		verticalDragMinHeight: 49,
    verticalDragMaxHeight: 49
	});
	$('.content-b .lc .nav > li > ul').siblings('a').on('click', function(e) {
		e.preventDefault();
		$(this).parent().toggleClass('active');
	});
	$('.fancybox-media').fancybox({
		padding: 0,
		helpers: {
			media: {},
			overlay: {
				locked: false
			}
		}
	});
	$('.fancybox-photo').fancybox({
		padding: 0,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
	var isMobile = false;
	var justSwitched = false;
	function detectDevice() {
		var temp = isMobile;
		if ( Modernizr.mq('(max-width:1000px)') ) {
			isMobile = true;
		} else {
			isMobile = false;
		}
		if ( temp == isMobile ) {
			justSwitched = false;
		} else {
			justSwitched = true;
		}
	}
	function showMobileMenu() {
		$('body').addClass('is-locked');
		$('.mobile-drop').addClass('is-active');
		$('.fade-bg').stop().fadeIn(300);
	}
	function hideMobileMenu() {
		$('body').removeClass('is-locked');
		$('.mobile-drop').removeClass('is-active');
		$('.fade-bg').stop().fadeOut(300);
	}
	$(window).on('load resize', function() {
		detectDevice();
		if ( justSwitched ) {
			if ( isMobile ) {
				$('.video-i').detach().insertAfter('.news-i');
				$('header > div').append('<span class="menu-mobile"></span>');
				$('body').append('<span class="mobile-drag"></span>');
				$('body').append('<div class="mobile-drop"></div>');
				$('header .logo, nav').clone().appendTo($('.mobile-drop'));
				$('.panel .nav').clone().appendTo($('.mobile-drop'));
				$('.mobile-drop nav ul ul').each(function() {
					$(this).siblings().addClass('has-sub');
				});
				$('.mobile-drop a.has-sub').on('click', function(e) {
					e.preventDefault();
					$(this).toggleClass('is-active');
				});
				$('.menu-mobile').on('click', function(e) {
					e.preventDefault();
					showMobileMenu();
				});
				$('.fade-bg').on('click', function(e) {
					e.preventDefault();
					hideMobileMenu();
				});
				$('.mobile-drop').on('swipeleft', function(e) {
					e.preventDefault();
					hideMobileMenu();
				});
				$('.mobile-drag').on('swiperight', function(e) {
					e.preventDefault();
					showMobileMenu();
				});
				$('.map-i .lc').detach().insertAfter('.map-i .rc');
			} else {
				$('.video-i').detach().insertAfter('.statistics-i');
				$('.mobile-drop, .menu-mobile').remove();
				$('.map-i .lc').detach().insertBefore('.map-i .rc');
			}
		}
	});
	$(window).trigger('resize');
});

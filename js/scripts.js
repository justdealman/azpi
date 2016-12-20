$(function() {
	var size = $('.news-i .core ul li').size();
	var width = $('.news-i .core ul li').outerWidth();
	$('.news-i .drag').slider({
		min: 0,
		max: eval($('.news-i .core ul li').size()-3),
		slide: function (event,ui) {
			$('.news-i .core ul').stop().animate({
				'margin-left': -ui.value*width+'px'
			}, 500);
		}
	});
});
$(function() {
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
});

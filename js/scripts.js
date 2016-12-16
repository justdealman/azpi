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
	$('.map-i .lc .core').jScrollPane({
		verticalDragMinHeight: 49,
    verticalDragMaxHeight: 49
	});
	$('.content-b .lc .nav > li > ul').siblings('a').on('click', function(e) {
		e.preventDefault();
		$(this).parent().toggleClass('active');
	})
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

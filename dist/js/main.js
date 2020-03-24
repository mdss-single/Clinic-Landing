(function($){
	"use strict";

	$('.js-menu').click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		showMenu();
	});
	$(document).click(function(e) {
		if (!$(e.target).closest('.menu').length) {
			hideMenu();
		}
	});

	$('.js-reviews').flickity({
		wrapAround: true,
		prevNextButtons: false,
	});

	function showMenu() {
		$('html').addClass('no-scroll');
		$('.menu').addClass('menu--active');
		if (!$('.menu__cover').length) $('body').prepend('<div class="menu__cover"></div>');
	}

	function hideMenu() {
		$('.menu').removeClass('menu--active');
		if ($('.menu__cover').length) $('.menu__cover').remove();
		if ($('html').hasClass('no-scroll')) $('html').removeClass('no-scroll');
	}

})(jQuery);
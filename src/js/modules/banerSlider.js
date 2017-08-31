var banerSlider = (function($) {

	'use strict';

	function init() {
		if (!$('.baner__slider').length) return;

		$('.baner__slider').not('.slick-initialized').slick({
			arrows: false,
			dots: true,
			infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear'
		});
	}

	return {
		init: init
	};
}(jQuery));

export default banerSlider;
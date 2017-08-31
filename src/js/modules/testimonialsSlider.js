var testimonialsSlider = (function($) {
	'use strict';

	function init() {
		if (!$('.testimonials__slider').length) return;

		$('.testimonials__slider').not('.slick-initialized').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			slide: '.testimonials__slide',
			asNavFor: '.testimonials__slider-nav',
			arrows: false,
			fade: true
		});
		$('.testimonials__slider-nav').not('.slick-initialized').slick({
			mobileFirst: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows: true,
			slide: '.testimonials__slide-link',
			asNavFor: '.testimonials__slider',
			centerMode: true,
			focusOnSelect: true,
			infinite: true,
			centerPadding: '0px',
			prevArrow: '<div class="testimonials__slider-prev"><i class="icon-arrow-left">left</i></div>',
			nextArrow: '<div class="testimonials__slider-next"><i class="icon-arrow-right">right</i></div>'
		});
	}

	return {
		init: init
	};
}(jQuery));

export default testimonialsSlider;
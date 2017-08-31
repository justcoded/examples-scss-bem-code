var validationForm = (function($) {

	'use strict';

	function init() {
		if (!$('.contact__form').length) return;

		$(".contact__form").validate({
			debug: true,
			errorClass: "contact__invalid",
			validClass: "contact__success",
			errorPlacement: $.noop,
			highlight: function(element, errorClass, validClass) {
				$(element).parents(".contact__row").addClass(errorClass);
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).parents(".contact__invalid").removeClass(errorClass);
			},
			submitHandler: function(form) { 
				$('.contact__form').addClass('contact__success');
			}
		});
	}

	return {
		init: init
	};
}(jQuery));

export default validationForm;
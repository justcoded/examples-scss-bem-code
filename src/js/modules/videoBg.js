var videoBg = (function($) {

	'use strict';

	function init() {
		if (!$('.video__container').length) return;

		$(".video__play").click(function() {
			$(this).parents(".video").toggleClass("video_active");
		});
		var vid = document.getElementById("video__bg");
		var pauseButton = document.querySelector(".video__play");

		if (window.matchMedia('(prefers-reduced-motion)').matches) {
			vid.removeAttribute("autoplay");
			vid.pause();
		}

		vid.addEventListener('ended', function()
		{
			vid.pause();
			vidFade();
		}); 

		pauseButton.addEventListener("click", function() {

			if (vid.paused) {
				vid.play();
			} else {
				vid.pause();
			}
		});
		
	}

	return {
		init: init
	};
}(jQuery));

export default videoBg;
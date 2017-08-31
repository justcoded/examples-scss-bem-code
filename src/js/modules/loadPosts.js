var loadPost = (function($) {

	'use strict';

	function init() {

		$('.works__btn').click(function () {

			var jsonURL = "inc/post.json";
			var postsHolder = ".works";

			$.getJSON(jsonURL, function (json) {
				var imgList= "";

				$.each(json.items, function () {
					imgList += '<li class="works__post"><img class="works__img" src= "' + this.imgPath + '"></li>';
				});

				$(imgList ).hide().appendTo('.works__wrap-post').fadeIn(1000);

			});
			$( document ).ajaxSuccess(function( event, request, settings ) {
				$(postsHolder).addClass('works_hidden-btn');
			});
		});
	}

	return {
		init: init
	};
}(jQuery));

export default loadPost;
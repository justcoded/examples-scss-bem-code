import headerNav from './modules/nav';
import banerSlider from './modules/banerSlider';
import loadPost from './modules/loadPosts';
import videoBg from './modules/videoBg';
import testimonialsSlider from './modules/testimonialsSlider';
import validationForm from './modules/validationForm';

(function ($, $wnd, $body, $doc) {

	$(function () {
		headerNav.init();
		banerSlider.init();
		loadPost.init();
		testimonialsSlider.init();
		videoBg.init();
		validationForm.init();
	});

}(jQuery, $(window), $('body'), $(document)));

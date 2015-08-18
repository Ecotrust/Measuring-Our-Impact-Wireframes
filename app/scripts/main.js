$(function () {
	$('#sidebar').affix({
		  offset: {
			//top: $('.navbar-fixed-top').height()
			//top: $('.navbar-fixed-top').offset().top
			top: $('main').offset().top + 10
		  }
	});
});



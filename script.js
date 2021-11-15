$(function () {
    $('div.special-for-you__menu').on('click', 'a:not(.active)', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
	
	$(".check-games").click(function(){
		$("html, body").animate({scrollTop: $(".offer").height() + 400 },"slow");
		return false;
	});
	
	$(".to-start").click(function(){
		$("html, body").animate({scrollTop: 0}, "slow");
		return false;
	});
	
});
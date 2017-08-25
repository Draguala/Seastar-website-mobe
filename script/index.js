$(function(){
	$(".menu_btn").click(function(e){
		e.stopPropagation();
		if($(this).hasClass('close_btn'))
		{
			$(".right_menu").removeClass('show');
			$(this).removeClass('close_btn');
		}
		else{
			$(".right_menu").addClass('show');
			$(this).addClass('close_btn');
		}
	});
	$(".right_menu,.back_btn").click(function(e){
		e.stopPropagation();
	});
	$("body").click(function(){
		if($(".menu_btn").hasClass('close_btn'))
		{
			$(".right_menu").removeClass('show');
			$(".menu_btn").removeClass('close_btn');
		}
	});
	if($(".news_banner").length>0)
	{
		var mySwiper = new Swiper ('.news_banner', {
		    direction: 'horizontal',
		    loop: true,
			autoplay:4000,
		    // 如果需要分页器
		    pagination: '.news_banner .swiper-pagination',
		});
	}
	if($(".home_banner").length>0){
		var myswiper2 = new Swiper ('.home_banner', {
		    direction: 'horizontal',
		    loop: true,
			autoplay:4000,
			effect:'fade'
		    // 如果需要分页器
		});
	}

});

function resetGame(){
	$('.section.game').addClass("nft");
	$('.section.game').removeClass("charter").removeClass("media");
	$('.tabs li:nth-child(2) a').click();
}
function resetEvent(){
	$('.section.event').addClass("event1");
	$('.section.event').removeClass("event2").removeClass("event3");
	$('.tabs li:nth-child(2) a').click();
}
function resetMenu(num){
	$('.menu_ui li').removeClass("active");
	$('.menu_ui .m'+num+'').addClass("active");
}
function mainJs(){
	$('.header .side').hide();
	$('#myContainer').fullpage({
		anchors: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6'],
		menu: '#dotId',
		slidesNavigation: true,
		scrollOverflow: true,
		scrollOverflowReset: true,
		scrollingSpeed: 600,
		verticalCentered: false,
		//responsiveWidth: 900,
		//responsiveHeight: 600,
		scrollHorizontally: true,
		recordHistory: false,
		easingcss3: 'cubic-bezier(0.65, 0, 0.35, 1)',
		afterLoad: function(anchorLink, index){
			if (anchorLink == 'sec5'){//event
				resetMenu(index);
				resetGame();
			}else if(anchorLink == 'sec3'){//game
				resetMenu(index);
				resetEvent();
			}else{
				resetMenu(index);
				resetGame();resetEvent();
			}
	  },
	   onLeave: function(index, nextIndex, direction){
			$('.fp-scrollable').each(function() {
			var iScrollInstance = $(this).data('iscrollInstance');
			iScrollInstance.scrollTo(0,0, 2000);
		});

	  }
	});

	 var hash = window.location.hash.replace("#", "");
	 if (hash == 'sec2')
	 {
		$.fn.fullpage.moveTo('sec2');
	 }else if(hash == 'sec3')
	 {
		 $.fn.fullpage.moveTo('sec3');
	 }else if(hash == 'sec4')
	 {
		 $.fn.fullpage.moveTo('sec4');
	 }else if(hash == 'sec5')
	 {
		 $.fn.fullpage.moveTo('sec5');
	 }else if(hash == 'sec6')
	 {
		 $.fn.fullpage.moveTo('sec6');
	 }else{
		$.fn.fullpage.moveTo('sec1');
	 }

	var sliderCha = $('#characterSlider').slick({
	  autoplay: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  speed: 20,
	  fade: true,
	  arrows: false,
	  dots: false,  
	  asNavFor: '.slider-nav'
	});
	var sliderChaNav = $('.slider-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  arrows: false,
	  focusOnSelect: true,
	  variableWidth: true
	});
	sliderCha.on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.slider-for .slick-slide .item').removeClass('active');
		$('.slider-for .slick-current .item').addClass('active');
	});

	$('#charter .link_g a').click(function(){
		$('.charter_views').show();
		var initialSlide = $(this).parent().index();
		if (initialSlide !== 0)
		{
			sliderCha.slick('slickGoTo', initialSlide, true );
			sliderChaNav.slick('slickGoTo', initialSlide, true );
		}else{
			sliderCha.slick('refresh');
			sliderChaNav.slick('refresh');
			$('.slider-for .slick-current .item').addClass('active');
		}

		setTimeout(function() {
		 $('.charter_views').addClass('open');
		}, 20);

	});

	$('.charter_views .close').click(function(){
		$('.charter_views').removeClass('open');
		setTimeout(function() {
			$('.charter_views').hide();
		}, 50);
	});

	var sliderEmved = $('.media_embed').slick({
	  autoplay: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  speed: 300,
	  //fade: true,
	  arrows: true,
	  dots: true
	});

	$(".tabs li a").click(function(){
		 setTimeout(function() {
		   $.fn.fullpage.reBuild();
		}, 200);
	});

	$(".event .tabs li:nth-child(2) a").click(function(){
		var ytvsrc = $('.event2_2 iframe').attr('data-atr');
		$('.event2_2 iframe').attr('src', ytvsrc);
	});
	
	$(window).bind("resize", function() {
		$.fn.fullpage.reBuild();

		sliderCha.slick('refresh');
		sliderChaNav.slick('refresh');
		//sliderEmved.slick('refresh');
	});

	tabJs('.section.event');
	tabJs('.section.game');
}


function commonMoJs(){
	window.orientationchange = orientationEventHandler;
	window.addEventListener('orientationchange', orientationEventHandler, false);
	function orientationEventHandler(){
		var orientation = window.orientation;
		if(orientation == 90 || orientation == -90){
			$('#viewport').attr('content', 'width=1280, user-scalable=no, minimal-ui, target-densitydpi=device-dpi');
		}else{
			$('#viewport').attr('content', 'width=750, user-scalable=no, minimal-ui, target-densitydpi=device-dpi');
		}
	};
	var browserWidth = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	if (browserWidth <= 900 ) {
		$('#viewport').attr('content', 'width=1280, user-scalable=no, minimal-ui, target-densitydpi=device-dpi');
	}else{
		$('#viewport').attr('content', 'width=750, user-scalable=no, minimal-ui, target-densitydpi=device-dpi');
	}

	$(".btn_trigger").click(function(e){
		e.preventDefault();
		$(this).toggleClass('close');
		$(this).parent().toggleClass('open');
	});

	$("#dotId a").click(function(e){
		if ($(this).hasClass('has_child') == false)
		{
			$('.header').removeClass("open");
			$('.btn_trigger').removeClass("close");
			$('.menu_ui .has_child').parent().removeClass('open');
		}else{
			if ($(this).parent().hasClass('open') == false){
				$('.menu_ui .has_child').parent().removeClass('open');
				$(this).parent().addClass('open');
			}else{
				$(this).parent().removeClass('open');
			}
		}
	});
}

function mobileJs(){
	commonMoJs();

	function resetGame(){
		setTimeout(function() {
		  $('.section.game').addClass("nft");
		  $('.section.game').removeClass("charter").removeClass("media");
		  $('.game .tabs li:nth-child(2) a').click();
		}, 1000);
	}
	function resetEvent(){
		setTimeout(function() {
		  $('.section.event').addClass("event1");
		  $('.section.event').removeClass("event2").removeClass("event3");
		  $('.event .tabs li:nth-child(2) a').click();
		}, 1000);
	}
	function resetMenu(num){
		$('.menu_ui li').removeClass("active");
		$('.menu_ui .m'+num+'').addClass("active");
		$('.note_open').hide();
	}

	$('#myContainer').fullpage({
		anchors: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6'],
		menu: '#dotId',
		scrollingSpeed: 200,
		lazyLoading: true,
		scrollOverflow: true,
		scrollOverflowReset: true,
		scrollOverflowOptions: {
			click:false
		},
		easingcss3: 'cubic-bezier(0, 0, 0, 0)',
		afterLoad: function(anchorLink, index){
			if (anchorLink == 'sec5'){//event
				resetMenu(index);
				resetGame();
				$('.top_had').addClass("open_had");
			}else if(anchorLink == 'sec3'){//game
				resetMenu(index);
				resetEvent();
				$('.top_had').addClass("open_had");
			}else if(anchorLink == 'sec1'){//main
				resetMenu(index);
				resetGame();resetEvent();
				$('.top_had').removeClass("open_had");
			}else{
				resetMenu(index);
				resetGame();resetEvent();
				$('.top_had').addClass("open_had");
			}
	   },
	   onLeave: function(index, nextIndex, direction){
		   setTimeout(function() {
		    $('.fp-scrollable').each(function() {
				var iScrollInstance = $(this).data('iscrollInstance');
				iScrollInstance.scrollTo(0,0, 500);
			});
		   }, 1000);
	   }
	 });

	 var hash = window.location.hash.replace("#", "");
	 if (hash == 'sec2')
	 {
		$.fn.fullpage.moveTo('sec2');
	 }else if(hash == 'sec3')
	 {
		 $.fn.fullpage.moveTo('sec3');
	 }else if(hash == 'sec4')
	 {
		 $.fn.fullpage.moveTo('sec4');
	 }else if(hash == 'sec5')
	 {
		 $.fn.fullpage.moveTo('sec5');
	 }else if(hash == 'sec6')
	 {
		 $.fn.fullpage.moveTo('sec6');
	 }else{
		$.fn.fullpage.moveTo('sec1');
	 }


	function resetSection(sec, adc, rc1, rc2, num){
		var sec = sec;
		var adc = adc;
		var rc1 = rc1;
		var rc2 = rc2;
		var num = num;
		$('.section.'+sec+'').addClass(""+adc+"");
		$('.section.'+sec+'').removeClass(""+rc1+"").removeClass(""+rc2+"");
		$('.tabs li:nth-child('+num+') a').click();
	}
	$('#dotId .nft').click(function(e){
		resetSection('game', 'nft', 'charter', 'media', '1');
	});
	$('#dotId .character').click(function(e){
		resetSection('game', 'character', 'nft', 'media', '2');
	});
	$('#dotId .media').click(function(e){
		resetSection('game', 'media', 'nft', 'character', '3');
	});
	$('#dotId .event1').click(function(e){
		resetSection('event', 'event1', 'event2', 'event3', '1');
	});
	$('#dotId .event2').click(function(e){
		resetSection('event', 'event2', 'event1', 'event3', '2');
	});
	$('#dotId .event3').click(function(e){
		resetSection('event', 'event3', 'event1', 'event2', '3');
	});

	var sliderCha = $('#characterSlider').slick({
	  autoplay: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  speed: 20,
	  fade: true,
	  arrows: false,
	  dots: false,  
	  asNavFor: '.slider-nav'
	});
	var sliderChaNav = $('.slider-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  arrows: false,
	  focusOnSelect: true,
	  variableWidth: true
	});
	sliderCha.on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.slider-for .slick-slide .item').removeClass('active');
		$('.slider-for .slick-current .item').addClass('active');
		$(".charter_views .cons").stop(false).animate( {scrollTop:0}, 0 );
	});

	$('#charter .link_g a').click(function(){
		$('.charter_views').show();
		var initialSlide = $(this).parent().index();
		if (initialSlide !== 0)
		{
			sliderCha.slick('slickGoTo', initialSlide, true );
			sliderChaNav.slick('slickGoTo', initialSlide, true );
		}else{
			sliderCha.slick('refresh');
			sliderChaNav.slick('refresh');
			$('.slider-for .slick-current .item').addClass('active');
		}

		setTimeout(function() {
		 $('.charter_views').addClass('open');
		 $.fn.fullpage.setAllowScrolling(false);
		}, 20);

	});

	$('.charter_views .close').click(function(){
		//  $.fn.fullpage.setAllowScrolling(true);
		setTimeout(function() {
			$('.charter_views').hide();
		}, 50);
	});

	var sliderEmved = $('.media_embed').slick({
	  autoplay: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  speed: 300,
	  //fade: true,
	  arrows: true,
	  dots: true
	});

	$(".tabs li a").click(function(){
		 setTimeout(function() {
		   $.fn.fullpage.reBuild();
		}, 200);
	});

	$(".event .tabs li:nth-child(2) a").click(function(){
		var ytvsrc = $('.event2_2 iframe').attr('data-atr');
		$('.event2_2 iframe').attr('src', ytvsrc);
	});

	$(window).bind("resize", function() {
		$.fn.fullpage.reBuild();

		sliderCha.slick('refresh');
		sliderChaNav.slick('refresh');
		//sliderEmved.slick('refresh');
	});

	tabJs('.section.event');
	tabJs('.section.game');

	$('.btn_note button, .note_open button').click(function(){
		$('.note_open').toggle();
	})
}


function tabJs(tabArea){
	var tabDot = $(tabArea).find(".tabs a");
	tabDot.click(function(){
		var current = this;
		tabDot.each(function(){
			if(this==current){
				$(this).addClass("current");
				var clickId = $(this).attr('href');
				$(clickId).addClass('open');
				var bgclass = $(this).attr('href').split("#")[1];
				$(tabArea).addClass(bgclass);
				 $('.'+bgclass+'').removeClass('completely');
				setTimeout(function() {
				  $('.'+bgclass+'').addClass('completely');
				}, 200);
			}else{
				$(this).removeClass("current");
				var eachId = $(this).attr('href');
				$(tabArea).find(eachId).removeClass('open');
				var bgclass = $(this).attr('href').split("#")[1];
				$(tabArea).removeClass(bgclass);
				
			}
		});return false;
	})
}

function faqJs(){
	$('.faq_list .q a').click(function(){
		var $li = $(this).parent().parent();
		if ($li.hasClass('open') == false)
		{
			$('.faq_list li').removeClass('open');
			$li.addClass('open');
		}else{
			$li.removeClass('open');
		};return false;
	})
}


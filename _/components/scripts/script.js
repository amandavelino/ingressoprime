$(function(){

	//new WOW().init();

	//banner

		$(".owl-carousel").owlCarousel({
			autoplay: true,
			autoplayTimeout: 7000,
			autoplayHoverPause: true,
			mouseDrag: false,
			loop: true,
			nav: true,
			dots: false,
			lazyLoad: true,
			margin: 3,
			responsive: {
				0:   {items:1},
				600: {items:2},
				992: {items:3},
				1200:{items:3}
			},
			navText: ["&laquo; evento anterior ","próximo evento &raquo;"]
		});	

	//filtro eventos

		$grid = $('.grid');

		$grid.isotope({
			itemSelector: '.grid-item',
			layoutMode: 'fitRows',
			fitRows: {
			  gutter: 0
			}  
		});

		// filter items on button click
		$('.filter-button-group').on( 'click', 'a', function() {
		  var filterValue = $(this).attr('data-filter');
		  // use filter function if value matches
		  $grid.isotope({ filter: filterValue });
		  return false;
		});

	//quando carregar a página
		var posicao = $(window).scrollTop();

		if(posicao > 90){
			$('.wrap').addClass('scrolled');
		}else{
			$('.wrap').removeClass('scrolled');
		}

		var home 		= 	"#banner",
			body  		= 	$("html, body"),
			top 		= 	$(window).scrollTop(),
			easing 		= 	"easeInOutQuad",
			duration 	=	'800';

		function goTo(posicao){
			body.stop().animate({scrollTop: posicao }, duration, "swing", function(){});
		}//

		$(".no-refresh").click(function(){

			if($(this).attr("href") == home){
				//$('.active').removeClass('active');
				$(".homeLink").addClass('active');
				goTo(0);
				return false;
			}

		});

	    //navegacao mobile
	    $(".icon-mobile").click(function(){
	        $('body').toggleClass("open");
	    });	

	    $(".close-btn").click(function(){
	    	$('body').removeClass("open");
	    });


	    function showDiv(div){
			$(div).css({"z-index":9999}).fadeIn('fast');
			$('body').css({"overflow":"hidden"});   	
	    }

	    function hideDiv(div){
	    	$(div).fadeOut('fast', function(){
	    		$(this).css({"z-index":0});
	    	});
	    	$('body').css({"overflow":"auto"});
	    }

	    //procurar eventos

			$("#procurarEventos").click(function(){
				showDiv("#procurar");
				return false;
			});    

		    $(".close-procurar").click(function(){
				hideDiv("#procurar");
		    	return false;
		    });	

	    //filtrar eventos

			$("#filtrarEventos").click(function(){
				showDiv("#filtrar");
				$('body').css({"overflow":"hidden"});  
				return false;
			});    

		    $(".close-filtrar").click(function(){
				hideDiv("#filtrar");
		    	return false;
		    });	

	    //imprimir voucher

			$("#imprimirVoucher").click(function(){

				$('body').css({"overflow":"hidden"});
				$("#imprimir").css({"z-index":9999}).fadeIn('fast', function(){});//apareceu a div
				
				return false;
			});    

		    $(".close-imprimir").click(function(){
				hideDiv("#imprimir");
		    	return false;
		    });		    	    

	$(window).scroll(function(){

		//posicao do scroll
		var posicao = $(window).scrollTop();

		if(posicao > 90){
			$('.wrap').addClass('scrolled');
		}else{
			$('.wrap').removeClass('scrolled');
		}	
		
		//Navegacao menu

			var home		= $("#banner").offset().top,
				sessao 		= '';

			if(posicao === home || posicao > home){
				sessao = 'banner';
			}

	});//onscroll

});//

function esconderMenuMobile(){

	//se a tela for maior que 1200 remover classe menu-mobile
	var body = $('body','html');
	if(body.width() > 1183){
		$('body').removeClass('open');
	}//

}

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}

function id( el ){
	return document.getElementById( el );
}

//mascara cpf
function mcpf(v){  //MASCARA PARA CPF

    v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                             //de novo (para o segundo bloco de números)
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    return v;
}			
		
//adiciona mascara de data
function mdata(v){ // MASCARA PARA DATA 

    v=v.replace(/\D/g,"");                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{2})(\d)/,"$1/$2");
    v=v.replace(/(\d{2})(\d)/,"$1/$2");
    return v;
}

$(function(){

	//se a tela for maior que 1200 remover classe menu-mobile
	esconderMenuMobile();

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
				600: {items:1},
				768: {items:2},
				992: {items:3},
				1200:{items:3}
			},
			navText: ["&laquo; anterior "," próximo &raquo;"]
		});	

	//filtro eventos - isotope

	var $grid = $('.grid');
	$grid.isotope({
		itemSelector: '.grid-item',
		layoutMode: 'fitRows',
		percentPosition: true,
		resize: true,
		isResizeBound: false,
		fitRows: {
		  gutter: 5
		}
	});	

		$('#eventos').on( 'change', 'select', function() {
			 var optionSelected = $("option:selected", this);
			 var filterValue = $( optionSelected ).attr('data-filter');
			 $grid.isotope({ filter: filterValue });
		});

		//filter items on button click
		$('.filter-button-group').on( 'click', 'a', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		  return false;
		});

		//links 

		var $linkFilter = $('.filter-button-group a');
		$linkFilter.click(function(){

			$linkFilter.removeClass('ativo');
			$(this).addClass('ativo');

		});//

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
			//$('body').css({"overflow":"hidden"});   	
	    }

	    function hideDiv(div){
	    	$(div).fadeOut('fast', function(){
	    		$(this).css({"z-index":0});
	    	});
	    	$('body').css({"overflow":"auto"});
	    }

	    //procurar eventos

			$(".procurarEventos").click(function(){
				showDiv("#procurar");
				return false;
			});    

		    $(".close-procurar").click(function(){
				hideDiv("#procurar");
		    	return false;
		    });	

	    //filtrar eventos

			$(".filtrarEventos").click(function(){
				showDiv("#filtrar");
				//$('body').css({"overflow":"hidden"});  
				return false;
			});    

		    $(".close-filtrar").click(function(){
				hideDiv("#filtrar");
		    	return false;
		    });	

	    //imprimir voucher

			$(".imprimirVoucher, .meusPedidos").click(function(){

				//$('body').css({"overflow":"hidden"});
				$("#imprimir").css({"z-index":9999}).fadeIn('fast', function(){

					id('cpf').onkeyup = function(){ 
						mascara( this, mcpf );
					}

					id('data').onkeyup = function(){ 
						mascara( this, mdata );
					}						

				});//apareceu a div
				
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

		//removendo barra rede social
		if(posicao > 30){
			$('.wrap').addClass('removeRedeSocial');
		}else{
			$('.wrap').removeClass('removeRedeSocial');
		}			
		
		//Navegacao menu
			var home		= $("#banner").offset().top,
				sessao 		= '';

			if(posicao === home || posicao > home){
				sessao = 'banner';
			}

	});//onscroll

});//

$(window).resize(function(){
	//se a tela for maior que 1200 remover classe menu-mobile
	esconderMenuMobile();
	var $grid = $('.grid');
	$grid.isotope({
		itemSelector: '.grid-item',
		layoutMode: 'fitRows',
		percentPosition: true,
		resize: true,
		isResizeBound: false,
		fitRows: {
		  gutter: 5
		}
	});		
});
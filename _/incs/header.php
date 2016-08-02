<header id="header-topo">

	<?php include("redesSociais.php"); ?>
	<div class="container">
		
		<div class="content">
			
	        <div id="logo">
	        	<a class="no-refresh" href="<?php if($url === $home){ echo '#banner'; }else { echo 'index.php'; } ?>" title="Ingresso Prime">
	        		<img src="imgs/svg/ingressoprime.svg" alt="Ingresso Prime" border="0" width="150px">
	        	</a>
	        </div><!-- logo -->  

	        <div id="menu">
	        	
	        	<nav>
	        		<ul>
	        			<li><a class="no-refresh <?php if($url === $home){ echo 'active'; } ?>" href="<?php if($url === $home){ echo '#banner'; }else { echo 'index.php'; } ?>" data-name="banner" >Home</a></li>
	        			<?php /* <li><a class="no-refresh <?php if($url === $eventos){ echo 'active'; } ?>" href="<?php if($url === $home){ echo '#eventos'; }else { echo 'eventos.php'; } ?>" data-name="eventos" >Eventos</a></li> */ ?>
	        			<li><a id="meusPedidos" class="meusPedidos <?php if($url === $pedidos){ echo 'active'; } ?>" href="meus-pedidos.php">Meus Pedidos</a></li>
	        			<?php  /* <li><a class="<?php if($url === $politica){ echo 'active'; } ?>" href="nossa-politica.php">Nossa Política</a></li> 
	        			<li><a class="<?php if($url === $duvidas){ echo 'active'; } ?>" href="duvidas.php">Dúvidas</a></li>*/ ?>
	        			<li><a class="<?php if($url === $contato){ echo 'active'; } ?>" href="fale-conosco.php">Fale Conosco</a></li>
	        			<li><a class="<?php if($url === $informacoes){ echo 'active'; } ?>" href="informacoes.php">Informações</a></li>
	        		</ul>
	        	</nav>

	        </div><!-- /menu -->

	        <div id="destaques-menu">
	        	
				<div class="destaque">
					<a href="#" title="Informe seus dados" id="imprimirVoucher" class="imprimirVoucher">
						<img src="imgs/icons/imprimir.png" width="40" border="0">
						<h3>Imprimir Vourcher</h3>
						<p>Informe seus dados</p>
					</a>
				</div><!-- /destaque -->	

				<div class="destaque">
					<a href="#" title="Localizar eventos" id="procurarEventos" class="procurarEventos">
						<img src="imgs/icons/search.png" width="35" border="0">
						<h3>Procurar</h3>
						<p>Localizar eventos</p>
					</a>
				</div><!-- /destaque -->		

	        </div><!-- destaques -->

		    <div class="icon-mobile">
		        <span class="mb_item mb_01"></span>
		        <span class="mb_item mb_02"></span>
		        <span class="mb_item mb_03"></span>
		    </div><!-- icon-mobile -->   	        

		</div><!-- /content -->

	</div><!-- /container -->
	
</header><!-- /header -->
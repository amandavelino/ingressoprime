<div class="mobile">

    <div class="container">
        
        <div class="content">

            <div class="close-btn"><img src="imgs/svg/close.svg"></div>

            <nav class="menu-mob">
                <h2 class="hide">Navegação Principal</h2>
                <ul>
                    <li><a class="no-refresh <?php if($url === $home){ echo 'active'; } ?>" href="<?php if($url === $home){ echo '#banner'; }else { echo 'index.php'; } ?>" data-name="banner" >Home</a></li>
                    <?php /* <li><a class="no-refresh <?php if($url === $eventos){ echo 'active'; } ?>" href="<?php if($url === $home){ echo '#eventos'; }else { echo 'eventos.php'; } ?>" data-name="eventos" >Eventos</a></li> */ ?>
                    <li><a class="<?php if($url === $pedidos){ echo 'active'; } ?>" href="meus-pedidos.php">Meus Pedidos</a></li>
                    <?php  /* <li><a class="<?php if($url === $politica){ echo 'active'; } ?>" href="nossa-politica.php">Nossa Política</a></li> */ ?>
                    <li><a class="<?php if($url === $informacoes){ echo 'active'; } ?>" href="informacoes.php">Informações</a></li>
                    <li><a class="<?php if($url === $contato){ echo 'active'; } ?>" href="fale-conosco.php">Fale Conosco</a></li>
                </ul>
            </nav>              

        </div><!-- /content --> 

    </div><!-- /container --> 

</div><!-- /mobile --> 
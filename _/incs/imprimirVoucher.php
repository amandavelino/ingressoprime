<div id="imprimir">
	<div class="close-imprimir"><img src="imgs/svg/close.svg"></div>
    <div class="container">
        <div class="content">            
        	<p>Informe abaixo o seu CPF e Data de nascimento, e depois pressione a tecla enter.</p>
        	<form action="#" method="get" accept-charset="utf-8" name="imprimir_voucher">

                <label for="cpf">
                    <input type="text" id="cpf" name="cpf" maxlength="14" autocomplete="off" placeholder="000.000.000-00" autofocus>
                </label>
                <label for="data_nascimento">
                    <input type="text" id="data" name="data" maxlength="10" autocomplete="off" placeholder="00/00/0000">
                </label>                
                <fieldset>
                    <input type="submit" class="getVoucher btn" name="buscar" value=" imprimir voucher ">
                </fieldset>
             
        	</form>
        </div><!-- /content -->
    </div><!-- /container -->
</div><!--/procurar -->
<?php 
	session_start();
	if(!empty($_SESSION['email']) && !empty($_SESSION['senha']) && !empty($_SESSION['id_usuario'])){
		header('Location: app');
	}
?>

<!DOCTYPE html>
<html>
  <head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-124437294-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-124437294-1');
	</script>
  	
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Fixer</title>
    <link rel="stylesheet" href="v/bulma-0.7.1/css/bulma.min.css">
	<link rel="shortcut icon" href="logo.png" type="image/png">
	<link rel="icon" href="logo.png" type="image/png">	
	<link rel="stylesheet" type="text/css" href="v/css/login.css">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans|Varela+Round" rel="stylesheet">	
  </head>
  <body>
	<section class="hero is-warning is-fullheight">
		<div class="hero-head">
			<nav class="navbar is-warning" role="navigation" aria-label="main navigation">
			  <div class="container">
				  <div class="navbar-brand">
				    <a href="index" class="navbar-item" >
				      <img src="logotipo.png"  >
				    </a>
				  </div>
			  </div>
			</nav> 			
		</div>	
	  <div class="hero-body has-text-centered">
		<div class="columns" id="display-content">
			<div class="column is-one-third-desktop is-offset-one-third-desktop is-three-fifths-tablet is-offset-one-fifth-tablet">
				<div class="box">
					<div class="has-text-centered title"><h1>Cadastre-se</h1></div>
					<div class="field">
						<label class="label has-text-left">Nome</label>
						<div class="control has-icons-left">
						   <input class="input is-rounded is-normal" type="text" placeholder="Ex: Tony" autofocus name="nome">
						    <span class="icon is-small is-left">
						      <i class="fa fa-user"></i>
						    </span>
					          <p class="help is-danger" id="help-name">
						        Esse campo é obrigatório <i class="far fa-grimace is-warning"></i>
						      </p>
						</div>
					</div>
					<div class="field">
						<label class="label has-text-left">Email</label>
						<div class="control has-icons-left">
						   <input class="input is-rounded is-normal" type="email" placeholder="Ex: tony@stark.com" value="" name="email">
						    <span class="icon is-small is-left">
						      <i class="fa fa-at"></i>
						    </span>
					          <p class="help is-danger" id="help-email">
						        Esse campo é obrigatório <i class="far fa-grimace is-warning"></i>
						      </p>
						</div>
					</div>
					<div class="field">
					  	<label class="label has-text-left">Senha</label>
					  <div class="control has-icons-left">
					    <input class="input is-rounded is-normal" type="password" name="senha" placeholder="Ex: **********">
					    <span class="icon is-small is-left">
					      <i class="fas fa-lock"></i>
					    </span>
				          <p class="help is-danger" id="help-pass">
					        Esse campo é obrigatório <i class="far fa-grimace is-warning"></i>
					      </p>					  
					  </div>
					</div>
					<div class="field">
					  <p class="control">
					    <button class="button is-success is-medium is-fullwidth is-rounded" id="btn-cadastro">
					      Cadastrar
					    </button>
					  </p>
					</div>	<hr>
					<div class="field">
					  <p class="control">
					  	<a href='control/metodo/logaFace.php' class='button is-link is-medium is-fullwidth is-rounded'>Entrar com facebook</a>
					  </p>
					</div>						
					<p>Ou, <a href="login" class="has-text-link">faça login </a> <i class="fa fa-smile"></i></p>					
				</div>

			</div>
		</div>
	  </div>
	  <div class="hero-footer">
	  </div>
	</section>
	<footer class="footer has-background-warning">
	  <div class="content has-text-centered">
	    <p>
	      <strong>Fixer</strong> by <a href="https://facebook.com/azabraao">azabraao</a>
	    </p>
		<a href="https://bulma.io">
		  <img src="v/img/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
		</a>
	  </div>
	</footer>
  </body>
<script defer src="v/fontawesome/js/all.min.js"></script>	  
<script type="text/javascript" src="v/js/jquery.min.js"></script>
<script type="text/javascript" src="v/js/login.js"></script>
</html>
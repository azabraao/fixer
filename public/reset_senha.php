<?php
	$token = $_GET['token'];
	$id_usuario = $_GET['id_usuario'];
	$email = $_GET['email'];
	if(!isset($token) || !isset($id_usuario ) || !isset($email)){
		// header('Location: login');
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
    <title>Fixer | Esqueci a senha</title>
    <link rel="stylesheet" href="assets/css/bulma-0.7.1.min.css ">
    <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
	<link rel="shortcut icon" href="logo.png" type="image/png">
	<link rel="icon" href="logo.png" type="image/png">	
	<link rel="stylesheet" type="text/css" href="assets/css/login.css">
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
					<div class="has-text-centered title"><h1>Resetar a senha</h1></div>
					<div class="field">
					  	<label class="label has-text-left">senha</label>
					  <div class="control has-icons-left">
					    <input class="input is-rounded is-normal" type="password" id="password" name="password" placeholder="********">
					    <span class="icon is-small is-left">
					       <input type="hidden" name="id_usuario" id="hidden-id-usuario" value='<?php echo $id_usuario ?>'>
					       <input type="hidden" name="token" id="hidden-token" value="<?php echo $token ?>">
					       <input type="hidden" name="hidden_email" id="hidden-email" value="<?php echo $email ?>">
					      <i class="fas fa-lock"></i>
					    </span>
					  </div>
					</div>
					<div class="field">
					  	<label class="label has-text-left">repita a senha</label>
					  <div class="control has-icons-left">
					    <input class="input is-rounded is-normal" type="password" id="repeat_password" name="repeat_password" placeholder="********">
					    <span class="icon is-small is-left">
					      <i class="fas fa-lock"></i>
					    </span>
					  </div>
					</div>
					<div class="field">
					  <p class="control">
					    <button class="button is-success is-medium is-fullwidth is-rounded" id="btn-reset">
					      Atualizar
					    </button>
					  </p>
					</div>																
				          <p class="help is-danger" id="help-pass"></p>					  
				</div>
			</div>
		</div>
	  </div>
	  <div class="hero-footer">
	  </div>
	</section>
  </body>
 <footer class="footer has-background-warning">
  <div class="content has-text-centered">
    <p>
      <strong>Fixer</strong> by <a href="https://facebook.com/azabraao">azabraao</a>
    </p>
	<a href="https://bulma.io">
	  <img src="assets/img/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
	</a>
  </div>
</footer> 
<script type="text/javascript" src="assets/js/jquery.min.js"></script>
<script type="text/javascript" src="assets/js/login.js"></script>
</html>
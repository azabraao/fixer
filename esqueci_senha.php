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
    <link rel="stylesheet" href="v/bulma-0.7.1/css/bulma.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>    
	<link rel="shortcut icon" href="logo.png" type="image/png">
	<link rel="icon" href="logo.png" type="image/png">	
	<link rel="stylesheet" type="text/css" href="v/css/login.css">
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
					<div class="has-text-centered title"><h1>Esqueci a senha</h1></div>
					<p>Enviaremos instruções para você recuperar a sua senha.</p><br>
					<div class="field is-grouped">
					  <p class="control is-expanded">
					<input class="input is-rounded is-normal" id="email" name="email" type="email" placeholder="Email" autofocus>
					  </p>
					  <p class="control">
					    <button class="button is-rounded is-info" id="btn-asks-reset">
					      Enviar
					    </button>
					  </p>
					</div>					
					<p class="help is-danger is-active" id="help-email">
					Esse campo é obrigatório <i class="far fa-grimace is-warning"></i>
					</p>  
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
	  <img src="v/img/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
	</a>
  </div>
</footer> 
<script type="text/javascript" src="v/js/jquery.min.js"></script>
<script type="text/javascript" src="v/js/login.js"></script>
</html>
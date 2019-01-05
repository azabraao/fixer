<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-124437294-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-124437294-1');
	</script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Fixer | Memorize tudo</title>
    <link rel="stylesheet" href="assets/css/bulma-0.7.1.min.css ">
	<link rel="stylesheet" type="text/css" href="assets/css/index.css">
	<link rel="shortcut icon" href="logo.png" type="image/png">
	<link rel="icon" href="logo.png" type="image/png">	
	<link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet">  
	<meta name="author" content="Abraão Azevedo">
	<meta property="og:url" content="http://www.fixer.cf/index.php" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Fixer | Memorize tudo" />
	<meta property="og:description" content="Fixer é seu melhor amigo na hora de memorizar o conteúdo estudado" />
	<meta property="og:image" content="http://fixer.cf/logo-200x200.png" />	
	<meta name="description" content="Fixer é seu melhor amigo na hora de gerenciar as revisões de seu estudo. Lembre de verdade com a repetição espaçada e seja aprovado em vestibulares e concursos">
	<meta property="fb:app_id" content="2053994714864242">
    <link rel="alternate" href="http://wwww.fixer.cf" hreflang="pt-br" />
	<link rel="canonical" href="www.fixer.cf"/>    


  </head>
  <body>
	<nav class="navbar is-warning" role="navigation" aria-label="main navigation">
	  <div class="container">
		  <div class="navbar-brand">
		    <a class="navbar-item" >
		      <img src="logotipo.png"  >
		    </a>
	  		 <div class="navbar-item " id="login-link-index">
	  		 	<a href="login" class="button is-warning">Entrar</a>
	  		 </div>	 
	  		 <div class="navbar-item" id="cadastro-link-index">
	  		 	<a href="cadastro" class="button is-success is-rounded">Cadastre-se</a>
	  		 </div>	 	  		    
		  </div>	  
	  </div>
	</nav> 	

	<section class="section has-background-warning" style="padding: 127px 0px !important">
		<div class="container">
			<div class="has-text-centered" style="padding: 40px;">
				<h1 class="title is-size-1">Memorize com revisões</h1>
				<h2 class="subtitle">Lembre <b>tudo</b> no dia da prova</h2>
			</div>
			<div class="has-text-centered">
				<div id="start-wrapper" style="padding: 29px 0px">
					<a href="cadastro" class="button is-large is-success is-rounded">Começar agora</a>
				</div>
			</div>
		</div>
	</section>

	<section class="section has-background-white-bis">
		<div class="container">
			<div class="columns">
				<div class="column">
					<h1 class="title has-text-dark is-size-2">Sua lista diária do que revisar</h1>
					<p class="has-text-dark is-size-5">
						Deixe que cuidamos do ciclo de revisões por você. Apenas registre o que estudou e nós te lembraremos quando deve fazer revisões. 
					</p>
					<br>	
					<p class="has-text-dark is-size-5">
						Treine com esta lista:
					</p>
				</div>
				<div class="column">
					<div class="columns">
						<div class="column"></div>
						<div class="column is-three-quarters">
							<div id="list-example">
								<div class="has-text-centered">
									<h1 class="title" id="day-display">Hoje</h1>				
								</div>
								<div class="is-centered" id='cards-container'>
									<div class='box-wrapper '>
										<i class='far fa-square' id='checker'></i>
										<div class='box'>
											  <article class='media'>
											    <div class='media-left'>
											    </div>
											    <div class='media-left'>
											    </div>
											    <div class='media-content'>
											      <div class='content'>
											        <p> 
											        	<strong>Termodinâmica: transformações e ciclos</strong>
											        </p>
											      </div>
											    </div>
											  </article>
										</div>
									</div>
									<div class='box-wrapper '>
										<i class='far fa-square' id='checker'></i>
										<div class='box'>
											  <article class='media'>
											    <div class='media-left'>
											    </div>
											    <div class='media-left'>
											    </div>
											    <div class='media-content'>
											      <div class='content'>
											        <p>
											          <strong>Regime militar</strong>
											         
											        </p>
											      </div>
											    </div>
											  </article>
										</div>
									</div>
									<div class='box-wrapper '>
										<i class='far fa-square' id='checker'></i>
										<div class='box'>
											  <article class='media'>
											    <div class='media-left'>
											    </div>
											    <div class='media-left'>
											    </div>
											    <div class='media-content'>
											      <div class='content'>
											        <p>
											          <strong>Direito Penal</strong>
											        </p>
											      </div>
											    </div>
											  </article>
										</div>
									</div>
								</div>					
							</div>							
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="section">
		<div class="container">
			<div class="columns">
				<div class="column">
					<img src="assets/img/grafico.png" class="image" style="width: 90%">
				</div>
				<div class="column">
					<h1 class="title is-size-2">Revisões garantem o aprendizado</h1>
					<p class="is-size-5">Dentro de 24 horas você pode perder de 50% a 80% do conteúdo que acabou de estudar. Fazer revisões é <b>essencial</b> pra te ajudar a  eliminar a curva do esquecimento! No Fixer nós usamos o ciclo de revisões de 1 dia, 7 dias, 15 dias e ciclos infinitos de 30 dias até você decidir parar a revisão.</p>
				</div>
			</div>
		</div>
	</section>	
	<section class="section has-background-white-bis">
		<div class="container">
			<div class="columns">
				<div class="column">
					<h1 class="title has-text-dark is-size-2">Cada revisão vem com um 'painel de controle'</h1>
					<p class="has-text-dark is-size-5">
						Clique na revisão para ter acesso a um local onde poderá armazenar quaisquer notas importantes para o futuro, no momento da revisão. Pode ser um link ou outro lembrete como "há flashcards para este assunto".  
					</p>
				</div>
				<div class="column">
					<div class="columns">
						<div class="column"></div>
						<div class="column is-three-quarters">
							<div id="list-example">
								<div class="has-text-centered">
									<h1 class="title" id="day-display">Hoje</h1>				
								</div>
								<div class="is-centered" id='cards-container'>
									<div class='box-wrapper '>
										<i class='far fa-square'></i>
										<div class='box' id="termodinamica">
											  <article class='media'>
											    <div class='media-left'>
											    </div>
											    <div class='media-left'>
											    </div>
											    <div class='media-content'>
											      <div class='content'>
											        <p> 
											        	<strong>Termodinâmica: transformações e ciclos</strong>
											        </p>
											      </div>
											    </div>
											  </article>
										</div>
									</div>
									<div class='box-wrapper '>
										<i class='far fa-square'></i>
										<div class='box' id="regime-militar">
											  <article class='media'>
											    <div class='media-left'>
											    </div>
											    <div class='media-left'>
											    </div>
											    <div class='media-content'>
											      <div class='content'>
											        <p>
											          <strong>Regime militar</strong>
											         
											        </p>
											      </div>
											    </div>
											  </article>
										</div>
									</div>
									<div class='box-wrapper '>
										<i class='far fa-square'></i>
										<div class='box' id="direito-penal">
											  <article class='media'>
											    <div class='media-left'>
											    </div>
											    <div class='media-left'>
											    </div>
											    <div class='media-content'>
											      <div class='content'>
											        <p>
											          <strong>Direito Penal</strong>
											        </p>
											      </div>
											    </div>
											  </article>
										</div>
									</div>
								</div>					
							</div>							
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>	
	<div class="hero has-background-warning">
		<div class="hero-body">
			<div class="container">
				<div class="has-text-centered">		
					<a href="cadastro" class="button is-large is-success is-rounded">Comece a memorizar</a>
				</div>			
			</div>			
		</div>
	</div>

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

	<div class="modal">
	  <div class="modal-background"></div>
	  <div class="modal-card">
	    <header class="modal-card-head">
	      <p class="modal-card-title"></p>
	      <button class="delete" aria-label="close"></button>
	    </header>
	    <section class="modal-card-body">
			<div class="field is-horizontal">
			  <div class="field-body">
			    <div class="field">
			      <div class="control">
	    			<label>Notas</label>
			        <textarea class="textarea auto-resize" id="input-description" name="description" placeholder="Qualquer coisa que seja importante">Link: www.example.com 
OBS: há flashcards e mapas mentais para este assunto.
			        </textarea>
			      </div>
			    </div>
			  </div>
			</div>

	    </section>
	    <footer class="modal-card-foot">
	    </footer>
	  </div>
	</div>


  </body>
<script defer src="assets/fontawesome/js/all.min.js"></script>	
<script type="text/javascript" src="assets/js/jquery.min.js"></script>
<script type="text/javascript" src="assets/js/index.js"></script>

<!-- Start of Async Drift Code -->
<script>
"use strict";

!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('kzzccr82u8kv');
</script>
<!-- End of Async Drift Code -->
</html>
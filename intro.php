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
    <title>Fixer</title>
    <link rel="stylesheet" href="v/bulma-0.7.1/css/bulma.min.css">
	<link rel="stylesheet" type="text/css" href="v/css/intro.css">
    <script defer src="v/fontawesome/js/all.min.js"></script>
	<link rel="shortcut icon" href="logo.png" type="image/png">
	<link rel="icon" href="logo.png" type="image/png">	
	<style type="text/css">
		#l-login-nav{
		    position: absolute;
		    right: 0;
		    top: 0;
		    bottom: 0;    
		}		
		p{
			font-size: 21px;
		}
	</style>
  </head>
  <body>
	<nav class="navbar is-warning" role="navigation" aria-label="main navigation">
	  <div class="container">
		  <div class="navbar-brand">
		    <a href="index" class="navbar-item" >
		      <img src="logotipo.png"  >
		    </a>
	  		 <div class="navbar-item" id="l-login-nav">
	  		 		<a class="navbar-item" href="sair.php">Login</a>
	  		 </div>	    
		  </div>		  
	  </div>
	</nav> 
<section class="section">
	<div class="container">
		<div class="columns">
			<div class="column"></div>
			<div class="column is-two-thirds">
				<article class="content">
					<h1>Olá!</h1>
					<p>
					Você já teve a sensação de que com o passar o tempo esqueceu algo que estudou? 
					</p>
					<p>
					O Fixer é um aplicativo que gerencia, de maneira rápida e fácil, o agendamento de revisões em uma frequência que reforça seus estudos para vestibulares, concursos e etc. O nome desta técnica de memorização é "repetição espaçada", ela visa contribuir para eliminar o que é chamado de "curva do esquecimento", termo cunhado  pelo psicólogo alemão Hermann Ebbinghaus. 
					</p>

					<h2>
					Curva do esquecimento
					</h2>

					<p>
					De acordo com os estudos de Ebbinghaus sobre a memória humana, logo após as primeiras horas de aprendizado, nossa capacidade de retenção do conteúdo sofre uma perda exponencial. Em suas experiências, o psicólogo notou que logo nas 24 horas seguintes ao aprendizado podemos esquecer de 50% a 80% das informações! Em um período de 30 dias, esse percentual cai para cerca de 2%! 
					</p>

					<p>
					Segundo Ebbinghaus, a repetição é um fator decisivo e essencial para uma maior retenção daquilo que aprendemos. Revisões periódicas (feitas a cada 24 horas, 7 dias, 15 dias e 1 mês após o agendamento), são responsáveis por fixar cada vez mais o conteúdo, convertendo-o em conhecimento.
					</p>
					<p>
					A ideia, portanto, é realizar revisões cíclicas, relembrando o conteúdo em tempos cada vez mais espaçados, para obter novamente 100% da curva de aprendizagem e atingir excelentes resultados em provas e na vida! É aí que entra o Fixer, automatizando esse ciclo e facilitando as revisões. :)
					</p>
					<br>

					<hr>
					<br>
					<h2>
					Do criador
					</h2>
					<p>
					Por padrão eu configurei o ciclo de revisões para 1 dia, 7 dias, 15 dias e 1 mês após o agendamento. Ao cadastrar um assunto você poderá adicionar notas que estarão atreladas à revisão que você adicionar. Lá você pode colocar algum lembrete que seja importante para o dia em que você estiver fazendo as revisões.
					</p>
					<p>
					Eu espero que o Fixer seja tão útil para você quanto é pra mim, então, se tiver qualquer ideia de como melhorar-lo, vou adorar ouvir. Se tiver qualquer dúvida, vou amar responder! :)
					</p>

						
					<div class="has-text-centered">
						<br>
						<p>
							<a href="login">Faça login</a> ou <a href="cadastro">Inscreva-se</a>
						</p>
						<p>
						Bons estudos! 
						</p>
						<figure>
							<img class="image is-128x128 " src="v/img/abraao-azevedo.jpg">
							<figcaption><b>Abraão Azevedo</b></figcaption>
						</figure>							
					</div>
				</article>
			</div>
			<div class="column"></div>

		</div>
	</div>	
</section>

<footer class="footer ">
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
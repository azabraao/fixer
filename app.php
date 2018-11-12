<?php 
	session_start();
	if(empty($_SESSION['email'])  && empty($_SESSION['nome']) && empty($_SESSION['id_usuario'])){
		header('Location: login');
	}	
?>
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
	<link rel="stylesheet" type="text/css" href="v/css/app.min.css?aaa=2">
	<link rel="shortcut icon" href="logo.png" type="image/png">
	<link rel="icon" href="logo.png" type="image/png">	
	<link href="https://fonts.googleapis.com/css?family=Open+Sans|Varela+Round" rel="stylesheet">
  </head>
  <body>
<nav class="navbar is-warning" role="navigation" aria-label="main navigation">
  <div class="container">
	  <div class="navbar-brand">
	    <a class="navbar-item" >
	      <img src="logotipo.png"  >
	    </a>
  		 <div class="navbar-item is-hidden-desktop" id="logoff-mobile">
  		 		<a class="navbar-item" href="sair.php">Sair</a>
  		 </div>	    
	  </div>
	  <div class="navbar-menu">
	  	<div class="navbar-start"></div>
	  	<div class="navbar-end">
	  		 <div class="navbar-item has-dropdown">
	  		 	<a class="navbar-link"><i class="far fa-user"></i><?php $nome = explode(' ',$_SESSION['nome']); echo $nome[0]; ?></a>
	  		 	<div class="navbar-dropdown is-right">
	  		 		<a class="navbar-item" href="sair.php">Sair</a>
	  		 	</div>
	  		 </div>
	  	</div>
	  </div>
	  
  </div>
</nav> 
	<section class="section">
	    <div class="container has-text-centered">
			  <div class="columns ">
			  	<div class="column"></div>
			  	<div class="column is-half">
			  		<div class="is-clearfix" id="new-set-wrapper">
			  			<div class="field is-grouped" id="label-add">
						  <p class="control">
						    <a class="button is-rounded no-border">
						      <i class="fas fa-plus has-text-ccc"></i>
						    </a>
						  </p>
						  <p class="control is-expanded">
						    <input autocomplete="off" class="input" type="text" id="input-title-review" name="title" placeholder="Adicione uma revisão" maxlength="100">
						  </p>
						</div>			  	
						<div class="field is-grouped new-set-toggle">
						  <p class="control">
						    <a class="button is-rounded no-border ">
						      <i class="fas fa-align-right has-text-ccc"></i>
						    </a>
						  </p>
						  <p class="control is-expanded">
							<textarea class="textarea auto-expand" id="description" name="description" placeholder="Adicione uma nota" rows="2"></textarea>
						  </p>
						</div>
						<div id="new-set-addons">
							<div class="dropdown new-set-addons-item new-set-toggle is-pulled-left">
							  <div class="dropdown-trigger">
							    <button class="button has-text-grey no-border" id="btn-add-field" aria-haspopup="true" aria-controls="dropdown-menu">
							      <span class="icon is-small">
									<i class="fas fa-book" aria-hidden="true"></i>
							      </span>
							      <span id="field-choicer">disciplina</span>
							    </button>
							  </div>
							  <div class="dropdown-menu is-active" id="add-field-dropdown-menu" role="menu">
							    <div class="dropdown-content has-text-left">
							      <div  id="div-add-field-dropdown-menu">	
							      </div>
							      <hr class="dropdown-divider">
							      <a class="dropdown-item" id="a-input-field-dropdown">
							      	<span class="icon is-small " id="icon-input-field-dropdown">
							      		<i class="fas fa-plus has-text-ccc"></i>
							      	</span>
							        <input type="text" class="no-border" id="input-field-dropdown" name="" placeholder="adicionar disciplina" maxlength="50" autofocus>
							      </a>							      
							    </div>
							  </div>
							</div>
							<div class="dropdown new-set-addons-item new-set-toggle is-pulled-left">
							  <div class="dropdown-trigger">
							    <button class="button has-text-grey no-border" id="btn-add-cicle" aria-haspopup="true" aria-controls="dropdown-menu">
							      <span class="icon is-small">
									<i class="fas fa-redo-alt" aria-hidden="true"></i>
							      </span>
							      <span id="cicle-choicer">ciclo</span>
							    </button>
							  </div>
							  <div class="dropdown-menu is-active" id="add-cicle-dropdown-menu" role="menu">
							    <div class="dropdown-content has-text-left">
							      <div  id="div-add-cicle-dropdown-menu">	
							      	<a class='dropdown-item dropdown-item-add-cicle'><span class='icon is-small'><i class='far fa-circle'></i></span><span class='cicle-dropdown'>todos os dias</span></a>
							      	<a class='dropdown-item dropdown-item-add-cicle'><span class='icon is-small'><i class='far fa-circle'></i></span><span class='cicle-dropdown'>1-7-15-30</span> (padrão)</a>
							      </div>
							      <hr class="dropdown-divider">
							      <a class="dropdown-item" id="a-input-cicle-dropdown">
							      	<span class="icon is-small " id="icon-input-cicle-dropdown">
							      		<i class="fas fa-plus has-text-ccc"></i>
							      	</span>
							        <input type="text" class="no-border" id="input-cicle-dropdown" name="" placeholder="adicione um ciclo" maxlength="50" autofocus>
							      </a>
							      <a class="dropdown-item" >
							      	<span class="icon is-small " id="icon-input-cicle-dropdown">
							      		<i class="fas fa-info has-text-ccc"></i>
							      	</span>
							      	<span class="is-vertical-align-middle" id="add-cicle-notification">
							      	Separe os dias com hifens
							      	</span>
							      </a>

							    </div>
							  </div>
							</div>
						</div>

						<div class="control new-set-toggle">
							<button class="button is-pulled-right is-rounded" id="btn-add-set">adicionar</button>
						</div>
			  		</div>
			  	</div>
			  	<div class="column"></div>
			  </div>
			  <div class="columns is-centered">
			  	<div class="column is-half">	
			  		<div id="add-set-notification" class="notification has-text-left is-primary is-hidden"></div>
			  	</div>
			  </div>
	      </div>
	</section>		

	<section class="section">
		<div class="container has-text-centered">
			<button class="button " id="hj-helper"><i class="fa fa-chevron-left"></i><i class="fa fa-chevron-left"></i></button>
			<button class="button" id="btn-yesterday">			
				<i class="fa fa-chevron-left"></i>
			</button>
			<h1 class="title" id="day-display">Hoje</h1>	
			<button class="button" id="btn-tomorrow">			
				<i class="fa fa-chevron-right"></i>
			</button>
			<div class="columns is-centered">		
				<div class="column is-half" id="cards-container">
				</div>				
			</div>
		</div>
	</section>
	<div class="modal">
	  <div class="modal-background"></div>
	  <div class="modal-card" style="overflow: visible;">
	    <header class="modal-card-head">
	      <p class="modal-card-title"></p>
	      <button class="delete" aria-label="close"></button>
	    </header>
	    <section class="modal-card-body">
			<div class="columns is-variable is-1 is-mobil">
				<div class="column is-three-quarters-desktop is-three-quarters-tablet ">
					<div class="field is-horizontal">
					  <div class="field-body">
					    <div class="field">
					      <div class="control">
			    			<label>Notas</label>
					        <textarea class="textarea auto-expand" id="input-description" name="description" placeholder="Qualquer coisa que seja importante"></textarea>
					      </div>
					    </div>
					  </div>
					</div>
					<div class="field is-horizontal">
					  <div class="field-body">
					    <div class="field">
					      <div class="control">
					        <button class="button is-rounded is-success" id="save-description">
					          Salvar
					        </button>
					      </div>
					    </div>
					  </div>
					</div>					
				</div>
				<div class="column">
					<div class="field is-horizontal">
						<div class="control">
							<label class="is-block">Disciplina</label>
							<div class="select">
							  <select id="modal-select-studyfield">
							  	<option value=""></option>
							  </select>
							</div>
						</div>
					</div>
				</div>
			</div>
	    </section>
		<footer class='modal-card-foot is-block'>
			<div class="dropdown is-up is-right is-pulled-right">
			  <div class="dropdown-trigger">
			    <button class="button is-rounded" id="btn-pre-archive" aria-haspopup="true" aria-controls="dropdown-menu">Excluir revisão</button>
			  </div>
			  <div class="dropdown-menu is-active" id='dropdown-archivereview' role="menu">
			    <div class="dropdown-content has-text-left">
			      <span class="dropdown-item has-text-centered">Tem certeza?</span>
			      <hr class="dropdown-divider">
			      <span class="dropdown-item is-size-7" >
			      	Não haverá como voltar atrás.
			      </span>							      
			      <span class="dropdown-item">	
			       <button class="button is-danger is-rounded is-fullwidth" id='archive-card'>Excluir revisão</button>
			      </span>
			    </div>
			  </div>
			</div>	     
	     </footer>
	  </div>
	</div>
	<footer class="footer has-background-white has-text-centered">
		<a class="button is-rounded" href="https://fixer.typeform.com/to/L52Jts" target="_blank">Dê feedback</a>
	</footer>	

 	<div class="tutorial has-background-white-ter is-hidden">
		<div class="tutorial-body has-text-centered">
			<span class="tutorial-content">
			 Oi! Que bom ter você aqui! Acesse o tutorial! <i class="far fa-smile"></i>
			</span>
			<br>
			<span class="counter-tutorial is-hidden"></span>
		</div>
		<div class="tutorial-footer has-text-centered">
			<button class="button is-link is-hidden" id="btn-back-tuto">Voltar</button>
			<button class="button is-success is-hidden" id="btn-advance-tuto">Avançar</button>
			<button class="button is-link" id="btn-skip-tuto">Pular</button>
			<button class="button is-success" id="btn-start-tuto">Começar</button>
			<button class="button is-success is-hidden" id="btn-end-tuto">Terminar</button>
		</div>
	</div>
  </body>
<script defer src="v/fontawesome/js/all.min.js"></script>	
<script type="text/javascript" src="v/js/jquery.min.js"></script>
<script type="text/javascript" src="v/js/app.min.js?asd=2"></script>
<script type="text/javascript" src="v/js/tuto.js"></script>
</html>
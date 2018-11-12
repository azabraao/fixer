$(document).ready(function(){
	function validateEach(){
		test = [];
		count=0;
		$('input').each(function(){
			if(!$.trim($(this).val())){
				$(this).parent().find('.help').show();
				$(this).addClass('is-danger');
				test[count] = false;
			}else{
				$(this).removeClass('is-danger');				
				$(this).parent().find('.help').hide();
				test[count] = true;
			}
			count++;
		});

		if($.inArray(false,test) == -1){
			return true;
		} else{
			return false;
		}
	}
	function isEmail(email) {
	  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  return regex.test(email);
	}	

	$('input').on("keydown",function(event){
			if(event.keyCode === 13) {
				$('#btn-login').trigger('click');
				$('#btn-cadastro').trigger('click');
		    }
	});	
			
	$(document).on('click','#btn-cadastro',function(){
		if(validateEach() && isEmail($('input[name=email]').val())){
			var nome = $('input[name=nome]').val();
			var email = $('input[name=email]').val();
			var senha = $('input[name=senha]').val();
			$.ajax({
				url: 'control/metodo/cadastraUsuario.php',
				method:'POST',
				data: {'nome':nome,'email':email,'senha':senha},
				method: 'POST',
				beforeSend:function(){
					$('#btn-cadastro').addClass('is-loading');
				},
				success: function(data){
					switch(data){
						case 'sucesso':
							window.location.href = "app";	
						break;
						case 'senha errada':
							$('#btn-cadastro').removeClass('is-loading');
							$('input[name=senha]').parent().find('.help').html('Essa conta já existe, mas a senha está errada <i class="far fa-grimace is-warning">').show();
						break;
					}
				}
			});
		} else if(!isEmail($('input[name=email]').val())){
			$('input[name=email]').addClass('is-danger');
	  		$('input[name=email]').parent().find('.help').html('Email inválido <i class="far fa-grimace is-warning">').show();
		}
	});
	$(document).on('click','#btn-login',function(){
		if(validateEach() && isEmail($('input[name=email]').val())){
			var email = $('input[name=email]').val();
			var senha = $('input[name=senha]').val();
			var keep_con = $('input[name=keep_conected]').is(':checked');
			$.ajax({
				url: 'control/metodo/validaLogin.php',
				method: 'POST',
				data: {'email':email,'senha':senha,'keep':keep_con},
				beforeSend:function(){
					$('#btn-login').addClass('is-loading');
				},
				success: function(data){
					switch(data){
						case 'sucesso':
							window.location.href = "app";	
						break;
						case 'inexistente':
							$('input[name=email]').parent().find('.help').html('Ainda não cadastrado. <a href="cadastro" class="has-text-link">Cadastre</a> <i class="fas fa-smile is-warning">').show();
							$('#btn-login').removeClass('is-loading');
						break;
						case 'senha errada':
							$('#btn-login').removeClass('is-loading');
							$('input[name=senha]').parent().find('.help').html('Senha errada <i class="far fa-grimace is-warning">').show();
						break;
					}
				},
				complete: function(){
					$('#btn-cadastro').removeClass('is-loading');					
				}
			});
		} else if(!isEmail($('input[name=email]').val())){
			$('input[name=email]').addClass('is-danger');
	  		$('input[name=email]').parent().find('.help').html('Email inválido <i class="far fa-grimace is-warning">').show();
		}		
	});	
	$(document).on('click','#btn-asks-reset',function(){
		var email = $('#email').val();
		if(isEmail(email)){
			$.ajax({
				url: 'control/metodo/asksResetPassword.php',
				data: {'email':email},
				beforeSend: function(){
					$('#email').val('');
					$('#btn-asks-reset').addClass('is-loading');
				},
				success: function(data){
				},
				complete: function(){
					$('.box').html('<p>Obrigado! Por favor, verifique seu email.</p><br><i class="fas fa-thumbs-up" style="font-size: 40px"></i>');
				}
			});
		}
	});
	$(document).on('click','#btn-reset',function(){
		var password = $('#password').val();
		var repeat_password = $('#repeat_password').val();
		var token = $('#hidden-token').val();
		var email = $('#hidden-email').val();
		var id_usuario = $('#hidden-id-usuario').val();

		if(password == repeat_password && repeat_password != '' && password != ''){
			$.ajax({
				url: 'control/metodo/resetPassword.php',
				method: 'POST',
				data: {'password':password,'token':token,'email':email,'id_usuario':id_usuario},
				beforeSend: function(){
					$('#password').val('');
					$('#repeat_password').val('');
					$('#btn-reset').addClass('is-loading');
				},
				success: function(data){
				},
				complete: function(){
					$('.box').html('<p class="is-size-4">Senha alterada!</p> <br><a class="has-text-link" href="app">Volte para o Fixer</a><br>');
				}
			});
		}else{
			$('#help-pass').html('As senhas não batem! <i class="far fa-grimace is-warning"></i>').show();
			console.log('oi');
		}
	});
});
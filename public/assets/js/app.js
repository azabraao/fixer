d = new Date();
hj = d.getFullYear()+"-"+(d.getMonth()+1 < 10 ? '0'+(d.getMonth()+1):(d.getMonth()+1))+"-"+d.getDate();
dia = d.getDate();
mes = d.getMonth();
ano = d.getFullYear();
data_review = [];
array_position = null;
_MS_PER_DAY = 1000 * 60 * 60 * 24;

listCards();
listStudyField();
listReviewCicle();

if(readCookie('tutorial_feito') == 0){
	$('.tutorial').removeClass('is-hidden');
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function resizeTextarea(id){
	$(id).each(function () {
		  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
		}).on('input', function () {
		  this.style.height = 'auto';
		  this.style.height = (this.scrollHeight) + 'px';
	});	
}
function dateDiffInDays(a, b) {
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  if(d.getDate() >= dia || d.getMonth() >= mes || d.getFullYear >= ano){
  	return 0;
  }else{
  	return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
}
function listCards(){
	m = d.getMonth()+1 < 10 ? '0'+(d.getMonth()+1):(d.getMonth()+1);
	day = d.getDate() < 10 ? '0'+(d.getDate()):(d.getDate());
	date = d.getFullYear()+"-"+m+"-"+d.getDate();

	$('#day-display').html(date != hj ? (day+"/"+m) : 'HOJE');  
	if(date != hj){
		$('#hj-helper').removeClass('is-hidden');  
	} else{
		$('#hj-helper').addClass('is-hidden');  
	}

	$('#btn-yesterday').prop('disabled',date == hj ? true : false);   
	$.ajax({
		url: '../app/switch.php?method=selectCards',
		dataType:'json',
		data: {'date':date},
		beforeSend: function(){
			$('#cards-container').html("<p id='loading-cards'>Carregando...</p>");			
		},
		success: function(data){
			if(data == ''){
				var emoji = ['fa-grin-hearts','fa-grin-stars','fa-smile-wink','fa-smile-beam','fa-smile']
				var rand = Math.floor((Math.random() * 5)); 
				$('#cards-container').html("<br><p>Sem revisões!</p><br><i class='is-size-1 far "+emoji[rand]+"'></i>");
			}
				data_review = data;
				$('#loading-cards').remove();
				var disciplina = false;
				for (var i = 0; i <= data.length -1; i++) {
					/*gets and sets the number of days late*/
					var dayslate = dateDiffInDays(new Date(data_review[i]['date_review']),new Date(hj))==0? "":"<span class='days-late-message is-uppercase has-text-danger'> ("+dateDiffInDays(new Date(data_review[i]['date_review']),new Date(hj))+" "+(dateDiffInDays(new Date(data_review[i]['date_review']),new Date(hj))==1?'dia':'dias')+" de atraso)</span>";
					if(disciplina !== data[i]['study_field']){
						var display = data[i]['study_field'] == "" || data[i]['study_field'] == null ?'Sem disciplina':data[i]['study_field'];
						var wrapper = $("<div class='study-field-wrapper'><div class='study-field has-text-left has-text-weight-bold'><span class='name-studyfield'>"+display+"</span><span class='chevron-studyfield'><i class='fa fa-chevron-down'></i></span></div>").appendTo('#cards-container');
					}
					$("<div class='box-wrapper'><i class='far fa-square' id='checker'></i><div class='box'><input type='hidden' name='pos_array' value="+i+"><article class='media'><div class='media-left'></div><div class='media-left'></div><div class='media-content'><div class='content'><p><strong class='review-title'>"+data[i]['title_review']+dayslate+"</strong></p></div></div></article></div></div>").appendTo($(wrapper));
					disciplina = data[i]['study_field'];
				}
		}
	});
}
function listStudyField(){
	$.ajax({
		url:'../app/switch.php?method=listStudyField',
		success: function(response){
			$("#div-add-field-dropdown-menu").html(response);
			listStudyFieldToModal();			
		}
	});	
}
function addStudyField(study_field){
	$.ajax({
		url:'../app/switch.php?method=addStudyField',
		data: {"study_field":study_field},
		success: function(response){
			$('<option value="'+study_field+'">'+study_field+'</option>').appendTo('#modal-select-studyfield');
		}
	});
}
function changeStudyField(study_field,id){
	$.ajax({
		url:'../app/switch.php?method=changeStudyField',
		data: {"study_field":study_field,"id":id},
		success: function(){
			listCards();
		}
	});	
}
function addReviewCicle(cicle){
	$.ajax({
		url:'../app/switch.php?method=addReviewCicle',
		data: {"config_cicle":cicle},
		success: function(response){
		}
	});	
}
function listReviewCicle(){
	$.ajax({
		url:'../app/switch.php?method=listReviewCicle',
		success: function(response){
			$(response).appendTo("#div-add-cicle-dropdown-menu");
		}
	});		
}
function listStudyFieldToModal(){
	$.ajax({
		url:'../app/switch.php?method=listStudyFieldToModal',
		success:function(data){
			$(data).appendTo('#modal-select-studyfield');
		}
	});
}
$(document).on('click','#hj-helper',function(){
	 d.setMonth(mes);
	 d.setFullYear(ano);
	 d.setDate(dia);
	 listCards();	
});

$(document).on('click','#btn-tomorrow',function(){
		d.setDate(d.getDate()+1);
		listCards();
});
$(document).on('click','#btn-yesterday',function(){
		d.setDate(d.getDate()-1);
		listCards();
});
$('#myModal').on('shown.bs.modal', function(){
  	$('#myInput').focus();
});
$(document).ready(function(){
	/* NAVBAR */
		$(document).on('click','.navbar-burger',function(){
			$('.navbar-menu').toggleClass('is-active');
		});

		$(document).on('click','.navbar-item',function(){
			$(this).toggleClass('is-active');
		});
	/* INPUT ADD REVIEW */

		/*field*/	
			$(document).on('keydown','#input-field-dropdown',function(e){
				if(!$.trim($(this).val())){
				} else if(e.keyCode == 13) {
					var set = $(this).val();
					$("<a class='dropdown-item dropdown-item-add-field'><span class='icon is-small'><i class='far fa-circle'></i></span><span class='field-dropdown'>"+set+"</span></a>").appendTo("#div-add-field-dropdown-menu");
					$(this).val('');
					addStudyField(set);
					$('#field-choicer').html(set);
					$('#btn-add-field').parent().parent().toggleClass('is-active');
			    }
			});
			$(document).on('click','#input-field-dropdown',function(e){
				if($.trim($(this).val())){
					var set = $(this).val();
					$('#field-choicer').html(set);
					$("#input-field-dropdown").val('');
					$("<a class='dropdown-item dropdown-item-add-field'><span class='icon is-small'><i class='far fa-circle'></i></span><span class='field-dropdown'>"+set+"</span></a>").appendTo("#div-add-field-dropdown-menu");
					$('#btn-add-field').parent().parent().toggleClass('is-active');
					addStudyField(set);
			    }
			});
			$(document).on('click',"#icon-input-field-dropdown",function(){
					var set = $("#input-field-dropdown").val();
					if($.trim(set)){
						$("<a class='dropdown-item dropdown-item-add-field'><span class='icon is-small'><i class='far fa-circle'></i></span><span class='field-dropdown'>"+set+"</span></a>").appendTo("#div-add-field-dropdown-menu");
						addStudyField(set);
					}
					$("#input-field-dropdown").val('');
			});
			$(document).on('click','.dropdown-item-add-field',function(){
				$('#field-choicer').html($(this).find('.field-dropdown').text());
				$('#btn-add-field').parent().parent().toggleClass('is-active');
			});
			$(document).on('click','#a-input-field-dropdown',function(){
				$('#input-field-dropdown').focus();
			});
			$(document).on('click','#btn-add-field',function(){
				$(this).parent().parent().toggleClass('is-active');
				$('#btn-add-cicle').parent().parent().removeClass('is-active');
			});

		/*cicle*/
			$(document).on('keydown','#input-cicle-dropdown',function(e){
				if(!$.trim($(this).val())){
				} else if(e.keyCode == 13) {
					var set = $(this).val();
					var array = set.split('-')
					if(isNaN(parseInt(array))){
						$('#add-cicle-notification').html('Use apenas números');
					} else if(array.length < 2){
						$('#add-cicle-notification').html('Pelo menos dois dias');				
					}else{
						$("<a class='dropdown-item dropdown-item-add-cicle'><span class='icon is-small'><i class='far fa-circle'></i></span><span class='cicle-dropdown'>"+set+"</span></a>").appendTo("#div-add-cicle-dropdown-menu");
						$(this).val('');					
						$('#cicle-choicer').html(set);
						$('#btn-add-cicle').parent().parent().toggleClass('is-active');
						addReviewCicle(set);
					}
			    }
			});
			$(document).on('click','#input-cicle-dropdown',function(e){
				if($.trim($(this).val())){
					var set = $(this).val();
					$('#cicle-choicer').html(set);
					$("#input-cicle-dropdown").val('');
					$("<a class='dropdown-item dropdown-item-add-cicle'><span class='icon is-small'><i class='far fa-circle'></i></span><span class='cicle-dropdown'>"+set+"</span></a>").appendTo("#div-add-cicle-dropdown-menu");
					$('#btn-add-cicle').parent().parent().toggleClass('is-active');
					addReviewCicle(set);
			    }
			});			
			$(document).on('click',"#icon-input-cicle-dropdown",function(){
					var set = $("#input-cicle-dropdown").val();
					if($.trim(set)){
						$("<a class='dropdown-item dropdown-item-add-cicle'><span class='icon is-small'><i class='far fa-circle'></i></span><span class='cicle-dropdown'>"+set+"</span></a>").appendTo("#div-add-cicle-dropdown-menu");
						addReviewCicle(set);
					}
					$("#input-cicle-dropdown").val('');
			});
			$(document).on('click','.dropdown-item-add-cicle',function(){
				$('#cicle-choicer').html($(this).find('.cicle-dropdown').text());
				$('#btn-add-cicle').parent().parent().toggleClass('is-active');
			});
			$(document).on('click','#a-input-cicle-dropdown',function(){
				$('#input-cicle-dropdown').focus();
			});
			$(document).on('click','#btn-add-cicle',function(){
				$(this).parent().parent().toggleClass('is-active');
				$('#btn-add-field').parent().parent().removeClass('is-active');
			});

		/*btn add set*/ 
			$(document).on('click','#btn-add-set',function(){
				var title = $('#input-title-review').val();
				var desc = $('#description').val();
				var field = $('#field-choicer').text() == 'disciplina' ? '' : $('#field-choicer').text();
				switch($('#cicle-choicer').text()){
					case 'ciclo':
						var cicle = $('#cicle-choicer').text() == 'ciclo' ? '1-7-15-30' : $('#cicle-choicer').text();
					break;
					case 'todos os dias':
						var cicle = $('#cicle-choicer').text() == 'todos os dias' ? '1-1-1' : $('#cicle-choicer').text();
					break;
					default:
						 var cicle = $('#cicle-choicer').text();
					break;
				}
				if(!$.trim($('#input-title-review').val())){
				} else{		
					$(this).prop('disabled',true);
					$.ajax({
						url: '../app/switch.php?method=addReview',
						method: 'POST',
						data: {'title':title,'description':desc,'field':field,'cicle':cicle},
						beforeSend: function(){
							$('#btn-add-set').addClass('is-loading');
						},
						success: function(data){
							$('#input-title-review').val('');
							$('#description').val('');
							$('#description').css("height","unset");
							$('#new-set-wrapper').removeClass('new-set-wrapper-on');
							$('.new-set-toggle').hide();
							$('#add-set-notification').stop().animate({opacity:'100'});	
							$('#add-set-notification').show();
							listCards();
						},
						complete: function(){
							var numDias = cicle.split("-");
							var diaDias = numDias[0] == 1 ? "amanhã." : "em "+numDias[0]+" dias.";
							$('#add-set-notification').html("<strong>'"+title+"'</strong> será revisado "+diaDias);
							$('#add-set-notification').removeClass('is-hidden');
							$('#add-set-notification').fadeOut(3000);
							$('#btn-add-set').removeClass('is-loading');
							$('#btn-add-set').prop('disabled',false);
						}
					});
				}
			});
			$(document).on('mouseover','#add-set-notification',function(){
				$(this).stop().animate({opacity:'100'});		
			});
			$(document).on('mouseout','#add-set-notification',function(){
				$(this).fadeOut(3000);
			});
			$(document).click(function(event) { 
			    if(!$(event.target).closest('#new-set-wrapper').length) {
						$('#new-set-wrapper').removeClass('new-set-wrapper-on');
						$('.new-set-toggle').hide();
			    }        
			});			
			
			$('.new-set-toggle').hide();
			$('#input-title-review,#label-add,#description').on("click keydown",function(event){
				$('#new-set-wrapper').addClass('new-set-wrapper-on');
				$('.new-set-toggle').show();
				$('.auto-expand').each(function () {
				  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
				}).on('input', function () {
				  this.style.height = 'auto';
				  this.style.height = (this.scrollHeight) + 'px';
				});	
				if(event.ctrlKey && event.keyCode == 13) {
					$('#btn-add-set').trigger('click');
			    }		
			});
	/* MODAL */
		$(document).on('change','#modal-select-studyfield',function(){
			if($(this).val() == data_review[array_position]['study_field']){
			} else{
				changeStudyField($(this).val(),data_review[array_position]['id_review']);
			}
		});
		$(document).on('click','.modal-background,.delete',function(){
			$('.modal').removeClass('is-active');
			$('.modal-card-title').text('');		
			$('#input-description').val('');	
			$('#input-description').css('height','unset');	
			$('#modal-select-studyfield').val('');
		});
		$(document).on('click','#btn-pre-archive',function(){
			$(this).parent().parent().toggleClass('is-active');
		});
		$(document).click(function(event) { 
		    if(!$(event.target).closest('#dropdown-archivereview').length && $(event.target).prop('id') != 'btn-pre-archive' && $(event.target).prop('id') != 'dropdown-archivereview' || $(event.target).prop('className') == 'modal') {
				var className = $('#btn-pre-archive').parent().parent().prop('className').split(' ');
				if(className.indexOf('is-active') != -1){
					$('#btn-pre-archive').parent().parent().removeClass('is-active');
				}
		    }        
		});
		$(document).on('click','#archive-card',function(){
			$(this).addClass('is-loading');
			var id = data_review[array_position]['id_review'];
			$.ajax({
				url: '../app/switch.php?method=archiveCard',
				data: {'id':id},
				success:function(data){
				},
				complete:function(){
					$('.modal').removeClass('is-active');
					listCards();
					$('#archive-card').removeClass('is-loading');
				}
			});
		});

		$(document).on('click keydown','#input-description',function(){
			$('#input-description').css('cursor','text');
			$('#save-description').text('Salvar')
			$('#save-description').show();
		});

		$(document).on("keydown","#input-description",function(e){
			if(e.ctrlKey && e.keyCode == 13) {
				$('#save-description').trigger('click');
		    }
		});

		$(document).on('click','#save-description',function(){
			var desc = $('#input-description').val();
			var id = data_review[array_position]['id_review'];
			data_review[array_position]['desc_review'] = desc;
			$.ajax({
				url: '../app/switch.php?method=updateDescription',
				data: {'id':id,'desc':desc},
				beforeSend:function(){
					$('#save-description').addClass('is-loading');
				},
				complete:function(){
					$('#save-description').addClass('is-loading');
					setTimeout("$('#save-description').removeClass('is-loading')",500);
					setTimeout("$('#save-description').text('Salvo!')",500);
					setTimeout("$('#save-description').hide()",1000);
					setTimeout("$('#input-description').css('border','none')",1000);
					setTimeout("$('#input-description').css('box-shadow','none')",1000);
					setTimeout("$('#input-description').css('cursor','pointer')",1000);	
					setTimeout("$('#input-description').css('resize','none')",1000);
				}
			});
		});

		$(document).on('keyup',function(event){
			if(event.keyCode == 27){
				$('.modal').removeClass('is-active');
			}
		});
	/* CARDS */
		$(document).on('click','.study-field',function(){
			$(this).parent().find('.box-wrapper').toggleClass('is-hidden');
			$(this).find('.chevron-studyfield').toggleClass('rotate-90deg');
		});		

		$(document).on('click','.box',function(){
			array_position = $(this).find('input[name=pos_array]').val();
			$('.modal-card-title').text(data_review[array_position]['title_review']);
			$('#input-description').val(data_review[array_position]['desc_review']);				
			$("#modal-select-studyfield").val(data_review[array_position]['study_field']).change();
			$('.modal').addClass('is-active');	
			resizeTextarea("#input-description");
			if($('#input-description').val() != ''){
				$('#input-description').css('border','none');
				$('#input-description').css('box-shadow','none');
				$('#input-description').css('cursor','pointer');
				$('#input-description').css('resize','none');
				$('#save-description').hide();
			}
		});


		$(document).on('mouseover','.animated',function(){
			$(this).stop().animate();
			$(this).css('opacity',1);
			ajaxRequest = false;			
		});
		$(document).on('mouseleave','.animated',function(){
				$(this).fadeOut(3000,function(){
					wrapper = $(this).closest('.study-field-wrapper');			
					$(this).remove();
					if($(wrapper).children().length == 1){
						$(wrapper).remove();
					}
					if($('#cards-container').children().length == 0){
						var emoji = ['fa-grin-hearts','fa-grin-stars','fa-smile-wink','fa-smile-beam','fa-smile']
						var rand = Math.floor((Math.random() * 5)); 
						$('#cards-container').html("<br><p>Parabéns!</p><br><i class='is-size-1 far "+emoji[rand]+"'></i>");
					}
				});
		});
		$(document).on('click','#unchecker',function(e){
			var array_position = $(this).parent().find('input[name=pos_array]').val();			
			var id = data_review[array_position]['id_review'];
			var ciclo = parseInt(data_review[array_position]['step_cicle']);
			var date_review = data_review[array_position]['date_review'];
	 		$.ajax({
				url:'../app/switch.php?method=scheduleNextReview',
				method:'POST',
				data: {'id':id,'ciclo':ciclo,'date_review':date_review},
				success: function(response){
				}
			});						
			$(this).parent().stop().animate();
			$(this).parent().css('opacity',1);
			$(this).parent().removeClass('animated');		
			$(this).parent().children().find('.next-review-message').remove();
			$(this).parent().find('.days-late-message').show();
			$(this).remove();

		});
		$(document).on('click','#checker',function(e){
			$('<i class="far fa-check-square" id="unchecker"></i>').appendTo($(this).parent());
			var array_position = $(this).next().find('input[name=pos_array]').val();			
			var id = data_review[array_position]['id_review'];
			var ciclo = parseInt(data_review[array_position]['step_cicle'])+1;
			var config_cicle = data_review[array_position]['config_cicle'];
			var etapa = config_cicle.split('-');
			var interval = etapa[ciclo] == null ? etapa[etapa.length-1] : etapa[ciclo-1];
			var dia_dias = interval == 1 ? 'dia' :'dias';	
			$(this).parent().addClass('animated');
			$(this).parent().fadeOut(3000,function(){
				wrapper = $(this).closest('.study-field-wrapper');			
				$(this).remove();
				if($(wrapper).children().length == 1){
					$(wrapper).remove();
				}
				if($('#cards-container').children().length == 0){
					var emoji = ['fa-grin-hearts','fa-grin-stars','fa-smile-wink','fa-smile-beam','fa-smile']
					var rand = Math.floor((Math.random() * 5)); 
					$('#cards-container').html("<br><p>Parabéns!</p><br><i class='is-size-1 far "+emoji[rand]+"'></i>");
				}
			});
			$(this).next().find('.days-late-message').hide();
			var element = $(this).next().find('.review-title');

			$('<span class="has-text-weight-normal has-text-info next-review next-review-message "><span class="has-text-black">:</span> próxima revisão em '+interval+' '+dia_dias+'</span>').appendTo($(element));
	 		$.ajax({
				url:'../app/switch.php?method=scheduleNextReview',
				method:'POST',
				data: {'id':id,'ciclo':ciclo,'interval':interval},
				success: function(response){
				}
			});
		});
});
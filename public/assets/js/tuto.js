$(document).ready(function(){
	tutorial = [];
	tutorial[0] = ['Oi! Que bom ter você aqui! Acesse o tutorial! <i class="far fa-smile"></i>'];
	tutorial[1] = ["Clique em 'Adicione uma revisão'."];
	tutorial[2] = ["Dê um nome e opcionalmente adicione uma nota, uma disciplina ou modifique o ciclo da revisão e por fim clique em  'adicionar'. "];
	tutorial[3] = ["Clique na seta à direita de 'HOJE' para navegar até achar sua revisão."];
	tutorial[4] = ["Ao achar sua revisão, clique sobre ela."];
	tutorial[5] = ["Este é seu painel de controle, aqui você pode adicionar notas úteis para o momento de sua revisão! Agora feche o painel. <i class='far fa-smile'></i>"];
	tutorial[6] = ["Pronto! Agora basta concluir a sua lista de estudos clicando no checklist! Bons estudos! <i class='far fa-smile'></i>"];
 	count = 1;
 	
 	function advanceTuto(step){
 		count = step;
 		$('.tutorial-content').html(tutorial[count]);
 		$('.counter-tutorial').removeClass('is-hidden');
 		$('.counter-tutorial').text(count+"/6");
 		if(step == 6){
			$("#btn-advance-tuto").addClass('is-hidden');
			$("#btn-start-tuto").addClass('is-hidden');
			$('#btn-end-tuto').removeClass('is-hidden')
 		}
 	}
 	function backTuto(){
 		count--;
 		$('.tutorial-content').html(tutorial[count]);
 		$('.counter-tutorial').text(count+"/6"); 		
 		if(count == 0){
	 		$('#btn-advance-tuto').addClass('is-hidden');
	 		$('#btn-back-tuto').addClass('is-hidden'); 		
	 		$('.counter-tutorial').addClass('is-hidden');
	 		$('#btn-start-tuto').removeClass('is-hidden');
	 		$('#btn-skip-tuto').removeClass('is-hidden');
 		}
 		if(count == 5){
			$('#btn-end-tuto').addClass('is-hidden');
			$('#btn-advance-tuto').removeClass('is-hidden');				
 		} 		
 	}
 	function endTuto(){
 		$('.tutorial').remove();
 		$.ajax({
 			url:'app/switch.php?method=setTutorialAsDone=',
 			success: function(data){
 				console.log(data);
 			}
 		});
 	}
 	function startTuto(){
 		$('#btn-start-tuto').addClass('is-hidden');
 		$('#btn-skip-tuto').addClass('is-hidden');
 		$('#btn-advance-tuto').removeClass('is-hidden');
 		$('#btn-back-tuto').removeClass('is-hidden'); 		
 		$('.counter-tutorial').removeClass('is-hidden');
 		count = 1;
 		$('.counter-tutorial').text(count+"/6"); 		
 		$('.tutorial-content').html(tutorial[count]); 		 		
 	}
 	$(document).on('click','#btn-advance-tuto',function(){
 		count++;
 		advanceTuto(count);
 	});
 	$(document).on('click','#btn-back-tuto',function(){
 		backTuto();
 	});
 	$(document).on('click','#btn-skip-tuto, #btn-end-tuto',function(){
 		endTuto();
 	});
 	$(document).on('click','#btn-start-tuto',function(){
 		startTuto();
 	});
 	$(document).on('click','#input-title-review',function(){
 		startTuto();
 		advanceTuto(2);
 	});
 	$(document).on('click','#btn-add-set',function(){
 		advanceTuto(3);
 	});
 	$(document).on('click','#btn-tomorrow',function(){
 		advanceTuto(4);
 	});
 	$(document).on('click','.box',function(){
 		advanceTuto(5);
 	});
 	$(document).on('click','.delete,.modal-background',function(){
 		advanceTuto(6);
 	});
});
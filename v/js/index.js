	$(document).on('click','#checker',function(e){
		$(this).parent().fadeOut(200,function(){
			$(this).remove();
			if($('#cards-container').find('div').length == 0){
				var onethirteen = Math.floor((Math.random() * 14) + 1); 
				$('#cards-container').html("<br><p class='has-text-centered'>Acabou! <i class='far fa-smile-beam'></i></p>");			
			}
		});
	});


	// MODAL
	$(document).on('click','.modal-background,.delete',function(){
		$('.modal').removeClass('is-active');
	});

	$(document).on('keyup',function(event){
		if(event.keyCode == 27){
			$('.modal').removeClass('is-active');
		}
	});

	// CARDS
	$(document).on('click','.box',function(){
		$('.modal').addClass('is-active');
		$('.modal-card-title').text($(this).find('.content').text());
	});
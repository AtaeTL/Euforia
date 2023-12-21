$(document).ready(function() {
    //Ouvrir le modal
    $('#open-modal').click(function() {
        $('#modal-to-open').css(
            {
                'display' : 'block'
            }
        );
    });
    //Fermer le modal
    $('#close-modal').click(function() {
        $('#modal-to-open').css(
            {
                'display' : 'none'
            }
        );
	});
	    //Ouvrir le modal
		$('#open-modal2').click(function() {
			$('#modal-to-open2').css(
				{
					'display' : 'block'
				}
			);
		});
		//Fermer le modal
		$('#close-modal2').click(function() {
			$('#modal-to-open2').css(
				{
					'display' : 'none'
				}
			);
		});
    //Envoyer un mail avec Ajax
    /*$('#envoyer-email').click(function(e){
		e.preventDefault(); //Pour éviter le reload
		var data = {
            name: $('#nom').val(),
            name: $('#prénom').val(),
			email: $('#email').val(),
			message: $('#message').val()
        };
        //Ajax
		$.ajax({
			url: "mail.php",
			type: 'POST',
			data: data,
			success: function(data) {
				$('#js_alert_success').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_success').css({'display' : 'none'});
					$('#nom').val("");
					$('#prénom').val("");
					$('#email').val("");
					$('#message').val("")
				}, 3000);
			},
			error: function(data) {
				$('#js_alert_danger').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_danger').css({'display' : 'none'});
					$('#nom').val("");
					$('#prénom').val("");
					$('#email').val("");
					$('#message').val("")
				}, 3000);
			}
        });
       });*/
 
    
    
});
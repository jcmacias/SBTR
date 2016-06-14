/**
 * Created by Julio Cesar on 4/18/2016.
 */
jQuery(function($) {
// Contact form
var form = $('#main-contact-form');
form.submit(function(event){
    event.preventDefault();
    var form_status = $('<div class="form_status col-md-12"></div><br/>');
    $.ajax({
        url: $(this).attr('action'),
        beforeSend: function(){
            form.prepend( form_status.html('<p><i class="fa fa-icon-spinner fa-icon-spin"></i> Email is sending...</p>').fadeIn() );
        }
    }).done(function(data){
        form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
    });
});
});
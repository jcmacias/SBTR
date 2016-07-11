/**
 * Created by Julio Cesar on 4/18/2016.
 */
//jQuery(function($) {
//// Contact form
//var form = $('#main-contact-form');
//form.submit(function(event){
//    event.preventDefault();
//    var form_status = $('<div class="form_status col-md-12"></div><br/>');
//    $.ajax({
//        url: $(this).attr('action'),
//        type:'post',
//        beforeSend: function(){
//            form.prepend( form_status.html('<p><i class="fa fa-icon-spinner fa-icon-spin"></i> Email is sending...</p>').fadeIn() );
//        }
//    }).done(function(data){
//        form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
//    });
//});
//});
jQuery( document ).ready(function() {
    jQuery(function() {
        // Get the form.
        var form = $('#main-contact-form');
        form.submit(function(event){
            event.preventDefault();

            // Get the messages div.
            var formMessages = $('#form_status');

            // Serialize the form data.
            var formData = $(form).serialize();

            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            }).done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
                //$(formMessages).addClass('success');
                //$(formMessages).addClass('success');

                // Set the message text.
                // $(formMessages).text(response);

                // Clear the form.
                $('#contact_name').val('');
                $('#contact_email').val('');
                $('#subject').val('');
                $('#message').val('');
            }).fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).html('<p class="text-success">Oops! An error occured and your message could not be sent.</p>').delay(3000).fadeOut();
                //$(formMessages).removeClass('success');
                //$(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
        });
    });
});

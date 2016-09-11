(function($) {

    // consider refactoring modals and alerts into one "dismissible overlay" class
    var modal = {
        'initDelay': 500,
        'fadeTime': 500,
        'active': false,
        'content': null,
        'set': function(content) {
            // falsey content means no modal
            this.active = !content ? false : true;
            this.content = content;
        }
    };
    var alert = {
        'fadeTime': 500,
        'dismissClass': 'alert-sleeping'
    };

    function validate() {
        // at least one field must be filled out for me to want an email
        var formFields, i, foundOne;
        formFields = $('.form-field');
        i = formFields.length;
        while (i--) {
            foundOne = $(formFields[i]).val().length !== 0;
            if (foundOne === true)
                return true;
        }
        // Validation error alert
        // TODO alerts template
        $('#contact-validation-alert').html(
            '<i class="icon alert-state-icon fa fa-exclamation-circle" aria-hidden="true"></i>' +
            '<div class="alert-message">' +
            'Message not sent. There doesn\'t seem to be anything written.' +
            '</div>' +
            '<i class="alert-dismiss icon fa fa-close" aria-hidden="true"></i>'
        ).fadeIn(alert.fadeTime).removeClass(alert.dismissClass);

        return false;
    }

    $(document).ready(function() {

        /*
        Alerts
        */
        $('.alert').on('click', '.alert-dismiss', function(ev) {
            $(this).closest('.alert').fadeOut(alert.fadeTime, function() {
                $(this).addClass(alert.dismissClass);
            });
        });

        /*
        Modals
        */
        $('.img-link-wrap a, .wall-link').click(function(ev) {
            // make sure we can't click anything behind the modal
            if (modal.active === true) {
                ev.preventDefault();
            }
        });
        // Check for a modal specified by the fragment identifier
        if (window.location.hash) {
            modal.set($(window.location.hash).find('.modal-content'));
            $(window.location.hash).delay(modal.initDelay).fadeIn(modal.fadeTime, function() {
                $('html, body').scrollTop($(modal.content).offset().top);
            });
        }
        // Open modal
        $('.btn-modal').click(function(ev) {
            if (modal.active === false) {
                ev.preventDefault();
                $('.modal').fadeOut(modal.fadeTime);
                modal.set($($(this).attr('href')).find('.modal-content'));
                $($(this).attr('href')).fadeIn(modal.fadeTime, function() {
                    $("html, body").scrollTop($(modal.content).offset().top);
                });
            }
        });
        // Close modal
        $(document).click(function(event) {
            if ($(event.target).is('.modal-front, .modal-back, .btn-close')) {
                modal.set(null);
                $('.modal').fadeOut(modal.fadeTime);
            }
        });

        // key commands
        $(document).keydown(function(ev) {
            //esc key (closes modal)
            if (ev.keyCode === 27) {
                modal.set(null);
                $('.modal').fadeOut(modal.fadeTime);
            }
        });

        // submissions
        $('#btn-submit').click(function(ev) {
            ev.preventDefault();
            if (validate() === true)
                $('form:first').submit();
        });
        $('#btn-resume').click(function() {
            ga('send', 'event', 'button', 'click', 'resume-click');
        });
    });
})(jQuery);

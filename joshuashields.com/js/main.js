(function($) {

    var modal = {
        'delay': 500,
        'active': false,
        'content': null,
        'set': function(content) {
            // falsey content means no modal
            this.active = !content ? false : true;
            this.content = content;
        }
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
        $('#contact-alert').show();
        return false;
    }

    $(document).ready(function() {

        $('.img-link-wrap a, .wall-link').click(function(ev) {
            // make sure we can't click anything behind the modal
            if (modal.active === true) {
                ev.preventDefault();
            }
        });

        // modals
        if (window.location.hash) {
            modal.set($(window.location.hash).find('.modal-content'));
            $(window.location.hash).delay(modal.delay).fadeIn('fast', function() {
                $('html, body').scrollTop($(modal.content).offset().top);
            });
        }
        $('.btn-modal').click(function(ev) {
            if (modal.active === false) {
                ev.preventDefault();
                $('.modal').fadeOut('fast');
                modal.set($($(this).attr('href')).find('.modal-content'));
                $($(this).attr('href')).fadeIn('fast', function() {
                    $("html, body").scrollTop($(modal.content).offset().top);
                });
            }
        });
        $(document).click(function(event) {
            if ($(event.target).is('.modal-front, .modal-back, .btn-close')) {
                modal.set(null);
                $('.modal').fadeOut('fast');
            }
        });

        //key commands
        $(document).keydown(function(ev) {
            //esc key (closes modal)
            if (ev.keyCode === 27) {
                modal.set(null);
                $('.modal').fadeOut('fast');
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

(function($) {
    'use strict';

    var KEYS = {
        tab: 9,
        shift: 16,
        esc: 27,
    };
    // consider refactoring modals and alerts into one class
    var modal = {
        initDelay: 500,
        fadeTime: 500,
        active: false,
        content: null,
        set: function(content) {
            // falsey content means no modal
            this.active = !content ? false : true;
            this.content = content;
            // TODO
            //this.name = content.data('modal-name');
        },
        close: function() {
            this.set(null);
            $('.modal').fadeOut(this.fadeTime);
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

        (function initModals() {
            $('.modal').attr({
                tabIndex: -1,
                role: 'dialog'
            });
        })();

        // Check for a modal specified by the fragment identifier
        var frag = window.location.hash;
        if (frag) {
            modal.set($(frag).find('.modal-content'));
            $(frag).delay(modal.initDelay).fadeIn(modal.fadeTime, function() {
                $('html, body').scrollTop($(modal.content).offset().top);
            });
        }

        var handleClick = function(ev) {
            if ($(ev.target).is('.btn-modal')) {
                if (modal.active === false) {
                    ev.preventDefault();
                    var modalId = $(ev.target).attr('href');
                    // set modal content and active
                    modal.set($(modalId).find('.modal-content'));
                    // fade in the modal
                    $(modalId).fadeIn(modal.fadeTime, function() {
                        // scroll to modal content
                        $('html, body').scrollTop($(modal.content).offset().top);
                    });
                }
                return;
            }
            if ($(ev.target).is('.alert-dismiss')) {
                //var thisAlert = $(ev.target).closest('.alert');
                $(ev.target).closest('.alert').fadeOut(alert.fadeTime, function() {
                    // TODO retest this
                    $(this).addClass(alert.dismissClass);
                });
                return;
            }
            if ($(ev.target).is('.img-link-wrap a, .wall-link')) {
                // Make sure we can't click anything behind the modal
                if (modal.active === true) {
                    ev.preventDefault();
                }
                return;
            }
            if ($(ev.target).is('.modal-front, .modal-back, .btn-close')) {
                modal.close();
                return;
            }
            if ($(ev.target).is('#btn-submit')) {
                ev.preventDefault();
                if (validate() === true) {
                    $('#contact-form').submit();
                }
                return;
            }
            if ($(ev.target).is('#btn-resume')) {
                ga('send', 'event', 'button', 'click', 'resume-click');
                return;
            }

        };
        // TODO test this
        var handleKeydown = function(ev) {
            var thisModal = $(ev.target).closest('.modal');
            if (thisModal.length) {
                // TODO

                // Prevent tabbing out of dialogs
                //ev.which !== $.ui.keyCode.TAB ||
                if (ev.isDefaultPrevented()) {
                    return;
                }
                if (ev.which === $.ui.keyCode.TAB) {
                    var tabbables = thisModal.find(':tabbable'),
                        first = tabbables.filter(':first'),
                        last = tabbables.filter(':last');
                    if ((ev.target === last[0] || ev.target === thisModal[0]) && !ev.shiftKey) {
                        first.trigger('focus');
                        //first.focus();
                        ev.preventDefault();
                    } else if ((ev.target === first[0] || ev.target === thisModal[0] ) && ev.shiftKey ) {
                        last.trigger('focus');
                        ev.preventDefault();
                    }
                }
            }

            if (ev.which === $.ui.keyCode.ESCAPE) {
                modal.close();
            }

        };
        $(document).on({
            'click': handleClick,
            'keydown': handleKeydown
        });
    });
})(jQuery);

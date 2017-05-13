(function($) {
    'use strict';

    var KEYS = {
        tab: 9,
        shift: 16,
        esc: 27,
    };
    // consider refactoring modals
    var modal = {
        initDelay: 500,
        fadeTime: 500,
        active: false,
        content: null,
        set: function(content) {
            // falsey content means no modal
            this.active = !content ? false : true;
            this.content = content;
        },
        close: function() {
            this.set(null);
            $('.modal').fadeOut(this.fadeTime);
        }
    };

    $(document).ready(function () {

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
            $(frag).delay(modal.initDelay).fadeIn(modal.fadeTime, function () {
                $('html, body').scrollTop($(modal.content).offset().top);
            });
        }

        var handleClick = function (ev) {
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
                        $(this).focus();
                    });
                }
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

            if ($(ev.target).is('#btn-resume')) {
                ga('send', 'event', 'button', 'click', 'resume-click');
                return;
            }

        };

        var handleKeydown = function (ev) {
            var thisModal = $(ev.target).closest('.modal');
            if (thisModal.length) {
                // Loop tabbing while inside a dialog for a11y and UX
                if (ev.isDefaultPrevented()) {
                    return;
                }
                if (ev.which === $.ui.keyCode.TAB) {
                    // tabbable selector comes from jQuery UI
                    var tabbables = thisModal.find(':tabbable'),
                        first = tabbables.filter(':first'),
                        last = tabbables.filter(':last');
                    if ((ev.target === last[0] || ev.target === thisModal[0]) && !ev.shiftKey) {
                        first.trigger('focus');
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

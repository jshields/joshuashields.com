// TODO module.exports = {};

var Template = {
    init: function(templateFile) {
        // initialize a template by template file
        var markup = function() {
            // create jQuery object by
            // selecting contents of template
            var resp = $.ajax(templateFile);
            return $(resp);
        }();

        this.template = $.clone(markup);
    },
    render: function() {
        if (this.template) {
            var i = arguments.length;
            var templateVar;
            while (i--) {
                // args passed to render should be subbed into
                // the innerHTML of the corresponding data attr
                templateVar = arguments[i];

                if (this.template.data(templateVar)) {

                }
                else {
                    console.error('Unrecognized template variable: ' + templateVar);
                }
            }
        }
        else {
            this.init();
        }
    }
};

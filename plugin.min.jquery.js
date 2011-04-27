(function($) {

    $.fn.pluginName = function(method) {

        var defaults = {
            foo: 'bar'
        }

        var settings = {}

        var methods = {

            init : function(options) {
                return this.each(function() {
                    settings = $.extend({}, defaults, options)
                    var element = $(this);
                    // code goes here
                });
            },

            foo_public_method: function() {
                // code goes here
            }

        }

        var helpers = {

            foo_private_method: function() {
                // code goes here
            }

        }

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error( 'Method "' +  method + '" does not exist in pluginName plugin!');
        }

    }

})(jQuery);
// remember to change every instance of "pluginName" to the name of your plugin!
(function($) {

    // here it goes!
    $.fn.pluginName = function(method) {

        // plugin's default options
        var defaults = {

            foo: 'bar'

        }

        // this will hold the merged default and user-provided properties
        // you will have to access the plugin's properties through this object!
        // settings.propertyName
        var settings = {}

        // public methods
        // to keep the $.fn namespace uncluttered, collect all of the plugin's methods in an object literal and call
        // them by passing the string name of the method to the plugin
        //
        // public methods can be called as
        // $(selector).pluginName('methodName', arg1, arg2, ... argn)
        // where "pluginName" is the name of your plugin and "methodName" is the name of a function available in
        // the "methods" object below; arg1 ... argn are arguments to be passed to the method
        //
        // or, from within the plugin itself, as
        // methods.methodName(arg1, arg2, ... argn)
        // where "methodName" is the name of a function available in the "methods" object below
        var methods = {

            // this the constructor method that gets called when the object is created
            init : function(options) {

                // iterate through all the DOM elements we are attaching the plugin to
                return this.each(function() {

                    // the plugin's final properties are the merged default and user-provided properties (if any)
                    // this has the advantage of not polluting the defaults, making the same instace re-usable with
                    // new options; thanks to Steven Black for suggesting this
                    settings = $.extend({}, defaults, options)

                    // "element" holds the jQuery object of the current DOM element
                    var element = $(this);

                    // code goes here

                });

            },

            // a public method. for demonstration purposes only - remove it!
            foo_public_method: function() {

                // code goes here

            }

        }

        // private methods
        // these methods can be called only from within the plugin
        //
        // private methods can be called as
        // helpers.methodName(arg1, arg2, ... argn)
        // where "methodName" is the name of a function available in the "helpers" object below; arg1 ... argn are
        // arguments to be passed to the method
        var helpers = {

            // a private method. for demonstration purposes only - remove it!
            foo_private_method: function() {

                // code goes here

            }

        }

        // if a method as the given argument exists
        if (methods[method]) {

            // call the respective method
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));

        // if an object is given as method OR nothing is given as argument
        } else if (typeof method === 'object' || !method) {

            // call the initialization method
            return methods.init.apply(this, arguments);

        // otherwise
        } else {

            // trigger an error
            $.error( 'Method "' +  method + '" does not exist in pluginName plugin!');

        }

    }

})(jQuery);
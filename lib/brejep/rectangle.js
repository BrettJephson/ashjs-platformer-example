(function( root, factory ) {
    // We want the object to work with or without AMD
    if( typeof define === 'function' && define.amd ) {
        define('brejep/rectangle', factory );
    } else {
        // If not using AMD, references to dependencies must be available on the root object
        if( typeof root.brejep === 'undefined') {
            root.brejep = {};
        }
        root.brejep.rectangle = factory();
    }
} ( this, function() {
    "use strict";
    function Rectangle( x, y, w, h ) {
        this.width = w || 0;
        this.height = h || 0;
        this.x = x || 0;
        this.y = y || 0;
    }

    var api = Rectangle.prototype;

    api.left = api.right = api.top = api.bottom = null;
    api.width = null;
    api.height = null;

    api.__defineSetter__("x", function(x) {
        this.left = x;
        this.right = x + this.width;
    });
    api.__defineSetter__("y", function(y) {
        this.top = y;
        this.bottom = y + this.height;
    });

    api.intersects = function( test ) {
        return (
            this.left <= test.right &&
            test.left <= this.right &&
            this.top <= test.bottom &&
            test.top <= this.bottom
        );
    };
    return Rectangle;
}));
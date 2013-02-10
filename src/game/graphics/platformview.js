define( "game/graphics/platformview",
    [],
    function() {
        function PlatformView( graphics ) {
            this.initialise( graphics );
        }
        var api = PlatformView.prototype;
        api.graphics = null;
        api.x = 0;
        api.y = 0;
        api.width = 50;
        api.height = 5;
        api.initialise = function( graphics ) {
            this.graphics = graphics;
            this.draw();
            return this;
        };
        api.draw = function() {
            var graphics = this.graphics;
            graphics.save();
            graphics.beginPath();
            graphics.fillStyle = "#fff";
            graphics.fillRect( this.x, this.y, this.width, this.height );
            graphics.restore();
        };
        return PlatformView;
    }
);
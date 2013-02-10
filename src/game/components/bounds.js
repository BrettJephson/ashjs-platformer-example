define( "game/components/bounds",
    [ "brejep/rectangle" ],
    function( Rectangle ) {
        function Bounds( x, y, w, h ) {
            this.rectangle = new Rectangle( x, y, w, h );
        }
        return Bounds;
    }
);

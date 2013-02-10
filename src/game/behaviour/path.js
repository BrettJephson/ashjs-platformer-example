define( 'game/behaviour/path',
    [ 'brejep/point' ],
    function( Point )
    {
        function Path( initialX, initialY, targetX, targetY )
        {
            this.initial = new Point( initialX, initialY );
            this.target = new Point( targetX, targetY );
        }
    }
)
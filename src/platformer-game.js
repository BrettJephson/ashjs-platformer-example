define( 'platformer-game', ["brejep/fillsnfixes", "game/platformer"],
    function( Fixes, Platformer ) {
        "use strict";

        function PlatformerGame() {
            var CANVAS_WIDTH = 800,
                CANVAS_HEIGHT = 600;

            // Game initialisation

            this.initialise = function() {
                // some polyfills and additions to base javascript classes
                Fixes.initialise();

                var canvasElem = createCanvas();
                document.getElementById( "game_wrapper" ).appendChild( canvasElem );

                var platformer = new Platformer();
                platformer.initialise( canvasElem );
                platformer.start();
            }

            function createCanvas() {
                var canvasElem = document.createElement( "canvas" );
                canvasElem.setAttribute( "id", "game_stage" );
                canvasElem.setAttribute( "width", CANVAS_WIDTH );
                canvasElem.setAttribute( "height", CANVAS_HEIGHT );
                canvasElem.style.backgroundColor = "#cfcfcf";
                return canvasElem;
            }
        }
        return new PlatformerGame();
    }
);
define( "game/systems/gamemanager",
    [ "ash/system", "game/nodes/playercollision", "game/nodes/platformcollision" ],
    function( System, PlayerCollision, PlatformCollision ) {
        function GameManager( gameState, creator ) {
            Object.extend( GameManager.prototype, System.prototype );
            this.initialise( gameState, creator );
        }
        var api = GameManager.prototype;
        api.gameState = null;
        api.creator = null;
        api.players = null;
        api.platforms = null;

        api.initialise = function( gameState, creator ) {
            this.gameState = gameState;
            this.creator = creator;
            return this;
        };
        api.addToEngine = function( engine ) {
            this.players = engine.getNodeList( PlayerCollision );
            this.platforms = engine.getNodeList( PlatformCollision );
        };
        api.removeFromEngine = function( engine ) {
            this.players = null;
            this.platforms = null;
        };
        api.update = function() {
            if( this.platforms.empty() ) {
                this.creator.constructLevel();
            }
            if( this.players.empty() ) {
                if( this.gameState.lives > 0 ) {
                    this.creator.createPlayer(this.platforms.head.position);
                    this.gameState.lives--;
                }
            }
        };
        return GameManager;
    }
);
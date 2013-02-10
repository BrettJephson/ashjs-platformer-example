define( "game/systems/collisionsystem",
    [ "ash/system", "game/nodes/playercollision", "game/nodes/platformcollision" ],
    function( System, PlayerCollision, PlatformCollision )
    {
        function isColliding( collidableA, collidableB )
        {
            return collidableA.bounds.rectangle.intersects( collidableB.bounds.rectangle );
        }

        function CollisionSystem( creator )
        {
            Object.extend( CollisionSystem.prototype, System.prototype );
            this.initialise( creator );
        }

        var api = CollisionSystem.prototype;
        api.creator = null;
        api.players = null;
        api.platforms = null;
        api.initialise = function( creator )
        {
            this.creator = creator;
            return this;
        };
        api.addToEngine = function( game )
        {
            this.platforms = game.getNodeList( PlatformCollision );
            this.players = game.getNodeList( PlayerCollision );
        };
        api.removeFromEngine = function( game )
        {
            this.creator = null;
            this.players = null;
            this.platforms = null;
        };
        api.update = function( time )
        {
            var player,
                platform;

            for ( player = this.players.head; player; player = player.next )
            {
                for ( platform = this.platforms.head; platform; platform = platform.next )
                {
                    if( isColliding( player, platform ) )
                    {
                        if( player.jumpmotion.isFalling && ( player.bounds.rectangle.bottom <= platform.bounds.rectangle.bottom ) )
                        {
                            player.motion.velocity.y = 0;

                            player.jumpmotion.isGrounded = true;
                            player.jumpmotion.isFalling = false;

                            player.bounds.rectangle.y = player.position.position.y = platform.position.position.y - player.bounds.rectangle.height;
                        }
                        break;
                    }
                    else
                    {
                        player.jumpmotion.isGrounded = false;
                    }
                }
            }
        };
        return CollisionSystem;
    }
);
define( "game/entitycreator",
    [
        "ash/entity",
        "game/components/player",
        "game/components/platform",
        "game/components/position",
        "game/components/bounds",
        "game/components/motion",
        "game/components/jumpmotion",
        "game/components/motionpattern",
        "game/components/motioncontrols",
        "game/components/display",
        "game/graphics/playerview",
        "game/graphics/platformview"
    ],
    function( 
        Entity,
        Player,
        Platform,
        Position,
        Bounds,
        Motion,
        JumpMotion,
        MotionPattern,
        MotionControls,
        Display, 
        PlayerView,
        PlatformView
    )
    {
        function EntityCreator( game, graphics )
        {
            this.initialise( game, graphics );
        }
        var api = EntityCreator.prototype;
        api.game = null;
        api.graphics = null;
        api.initialise = function( game, graphics )
        {
            this.game = game;
            this.graphics = graphics;
            return this;
        };
        api.destroyEntity = function( entity )
        {
            this.game.removeEntity( entity );
        };
        api.createPlayer = function(position)
        {
            var player = new Entity()
                .add( new Player() )
                .add( new Position( position.position.x + 25, position.position.y-20 ) )
                .add( new Bounds( 400, 300, 5, 15 ) )
                .add( new Motion( 0, 15, 0.99 ) )
                .add( new JumpMotion( 0, 3500, 140 ) )
                .add( new MotionControls( Keyboard.LEFT, Keyboard.RIGHT, Keyboard.SPACEBAR, -5000, 100 ) )
                .add( new Display( new PlayerView( this.graphics ) ) );
            this.game.addEntity( player );
            return player;
        };
        api.constructLevel = function()
        {
            for( var i = 0; i<17; ++i )
            {
                this.createPlatform( i*50, 500 );
            }
            for( i = 0; i<6; ++i )
            {
                this.createPlatform( i*150, 480 );
            }
            for( i = 0; i<2; ++i )
            {
                this.createMovingPlatform( 60 + i*300, 460 );
            }
        };
        api.createPlatform = function( x, y )
        {
            var platform = new Entity()
                .add( new Platform() )
                .add( new Position( x, y ) )
                .add( new Bounds( x, y, 50, 5 ) )
                .add( new Display( new PlatformView( this.graphics ) ) );
            this.game.addEntity( platform );
            return platform;
        };
        api.createMovingPlatform = function( x, y )
        {
            var platform = new Entity()
                .add( new Platform() )
                .add( new Position( x, y ) )
                .add( new Motion( 0, 5, 0 ) )
               // .add( new MotionPattern( new Path( x, y-10, x, y+10 ), 1.0, true ) )
                .add( new Bounds( x, y, 50, 5 ) )
                .add( new Display( new PlatformView( this.graphics ) ) );
            this.game.addEntity( platform );
            return platform;
        };
        return EntityCreator;
    }
);
define( "game/nodes/platformcollision",
    [ "ash/node", "game/components/platform", "game/components/position", "game/components/bounds" ],
    function( Node, Platform, Position, Bounds ) {
        function PlatformCollision() {
            Object.extend( PlatformCollision.prototype, Node.prototype );
        }
        var api = PlatformCollision.prototype;

        api.platform = null;
        api.position = null;
        api.bounds = null;

        api.types = {
            platform : Platform,
            position : Position,
            bounds : Bounds
        };
        return PlatformCollision;
    }
);
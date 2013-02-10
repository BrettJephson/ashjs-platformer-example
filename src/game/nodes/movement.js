define( "game/nodes/movement",
    [ "ash/node", "game/components/position", "game/components/motion", "game/components/bounds" ],
    function( Node, Position, Motion, Bounds ) {
        function Movement() {
            Object.extend( Movement.prototype, Node.prototype );
        }
        var api = Movement.prototype;
        api.position = null;
        api.motion = null;
        api.bounds = null;

        api.types = {
            position : Position,
            motion : Motion,
            bounds: Bounds
        };
        return Movement;
    }
);
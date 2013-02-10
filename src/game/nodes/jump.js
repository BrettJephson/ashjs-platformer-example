define( "game/nodes/jump",
    [ "ash/node", "game/components/position", "game/components/motion", "game/components/jumpmotion", "game/components/bounds" ],
    function( Node, Position, Motion, JumpMotion, Bounds ) {
        function Jump() {
            Object.extend( Jump.prototype, Node.prototype );
        }
        var api = Jump.prototype;
        api.position = null;
        api.motion = null;
        api.jumpmotion = null;
        api.bounds = null;

        api.types = {
            position : Position,
            motion : Motion,
            jumpmotion: JumpMotion,
            bounds: Bounds
        };
        return Jump;
    }
);
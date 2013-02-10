define( "game/nodes/playercollision",
    [
        "ash/node",
        "game/components/player",
        "game/components/position",
        "game/components/bounds",
        "game/components/motion",
        "game/components/jumpmotion"
    ],
    function( Node, Player, Position, Bounds, Motion, JumpMotion ) {
        function PlayerCollision() {
            Object.extend( PlayerCollision.prototype, Node.prototype );
        }

        var api = PlayerCollision.prototype;
        api.player = null;
        api.position = null;
        api.bounds = null;
        api.motion = null;
        api.jumpmotion = null;

        api.types = {
            player : Player,
            position : Position,
            bounds : Bounds,
            motion : Motion,
            jumpmotion : JumpMotion
        };
        return PlayerCollision;
    }
);
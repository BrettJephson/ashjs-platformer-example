define( "game/systems/movementsystem",
    [ "ash/system", "game/nodes/movement" ],
    function( System, MovementNode ) {
        function MovementSystem() {
            Object.extend( MovementSystem.prototype, System.prototype );
            this.initialise();
        }
        var api = MovementSystem.prototype;
        api.nodeList = null;
        api.initialise = function() {
            return this;
        };
        api.addToEngine = function( engine ) {
            this.nodeList = engine.getNodeList( MovementNode );
        };
        api.removeFromEngine = function( engine ) {
            this.nodeList = null;
        };
        api.update = function( time ) {
            for( var node = this.nodeList.head; node; node = node.next ) {
                this.updateNode( node, time );
            }
        };
        api.updateNode = function( node, time ) {
            var position = node.position,
                motion = node.motion,
                bounds = node.bounds;

            motion.velocity.x *= motion.damping;
            position.position.x += motion.velocity.x * time;
            bounds.rectangle.x = position.position.x;
            position.position.y += motion.velocity.y * time;
            bounds.rectangle.y = position.position.y;
        };
        return MovementSystem;
    }
);
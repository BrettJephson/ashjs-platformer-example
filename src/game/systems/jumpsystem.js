define( "game/systems/jumpsystem",
    [ "ash/system", "game/nodes/jump" ],
    function( System, JumpNode ) {
        function JumpSystem() {
            Object.extend( JumpSystem.prototype, System.prototype );
            this.initialise();
        }
        var api = JumpSystem.prototype;
        api.nodeList = null;
        api.initialise = function() {
            return this;
        };
        api.addToEngine = function( engine ) {
            this.nodeList = engine.getNodeList( JumpNode );
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
                jumpmotion = node.jumpmotion,
                bounds = node.bounds;

            if( !jumpmotion.isGrounded )
            {
                motion.velocity.y += jumpmotion.gravity * time;
                jumpmotion.isFalling = ( motion.velocity.y > 0);
                position.position.y += motion.velocity.y * time;
                bounds.rectangle.y = position.position.y;
            }
        };
        return JumpSystem;
    }
);
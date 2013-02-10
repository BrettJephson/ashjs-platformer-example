define( "game/components/jumpmotion",
    [ "brejep/point" ],
    function( Point ) {
        function JumpMotion( velocityX, velocityY, gravity ) {
            this.velocity = new Point( velocityX, velocityY );
            this.gravity = gravity;
            this.isGrounded = false;
            this.isFalling = false;
        }
        return JumpMotion;
    }
);
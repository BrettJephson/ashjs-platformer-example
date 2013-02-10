define( "game/components/motioncontrols",
    function() {
        function MotionControls( left, right, jump, jumpRate, accelerationRate ) {
            this.left = left;
            this.right = right;
            this.jump = jump;
            this.jumpRate = jumpRate;
            this.accelerationRate = accelerationRate;
        }
        return MotionControls;
    }
);
define( "game/nodes/motioncontrol",
    [ "ash/node", "game/components/motioncontrols", "game/components/motion", "game/components/jumpmotion" ],
    function( Node, MotionControls, Motion, JumpMotion ) {
        function MotionControl() {
            Object.extend( MotionControl.prototype, Node.prototype );
        }
        var api = MotionControl.prototype;
        api.control = null;
        api.motion = null;
        api.jumpmotion = null;

        MotionControl.prototype.types = {
            control : MotionControls,
            motion : Motion,
            jumpmotion : JumpMotion
        };
        return MotionControl;
    }
);
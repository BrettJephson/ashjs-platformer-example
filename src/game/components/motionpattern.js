define( 'game/components/motionpattern',
    function()
    {
        function MotionPattern( path, duration, isLooped )
        {
            this.path = path;
            this.duration = duration;
            this.isLooped = isLooped || false;
        }
        return MotionPattern;
    }
);
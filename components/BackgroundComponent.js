import React from 'react';
import Iframe from 'react-iframe';

export const BackgroundComponent = () => {
return <div id="backgroundwrapper">
  <Iframe url="https://www.youtube.com/embed/7KXGZAEWzn0?start=447&autoplay=true&mute=true&controls=0&modestbranding&rel=0"
        width="100%"
        height="100%"
        id="boids"
        className="myboids"
        display="initial"
        position="relative"/>
		<div id="background"/>
		</div>
		
};

export default BackgroundComponent;

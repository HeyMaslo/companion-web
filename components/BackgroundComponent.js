import React from 'react';
import Iframe from 'react-iframe';

export const BackgroundComponent = () => {
return <div id="backgroundwrapper">
  <Iframe url="https://alivemachine.io/om/masloland/boids.html"
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

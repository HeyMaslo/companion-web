import React from 'react';
import { Wave1, Wave2 } from './../config/images';

export const WavesComponent = () => {
  return (
    <div id="waves" className="waves_wrap">
      <img src={Wave1} />
      <img src={Wave2} />
    </div>
  );
};

export default WavesComponent;

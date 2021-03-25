import React from 'react';
import { Mail } from './../config/images';

export const LogoComponent = () => {
  return (
    <div id="logo">
      Space Companion |{' '}
      <a href="mailto:sayhi@maslo.ai">
        <svg
          width="18px"
          height="13px"
          viewBox="0 0 18 13"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          <g
            id="Symbols"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            opacity="0.800000012">
            <g
              id="main-screen-1920/-default"
              transform="translate(-1700.000000, -37.000000)"
              fill-rule="nonzero"
              stroke="#FFFFFF">
              <g
                id="main-screen-elements"
                transform="translate(48.000000, 27.000000)">
                <g id="header">
                  <g id="right" transform="translate(1086.000000, 0.000000)">
                    <g id="mail" transform="translate(566.000000, 10.000000)">
                      <rect
                        id="Rectangle"
                        x="0.5"
                        y="0.5"
                        width="17"
                        height="12"
                        rx="2"></rect>
                      <path
                        d="M0.720991041,2.69934946 L7.21576177,7.22805702 C8.24675027,7.94695005 9.61657431,7.94695005 10.6475628,7.22805702 L17.1423335,2.69934946"
                        id="Path-7"
                        stroke-linecap="round"></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        sayhi@maslo.ai
      </a>
    </div>
  );
};

export default LogoComponent;

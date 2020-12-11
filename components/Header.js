import React from 'react';
import { LogoComponent } from './LogoComponent';
import HeartBtn from './HeartBtn';
import { observer } from 'mobx-react';

@observer
export default class Header extends React.Component {
  render() {
    const hidden = this.props.infoModules ? ' hidden' : '';
    return (
      <div id="header" className={`header${hidden}`}>
        <ul>
          <li>
            <HeartBtn />
          </li>
          <li>
            <a href="https://maslo.ai/developers/" target="_blank">
              Developers
            </a>
          </li>
          <li>
            <a href="https://maslo.ai/about/" target="_blank">
              About
            </a>
          </li>
          <li>
            <a href="https://maslo.ai/blog/" target="_blank">
              Blog
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

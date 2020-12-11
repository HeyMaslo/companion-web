import React from 'react';

export default class HeartBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
  }
  render() {
    return (
      <div id="heart-btn">
        {this.state.opened && (
          <div className="opened-container">
            <p>We really value your feedback!</p>
            <a
              href="https://talktomaslo.typeform.com/to/qXITqtKg"
              target="_blank">
              Let’s get started
            </a>
          </div>
        )}
        {this.state.opened ? (
          <div>
            <button
              onClick={() => this.setState({ opened: !this.state.opened })}
              className="filled">
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 3.02549C11 3.02549 15.4266 -2.72727 20.1223 1.63244C22.8859 4.18636 22.4946 8.18492 19.6332 11.2032L11 20L2.36683 11.2032C-0.494595 8.18492 -0.885901 4.18636 1.87769 1.63244C6.57336 -2.72727 11 3.02549 11 3.02549Z"
                  fill="#2D2494"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => this.setState({ opened: !this.state.opened })}
              className="empty">
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.9892 6.17893C20.897 7.6004 20.2089 9.13999 18.9132 10.5091L11 18.5723L3.08676 10.5091C1.7911 9.13999 1.10301 7.6004 1.01078 6.17893C0.91974 4.77582 1.40174 3.43391 2.55639 2.36686L2.55639 2.36687L2.5581 2.36528C3.58473 1.4121 4.53174 1.06481 5.35247 1.00851C6.19047 0.951026 6.99761 1.19063 7.73322 1.57859C8.47 1.96718 9.09423 2.48368 9.54062 2.91438C9.76159 3.12758 9.93347 3.31441 10.0481 3.44539C10.1053 3.51074 10.1479 3.5618 10.1749 3.59479C10.1883 3.61128 10.1979 3.62322 10.2034 3.63014L10.2079 3.63594L10.2083 3.63643L10.2085 3.63668L10.2085 3.63669L10.2088 3.63702L11 4.66528L11.7912 3.63702L11.7915 3.63669L11.7915 3.63668L11.7917 3.63643L11.7921 3.63594L11.7966 3.63014C11.8021 3.62322 11.8117 3.61128 11.8251 3.59479C11.8521 3.5618 11.8947 3.51074 11.9519 3.44539C12.0665 3.31441 12.2384 3.12758 12.4594 2.91438C12.9058 2.48368 13.53 1.96718 14.2668 1.57859C15.0024 1.19063 15.8095 0.951026 16.6475 1.00851C17.4683 1.06481 18.4153 1.4121 19.4419 2.36528L19.4436 2.36686C20.5983 3.43391 21.0803 4.77582 20.9892 6.17893Z"
                  stroke="#2D2494"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    );
  }
}

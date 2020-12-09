import { observer } from 'mobx-react';
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

@observer
export default class InfoModulesWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ display: true });
    }, 300);
  }
  render() {
    const submoduleSelected = this.props.submodule ? ' selected' : '';
    const display = this.state.display ? ' display' : '';
    return (
      <ScrollContainer
        horizontal
        hideScrollbars
        className={`info-module-wrapper wrapper${submoduleSelected}${display}`}>
        {this.props?.children}
      </ScrollContainer>
    );
  }
}

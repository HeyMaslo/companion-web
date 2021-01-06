import { observer } from 'mobx-react';
import React from 'react';
import ChatViewModel from '../viewModels/ChatViewModel';

@observer
export default class InfoModulesOptionsCard extends React.Component {
  model = ChatViewModel;

  render() {
    const { data, selected } = this.props;
    const selectedClass = selected ? ' selected' : '';
    return (
      <buttom
        type="buttom"
        id="info-modules-options-card"
        className={`btn${selectedClass}`}
        onClick={() => (this.model.submoduleSelected = data.page)}>
        <p>{data.title}</p>
        <img src={data.icon} alt={data.title} />
      </buttom>
    );
  }
}

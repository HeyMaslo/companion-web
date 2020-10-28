import React from 'react';
import { DisappearedLoading } from 'react-loadingg';

export default class TypingLoadingComponent extends React.Component {
  render() {
    return (
      <DisappearedLoading
        color={'#321B9A'}
        size={'small'}
        style={{
          width: 40,
          height: 20,
          background: '#FFFFFF',
          padding: '5px 10px',
          borderRadius: 20,
          opacity: 0.6,
        }}
      />
    );
  }
}

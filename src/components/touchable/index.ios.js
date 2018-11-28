import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { debounce, bindAll } from '../../helpers';

export class Touchable extends Component {
  constructor(props) {
    super(props);
    bindAll(this, ['onPress']);
  }

  onPress() {
    const { onPress } = this.props;
    return debounce(onPress, 100);
  }

  render() {
    const { feedback, children } = this.props;

    return (
      <TouchableOpacity activeOpacity={feedback ? 0.5 : 1} underlayColor="#e9e9e9" onPress={this.onPress()}>
        {children}
      </TouchableOpacity>
    );
  }
}

Touchable.defaultProps = {
  feedback: true,
};

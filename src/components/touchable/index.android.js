import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import { TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { debounce, color, bindAll } from '../../helpers';

const canUseRipple = TouchableNativeFeedback.canUseNativeForeground();

class TouchableAndroid extends Component {
  constructor(props) {
    super(props);
    bindAll(this, ['onPress']);
  }

  onPress() {
    const { onPress } = this.props;
    return debounce(onPress, 100);
  }

  getColor() {
    const { theme } = this.props;
    return color.warning.medium[theme.brand];
  }

  render() {
    const colorBackground = this.getColor();
    const { children, feedback } = this.props;
    const background = feedback
      ? TouchableNativeFeedback.Ripple(colorBackground)
      : TouchableNativeFeedback.Ripple(color.white);

    if (canUseRipple) {
      return (
        <TouchableNativeFeedback background={background} onPress={this.onPress()}>
          <View pointerEvents="box-only">
            {children}
          </View>
        </TouchableNativeFeedback>
      );
    }

    return <TouchableOpacity onPress={this.onPress()}>{children}</TouchableOpacity>;
  }
}

export const Touchable = withTheme(TouchableAndroid);

Touchable.defaultProps = {
  feedback: true,
};

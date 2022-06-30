import React, { FunctionComponent, ReactNode } from 'react';
import {
  View,
  Text,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  TouchableNativeFeedbackProps,
  TouchableOpacityProps,
} from 'react-native';

export function ViewComponent(
  style: ViewStyle
): FunctionComponent<{ children: ReactNode }> {
  return ({ children }) => <View style={style}>{children}</View>;
}

export function TextComponent(
  style: TextStyle
): FunctionComponent<{ children: ReactNode }> {
  return ({ children }) => <Text style={style}>{children}</Text>;
}

export interface ButtonProps
  extends Pick<
    TouchableNativeFeedbackProps & TouchableOpacityProps,
    | 'accessibilityLabel'
    | 'accessibilityState'
    | 'hasTVPreferredFocus'
    | 'nextFocusDown'
    | 'nextFocusForward'
    | 'nextFocusLeft'
    | 'nextFocusRight'
    | 'nextFocusUp'
    | 'testID'
    | 'disabled'
    | 'onPress'
    | 'touchSoundDisabled'
  > {
  children: ReactNode;
}

export function ButtonComponent(
  style: TextStyle
): FunctionComponent<ButtonProps> {
  return ({ children, ...rest }) => (
    <TouchableOpacity {...rest}>
      <Text style={style}>{children}</Text>
    </TouchableOpacity>
  );
}

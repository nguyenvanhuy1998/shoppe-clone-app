import React from 'react';
import {
  ColorValue,
  StatusBarStyle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '../styles';
import FocusAwareStatusBar from './FocusAwareStatusBar';
import {COLORS} from '../constants';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  type?: 'linear' | 'primary';
  barStyle?: StatusBarStyle;
  backgroundColorBarStyle?: ColorValue;
}
const ContainerComponent = ({
  children,
  style,
  type,
  barStyle,
  backgroundColorBarStyle,
}: Props) => {
  const insets = useSafeAreaInsets();
  const renderBarStyle = () => (
    <FocusAwareStatusBar
      barStyle={barStyle}
      backgroundColor={backgroundColorBarStyle}
    />
  );
  const styleGeneral = [
    globalStyles.flexOne,
    {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
    style,
  ];
  return type === 'linear' ? (
    <LinearGradient
      colors={[COLORS.secondaryOrangeHex, COLORS.primaryOrangeHex]}
      style={styleGeneral}>
      {renderBarStyle()}
      {children}
    </LinearGradient>
  ) : (
    <View style={styleGeneral}>
      {renderBarStyle()}
      {children}
    </View>
  );
};

export default ContainerComponent;

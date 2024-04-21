import React from 'react';
import {
  ColorValue,
  ScrollView,
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  type?: 'linear' | 'primary' | 'input';
  barStyle?: StatusBarStyle;
  backgroundColorBarStyle?: ColorValue;
}
const ContainerComponent = ({
  children,
  style,
  type,
  barStyle = 'dark-content',
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
      {type === 'input' ? (
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={globalStyles.flexGrowOne}>
          {children}
        </KeyboardAwareScrollView>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={globalStyles.flexGrowOne}>
          {children}
        </ScrollView>
      )}
    </View>
  );
};

export default ContainerComponent;

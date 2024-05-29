import React, {memo, ReactNode} from 'react';
import {
  ColorValue,
  StatusBarStyle,
  StyleProp,
  View,
  ViewStyle,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '../styles';
import FocusAwareStatusBar from './FocusAwareStatusBar';
import {COLORS} from '../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  type?: 'linear' | 'input' | 'noSafeArea' | 'noScrollView' | 'onlyScrollView';
  barStyle?: StatusBarStyle;
  backgroundColorBarStyle?: ColorValue;
  nestedScrollEnabled?: boolean;
}
const Container = ({
  children,
  style,
  type,
  barStyle = 'dark-content',
  backgroundColorBarStyle = COLORS.primaryWhiteHex,
  nestedScrollEnabled,
}: Props) => {
  const insets = useSafeAreaInsets();
  const styleGeneral = [
    globalStyles.container,
    {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
    style,
  ];
  if (type === 'noSafeArea') {
    return (
      <View style={[globalStyles.flexOne, style]}>
        <FocusAwareStatusBar
          barStyle={barStyle}
          backgroundColor={backgroundColorBarStyle}
        />
        <ScrollView contentContainerStyle={globalStyles.flexGrowOne}>
          {children}
        </ScrollView>
      </View>
    );
  }
  if (type === 'noScrollView') {
    return (
      <View style={[globalStyles.flexOne, style]}>
        <FocusAwareStatusBar
          barStyle={barStyle}
          backgroundColor={backgroundColorBarStyle}
        />
        {children}
      </View>
    );
  }
  if (type === 'linear') {
    return (
      <LinearGradient
        colors={[COLORS.secondaryOrangeHex, COLORS.primaryOrangeHex]}
        style={styleGeneral}>
        <FocusAwareStatusBar
          barStyle={barStyle}
          backgroundColor={backgroundColorBarStyle}
        />
        {children}
      </LinearGradient>
    );
  }
  if (type === 'input') {
    return (
      <View style={styleGeneral}>
        <FocusAwareStatusBar
          barStyle={barStyle}
          backgroundColor={backgroundColorBarStyle}
        />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={globalStyles.flexGrowOne}>
          {children}
        </KeyboardAwareScrollView>
      </View>
    );
  }
  if (type === 'onlyScrollView') {
    return (
      <ScrollView
        nestedScrollEnabled={nestedScrollEnabled}
        contentContainerStyle={globalStyles.flexGrowOne}>
        {children}
      </ScrollView>
    );
  }
  return (
    <View style={styleGeneral}>
      <FocusAwareStatusBar
        barStyle={barStyle}
        backgroundColor={backgroundColorBarStyle}
      />
      <ScrollView contentContainerStyle={globalStyles.flexGrowOne}>
        {children}
      </ScrollView>
    </View>
  );
};

export default Container;

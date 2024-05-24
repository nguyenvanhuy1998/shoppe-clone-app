import React, {ReactNode} from 'react';
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
  type?: 'linear' | 'input' | 'noSafeArea' | 'noScrollView';
  barStyle?: StatusBarStyle;
  backgroundColorBarStyle?: ColorValue;
}
const Container = ({
  children,
  style,
  type,
  barStyle = 'dark-content',
  backgroundColorBarStyle = COLORS.primaryWhiteHex,
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
  const renderBarStyle = () => (
    <FocusAwareStatusBar
      barStyle={barStyle}
      backgroundColor={backgroundColorBarStyle}
    />
  );
  const CommonScrollView = ({
    children: scrollChildren,
  }: {
    children: ReactNode;
  }) => (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={globalStyles.flexGrowOne}>
      {scrollChildren}
    </ScrollView>
  );

  const typeComponents = {
    noScrollView: () => (
      <View style={globalStyles.flexOne}>
        {renderBarStyle()}
        {children}
      </View>
    ),
    linear: () => (
      <LinearGradient
        colors={[COLORS.secondaryOrangeHex, COLORS.primaryOrangeHex]}
        style={styleGeneral}>
        {renderBarStyle()}
        {children}
      </LinearGradient>
    ),
    input: () => (
      <View style={styleGeneral}>
        {renderBarStyle()}
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={globalStyles.flexGrowOne}>
          {children}
        </KeyboardAwareScrollView>
      </View>
    ),
    noSafeArea: () => (
      <View style={[globalStyles.flexOne, style]}>
        {renderBarStyle()}
        <CommonScrollView>{children}</CommonScrollView>
      </View>
    ),
    default: () => (
      <View style={styleGeneral}>
        {renderBarStyle()}
        <CommonScrollView>{children}</CommonScrollView>
      </View>
    ),
  };
  return typeComponents[type || 'default']();
};

export default Container;

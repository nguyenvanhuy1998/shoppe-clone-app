import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import {
  Ionicons,
  RowComponent,
  SpaceComponent,
  TextComponent,
} from '../../../components';
import {COLORS, FONTSIZE, SPACING} from '../../../constants';
import {StyleProp} from 'react-native';

interface Props {
  icon: string;
  colorIcon?: string;
  title: string;
  desc: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}
const TypePay = ({icon, colorIcon, title, desc, onPress, style}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <RowComponent>
        <Ionicons name={icon} color={colorIcon} />
        <SpaceComponent width={SPACING.space_4} />
        <TextComponent
          text={title}
          color={COLORS.primaryBlackHex}
          fontSize={FONTSIZE.size_12}
        />
      </RowComponent>
      <TextComponent
        color={COLORS.thirdGreyHex}
        text={desc}
        numberOfLines={2}
        fontSize={FONTSIZE.size_10}
      />
    </TouchableOpacity>
  );
};

export default TypePay;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
});

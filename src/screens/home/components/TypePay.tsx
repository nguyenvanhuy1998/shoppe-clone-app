import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Ionicons,
  RowComponent,
  SpaceComponent,
  TextComponent,
} from '../../../components';
import {COLORS, FONTSIZE, SPACING} from '../../../constants';

interface Props {
  icon: string;
  colorIcon?: string;
  title: string;
  desc: string;
  onPress?: () => void;
}
const TypePay = ({icon, colorIcon, title, desc, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
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

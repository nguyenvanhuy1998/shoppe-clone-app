import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Button,
  IconText,
  Ionicons,
  Line,
  Row,
  TextComponent,
} from '../../../components';
import {
  BORDER_RADIUS,
  COLORS,
  FONTSIZE,
  SHADOW,
  SPACING,
} from '../../../constants';

const Wallet = () => {
  return (
    <Row style={styles.container}>
      <Button startIcon={<Ionicons name="scan-outline" size="large" />} />
      <Line width={1} height={'100%'} />
      <Item
        icon="wallet-outline"
        text="Ví ShopeePay"
        desc="Vourcher mua sắm giảm đến 40.000Đ"
      />
      <Line width={1} height={'100%'} />
      <Item icon="logo-bitcoin" text="0" desc="Nhấn để nhận Xu mỗi ngày" />
    </Row>
  );
};
const Item = ({
  icon,
  color = COLORS.primaryOrangeHex,
  text,
  desc,
}: {
  icon: string;
  color?: string;
  text: string;
  desc: string;
}) => (
  <TouchableOpacity style={styles.itemContainer}>
    <IconText
      icon={<Ionicons name={icon} color={color} />}
      text={text}
      fontSize={FONTSIZE.size_12}
    />
    <TextComponent
      text={desc}
      fontSize={FONTSIZE.size_10}
      color={COLORS.thirdGreyHex}
    />
  </TouchableOpacity>
);

export default Wallet;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SPACING.space_8,
    marginTop: -SPACING.space_8,
    backgroundColor: COLORS.primaryWhiteHex,
    borderRadius: BORDER_RADIUS.radius_8,
    padding: SPACING.space_8,
    gap: SPACING.space_8,
    ...SHADOW.primary,
  },
  itemContainer: {
    flex: 1,
    gap: SPACING.space_2,
    height: '100%',
  },
});

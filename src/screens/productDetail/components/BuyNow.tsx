import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Ionicons, Line, MaterialIcons} from '../../../components';
import {COLORS, FONT_FAMILY, SPACING} from '../../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const BuyNow = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          bottom: insets.bottom,
        },
      ]}>
      <Button
        styleContainer={styles.buttonContainer}
        startIcon={<MaterialIcons name="chat" color={COLORS.primaryRedHex} />}
        text="Chat ngay"
      />
      <Line width={1} height={'60%'} />
      <Button
        styleContainer={styles.buttonContainer}
        startIcon={
          <Ionicons name="cart-outline" color={COLORS.primaryRedHex} />
        }
        text="Thêm vào giỏ hàng"
      />
      <Button
        styleContainer={styles.buyNowContainer}
        text="Mua ngay"
        color={COLORS.primaryWhiteHex}
        fontFamily={FONT_FAMILY.montserrat_semibold}
      />
    </View>
  );
};

export default BuyNow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    minHeight: SPACING.space_20 * 2,
    backgroundColor: COLORS.primaryWhiteHex,
  },
  buttonContainer: {
    paddingHorizontal: SPACING.space_8,

    flexDirection: 'column',
  },
  buyNowContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryRedHex,
    height: '100%',
  },
});

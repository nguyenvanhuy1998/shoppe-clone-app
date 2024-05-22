import React from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  ButtonComponent,
  DotComponent,
  InputComponent,
  Ionicons,
  RowComponent,
} from '../../../components';
import {COLORS, SPACING} from '../../../constants';
import {gapNumber} from '../../../utils/spacing';
import {globalStyles} from '../../../styles';

const SearchProduct = () => {
  const insets = useSafeAreaInsets();
  return (
    <RowComponent
      style={[
        styles.inputContainer,
        gapNumber(SPACING.space_8),
        {
          top: insets.top,
        },
      ]}>
      <InputComponent
        placeholder="Search..."
        placeholderTextColor={COLORS.primaryOrangeHex}
        leftIcon={
          <ButtonComponent startIcon={<Ionicons name="search-outline" />} />
        }
        rightIcon={
          <ButtonComponent startIcon={<Ionicons name="camera-outline" />} />
        }
      />
      <ButtonComponent
        startIcon={
          <Ionicons
            name="cart-outline"
            color={COLORS.primaryWhiteHex}
            size="large"
          />
        }
        endIcon={
          <DotComponent
            styleContainer={[styles.dotInputContainer, globalStyles.center]}
            text={99}
          />
        }
      />
      <ButtonComponent
        startIcon={
          <Ionicons
            name="chatbox-ellipses-outline"
            color={COLORS.primaryWhiteHex}
            size="large"
          />
        }
        endIcon={
          <DotComponent
            styleContainer={[styles.dotInputContainer, globalStyles.center]}
            text={99}
          />
        }
      />
    </RowComponent>
  );
};

export default SearchProduct;

const styles = StyleSheet.create({
  inputContainer: {
    position: 'absolute',
    left: SPACING.space_8,
    right: SPACING.space_8,
  },
  dotInputContainer: {
    position: 'absolute',
    top: -SPACING.space_4,
    right: -SPACING.space_4,
    backgroundColor: COLORS.primaryOrangeHex,
    borderWidth: 1,
  },
});

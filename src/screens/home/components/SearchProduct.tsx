import React from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button, Dot, Input, Ionicons, Row} from '../../../components';
import {COLORS, SPACING} from '../../../constants';
import {gapNumber} from '../../../utils/spacing';
import {globalStyles} from '../../../styles';

interface Props {
  onPress?: () => void;
}
const SearchProduct = ({onPress}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <Row
      style={[
        styles.inputContainer,
        gapNumber(SPACING.space_8),
        {
          top: insets.top,
        },
      ]}>
      <Input
        onPress={onPress}
        placeholder="Search..."
        editable={false}
        pointerEvents="none"
        placeholderTextColor={COLORS.primaryOrangeHex}
        leftIcon={<Button startIcon={<Ionicons name="search-outline" />} />}
        rightIcon={<Button startIcon={<Ionicons name="camera-outline" />} />}
      />
      <Button
        startIcon={
          <Ionicons
            name="cart-outline"
            color={COLORS.primaryWhiteHex}
            size="large"
          />
        }
        endIcon={
          <Dot
            styleContainer={[styles.dotInputContainer, globalStyles.center]}
            text={99}
          />
        }
      />
      <Button
        startIcon={
          <Ionicons
            name="chatbox-ellipses-outline"
            color={COLORS.primaryWhiteHex}
            size="large"
          />
        }
        endIcon={
          <Dot
            styleContainer={[styles.dotInputContainer, globalStyles.center]}
            text={99}
          />
        }
      />
    </Row>
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

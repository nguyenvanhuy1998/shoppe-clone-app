import React from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button, Row} from '../../../components';
import {BORDER_RADIUS, COLORS, FONT_FAMILY, SPACING} from '../../../constants';

interface Props {
  onSubmit: () => void;
}
const ActionAsideFilter = ({onSubmit}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <Row
      style={[
        styles.container,
        {
          paddingTop: SPACING.space_8,
          paddingBottom: insets.bottom,
        },
      ]}>
      <Button
        styleContainer={[
          styles.btnContainer,
          {
            borderColor: COLORS.primaryOrangeHex,
          },
        ]}
        backgroundColor={COLORS.primaryWhiteHex}
        color={COLORS.primaryOrangeHex}
        fontFamily={FONT_FAMILY.montserrat_medium}
        text="Thiết lập lại"
      />
      <Button
        onPress={onSubmit}
        styleContainer={[
          styles.btnContainer,
          {
            borderColor: COLORS.primaryOrangeHex,
          },
        ]}
        text="Áp dụng"
        backgroundColor={COLORS.primaryOrangeHex}
        fontFamily={FONT_FAMILY.montserrat_medium}
        color={COLORS.primaryWhiteHex}
      />
    </Row>
  );
};

export default ActionAsideFilter;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.space_8,
    gap: SPACING.space_8,
  },
  btnContainer: {
    flex: 1,
    borderWidth: 1,
    minHeight: SPACING.space_20 * 2,
    borderRadius: BORDER_RADIUS.radius_4,
  },
});

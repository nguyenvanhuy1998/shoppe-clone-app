import React from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  Button,
  Dot,
  Ionicons,
  MaterialIcons,
  Row,
  Section,
} from '../../../components';
import {COLORS, SPACING, WIDTH} from '../../../constants';
import {globalStyles} from '../../../styles';
import {gapNumber} from '../../../utils/spacing';

interface Props {
  onPressBack?: () => void;
}
const HeaderProductDetail = ({onPressBack}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <Section
      style={[
        styles.container,
        globalStyles.rowSpaceBetween,
        {
          top: insets.top - SPACING.space_8,
        },
      ]}>
      <Button
        onPress={onPressBack}
        styleContainer={styles.btnContainer}
        startIcon={
          <Ionicons
            name="arrow-back"
            color={COLORS.primaryWhiteHex}
            size="large"
          />
        }
      />
      <Row style={gapNumber(SPACING.space_8)}>
        <Button
          styleContainer={styles.btnContainer}
          startIcon={
            <Entypo
              name="forward"
              color={COLORS.primaryWhiteHex}
              size={SPACING.space_24}
            />
          }
        />
        <Button
          styleContainer={styles.btnContainer}
          startIcon={
            <Ionicons
              name="cart-outline"
              color={COLORS.primaryWhiteHex}
              size="large"
            />
          }
          endIcon={
            <Dot
              text={99}
              styleContainer={[styles.dotContainer, globalStyles.center]}
            />
          }
        />
        <Button
          styleContainer={styles.btnContainer}
          startIcon={
            <MaterialIcons
              name="more-vert"
              color={COLORS.primaryWhiteHex}
              size="large"
            />
          }
        />
      </Row>
    </Section>
  );
};

export default HeaderProductDetail;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: WIDTH,
  },
  btnContainer: {
    backgroundColor: COLORS.primaryModal,
    borderRadius: 99,
    width: SPACING.space_32,
    height: SPACING.space_32,
  },
  dotContainer: {
    position: 'absolute',
    top: -SPACING.space_2,
    right: -SPACING.space_2,
    backgroundColor: COLORS.primaryRedHex,
    borderWidth: 1,
    borderColor: COLORS.primaryWhiteHex,
  },
});

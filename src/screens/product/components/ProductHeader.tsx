import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button, Ionicons, Row, TextComponent} from '../../../components';
import {BORDER_RADIUS, COLORS, SPACING} from '../../../constants';
import {gapNumber} from '../../../utils/spacing';

const ProductHeader = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: SPACING.space_8,
        },
      ]}>
      <Row style={styles.productHeaderContainer}>
        <Button
          onPress={handleBack}
          startIcon={
            <Ionicons
              name="arrow-back"
              color={COLORS.primaryOrangeHex}
              size="large"
            />
          }
        />
        <Row style={styles.searchContainer} onPress={() => {}}>
          <TextComponent text={'HHH'} />
          <Ionicons
            name="camera-outline"
            color={COLORS.thirdGreyHex}
            size="large"
          />
        </Row>
        <Row style={gapNumber(SPACING.space_4)} onPress={() => {}}>
          <Ionicons
            name="filter"
            color={COLORS.primaryOrangeHex}
            size="large"
          />
          <TextComponent text={'Lọc'} color={COLORS.primaryOrangeHex} />
        </Row>
      </Row>
    </View>
  );
};

export default ProductHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryWhiteHex,
  },
  productHeaderContainer: {
    padding: SPACING.space_8,
    gap: SPACING.space_8,
  },
  searchContainer: {
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: SPACING.space_8,
    borderRadius: BORDER_RADIUS.radius_4,
    borderColor: COLORS.primaryOrangeHex,
    justifyContent: 'space-between',
  },
});

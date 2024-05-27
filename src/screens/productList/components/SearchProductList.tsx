import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Ionicons, Row, TextComponent} from '../../../components';
import {BORDER_RADIUS, COLORS, SPACING} from '../../../constants';
import {MainNavigatorParamList} from '../../../navigator/MainNavigator';
import {gapNumber} from '../../../utils/spacing';

type ProductListScreenRouteProps = RouteProp<
  MainNavigatorParamList,
  'ProductList'
>;

const SearchProductList = () => {
  const navigation = useNavigation();
  const route = useRoute<ProductListScreenRouteProps>();
  const {searchText} = route.params;
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <Row style={styles.HeaderProductListContainer}>
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
      <Row style={styles.searchContainer} onPress={handleBack}>
        <TextComponent text={searchText} />
        <Ionicons
          name="camera-outline"
          color={COLORS.thirdGreyHex}
          size="large"
        />
      </Row>
      <Row style={gapNumber(SPACING.space_4)} onPress={() => {}}>
        <Ionicons name="filter" color={COLORS.primaryOrangeHex} size="large" />
        <TextComponent text={'Lọc'} color={COLORS.primaryOrangeHex} />
      </Row>
    </Row>
  );
};

export default SearchProductList;

const styles = StyleSheet.create({
  HeaderProductListContainer: {
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

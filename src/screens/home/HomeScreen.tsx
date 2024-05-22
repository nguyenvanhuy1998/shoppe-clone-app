import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {FlatList, RefreshControl, StyleSheet} from 'react-native';
import {Pagination} from 'react-native-reanimated-carousel';
import {
  BannerListComponent,
  ContainerComponent,
  ProductComponent,
  SectionComponent,
} from '../../components';
import HeadingComponent from '../../components/HeadingComponent';
import {COLORS, SPACING, WIDTH} from '../../constants';
import {useCarousel} from '../../hooks';
import {useInfiniteScroll} from '../../hooks/useInfiniteScroll';
import {MainNavigatorParamList} from '../../navigator/MainNavigator';
import {globalStyles} from '../../styles';
import {Product, ProductListConfig} from '../../types/product.type';
import {CategoryList, SearchProduct, Wallet} from './components';
import {dummyBanner} from './data/banner';
import {spacingBottom} from '../../utils';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainNavigatorParamList,
  'Home'
>;
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [filters, setFilters] = useState<ProductListConfig>({});
  const {refCarousel, progress, onPressPagination} = useCarousel();
  const {data, isRefreshing, onRefresh, onEndReached} = useInfiniteScroll({
    key: 'products',
    filters,
  });
  const handleChangeProductDetailScreen = (product: Product) => {
    navigation.navigate('ProductDetail', {
      id: product._id,
    });
  };

  return (
    <ContainerComponent type="noScrollView">
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        initialNumToRender={10}
        data={data}
        renderItem={({item}) => (
          <ProductComponent
            product={item}
            onPress={() => handleChangeProductDetailScreen(item)}
          />
        )}
        onEndReached={onEndReached}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor={COLORS.primaryOrangeHex}
          />
        }
        ListHeaderComponent={
          <>
            <SectionComponent style={globalStyles.resetContainer}>
              <BannerListComponent
                ref={refCarousel}
                width={WIDTH}
                height={WIDTH / 2}
                autoPlay
                loop
                autoPlayInterval={3000}
                scrollAnimationDuration={1000}
                onProgressChange={progress}
                data={dummyBanner}
              />
              <SearchProduct />
              <Pagination.Basic
                progress={progress}
                data={dummyBanner}
                dotStyle={globalStyles.dot}
                activeDotStyle={globalStyles.activeDot}
                containerStyle={[styles.paginationContainer]}
                onPress={onPressPagination}
              />
            </SectionComponent>
            <SectionComponent style={styles.categoryContainer}>
              <Wallet />
              <CategoryList />
            </SectionComponent>
            <HeadingComponent
              styleContainer={spacingBottom(8)}
              text="GỢI Ý HÔM NAY"
            />
          </>
        }
      />
    </ContainerComponent>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  paginationContainer: {
    gap: SPACING.space_8,
    position: 'absolute',
    bottom: SPACING.space_24,
  },
  categoryContainer: {
    ...globalStyles.resetContainer,
    gap: SPACING.space_16,
    paddingBottom: SPACING.space_16,
    marginBottom: SPACING.space_8,
  },
});

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {FlatList, RefreshControl, StyleSheet} from 'react-native';
import {Pagination} from 'react-native-reanimated-carousel';
import {
  BannerList,
  Container,
  ProductComponent,
  SearchModal,
  Section,
} from '../../components';
import Heading from '../../components/Heading';
import {COLORS, SPACING, WIDTH} from '../../constants';
import {useCarousel} from '../../hooks';
import {useInfiniteScroll} from '../../hooks/useInfiniteScroll';
import {MainNavigatorParamList} from '../../navigator/MainNavigator';
import {globalStyles} from '../../styles';
import {Product} from '../../types/product.type';
import {spacingBottom} from '../../utils';
import {CategoryList, SearchProduct, Wallet} from './components';
import {dummyBanner} from './data/banner';
import {histories} from './data/histories';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainNavigatorParamList,
  'Home'
>;
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const {refCarousel, progress, onPressPagination} = useCarousel();
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState('');
  const {data, isRefreshing, onRefresh, onEndReached} = useInfiniteScroll({
    key: 'products',
  });
  const handleChangeProductDetailScreen = (product: Product) => {
    navigation.navigate('ProductDetail', {
      id: product._id,
    });
  };
  const handleVisibleSearchModal = () => {
    setVisible(!visible);
  };
  const handleChangeTextSearch = (text: string) => {
    setSearch(text);
  };
  const handleNavigationSearch = () => {
    setVisible(!visible);
    navigation.navigate('Search', {
      searchText: search,
    });
  };

  return (
    <Container type="noScrollView">
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
            <Section style={globalStyles.resetContainer}>
              <BannerList
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
              <SearchProduct onPress={handleVisibleSearchModal} />
              <Pagination.Basic
                progress={progress}
                data={dummyBanner}
                dotStyle={globalStyles.dot}
                activeDotStyle={globalStyles.activeDot}
                containerStyle={[styles.paginationContainer]}
                onPress={onPressPagination}
              />
            </Section>
            <Section style={styles.categoryContainer}>
              <Wallet />
              <CategoryList />
            </Section>
            <Heading styleContainer={spacingBottom(8)} text="GỢI Ý HÔM NAY" />
          </>
        }
      />
      <SearchModal
        onNavigationSearch={handleNavigationSearch}
        search={search}
        onChangeTextSearch={handleChangeTextSearch}
        histories={histories}
        visible={visible}
        onPressClose={handleVisibleSearchModal}
      />
    </Container>
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

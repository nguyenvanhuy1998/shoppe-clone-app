import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Pagination} from 'react-native-reanimated-carousel';
import {
  BannerList,
  Container,
  ProductListComponent,
  Section,
} from '../../components';
import Heading from '../../components/Heading';
import {SPACING, WIDTH} from '../../constants';
import {useCarousel} from '../../hooks';
import {MainNavigatorParamList} from '../../navigator/MainNavigator';
import {globalStyles} from '../../styles';
import {spacingBottom} from '../../utils';
import {CategoryList, SearchProduct, Wallet} from './components';
import {dummyBanner} from './data/banner';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainNavigatorParamList,
  'Home'
>;
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const {refCarousel, progress, onPressPagination} = useCarousel();

  const handleNavigationSearchScreen = () => {
    navigation.navigate('Search');
  };

  return (
    <Container type="noScrollView">
      <ProductListComponent
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
              <SearchProduct onPress={handleNavigationSearchScreen} />
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

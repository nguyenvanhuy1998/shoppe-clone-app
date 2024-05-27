import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Container} from '../../components';
import {MainNavigatorParamList} from '../../navigator/MainNavigator';

type SearchScreenNavigationProp = RouteProp<MainNavigatorParamList, 'Search'>;
const SearchScreen = () => {
  const route = useRoute<SearchScreenNavigationProp>();
  const navigation = useNavigation();
  const {searchText} = route.params;

  return <Container type="noScrollView"></Container>;
};

export default SearchScreen;

const styles = StyleSheet.create({});

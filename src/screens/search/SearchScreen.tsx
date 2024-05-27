import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '../../styles';
import {histories} from '../home/data/histories';
import {ItemHistory, SearchHeader} from './components';

const SearchScreen = () => {
  const insets = useSafeAreaInsets();
  const [searchText, setSearchText] = useState('');

  return (
    <View
      style={[
        globalStyles.flexOne,
        {
          paddingBottom: insets.bottom,
        },
      ]}>
      <SearchHeader searchText={searchText} setSearchText={setSearchText} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={histories}
        renderItem={({item}) => <ItemHistory item={item} />}
      />
    </View>
  );
};

export default SearchScreen;

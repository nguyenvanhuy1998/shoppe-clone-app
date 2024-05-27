import React from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button, Input, Ionicons, Row} from '../../../components';
import {COLORS, SPACING} from '../../../constants';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainNavigatorParamList} from '../../../navigator/MainNavigator';

interface Props {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}
type SearchScreenNavigationProp = NativeStackNavigationProp<
  MainNavigatorParamList,
  'Search'
>;
const SearchHeader = ({searchText, setSearchText}: Props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<SearchScreenNavigationProp>();
  const handleBack = () => {
    navigation.goBack();
  };
  const handleChangeNavigationProduct = () => {
    if (searchText.length === 0) {
      return;
    }
    navigation.navigate('ProductList', {
      searchText,
    });
  };
  const handleChangeSearchText = (text: string) => {
    setSearchText(text);
  };
  const handleClearSearchText = () => {
    setSearchText('');
  };
  return (
    <Row
      style={[
        styles.headerContainer,
        {
          paddingTop: insets.top,
          paddingBottom: SPACING.space_8,
        },
      ]}>
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
      <Input
        onSubmitEditing={handleChangeNavigationProduct}
        value={searchText}
        placeholder="Tìm sản phẩm, shop và hơn thế nữa..."
        onChangeText={handleChangeSearchText}
        autoFocus
        styleContainer={styles.inputContainer}
        rightIcon={
          <Row>
            {searchText.length > 0 ? (
              <Ionicons name="close" onPress={handleClearSearchText} />
            ) : (
              <Ionicons
                name="camera-outline"
                color={COLORS.thirdGreyHex}
                size="large"
              />
            )}
            <Button
              onPress={handleChangeNavigationProduct}
              styleContainer={styles.btnContainer}
              startIcon={
                <Ionicons
                  name="search-outline"
                  size="large"
                  color={COLORS.primaryWhiteHex}
                />
              }
            />
          </Row>
        }
      />
    </Row>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: SPACING.space_8,
    backgroundColor: COLORS.primaryWhiteHex,
  },
  inputContainer: {
    marginLeft: SPACING.space_8,
    borderWidth: 1,
    borderColor: COLORS.primaryOrangeHex,
  },
  btnContainer: {
    backgroundColor: COLORS.primaryOrangeHex,
    height: SPACING.space_32,
    paddingHorizontal: SPACING.space_8,
    marginRight: -SPACING.space_8,
    marginLeft: SPACING.space_8,
  },
});

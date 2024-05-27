import React from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, SPACING} from '../constants';
import {History} from '../screens/home/data/histories';
import {globalStyles} from '../styles';
import Button from './Button';
import Input from './Input';
import Ionicons from './Ionicons';
import Row from './Row';
import TextComponent from './TextComponent';
interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  histories: History[];
  onNavigationSearch: () => void;
}
const ItemHistory = ({item}: {item: History}) => (
  <TouchableOpacity style={styles.itemContainer}>
    <TextComponent text={item.title} />
  </TouchableOpacity>
);
const SearchModal = ({
  visible,
  setVisible,
  histories,
  searchText,
  setSearchText,
  onNavigationSearch,
}: Props) => {
  const insets = useSafeAreaInsets();
  const handleSetVisible = () => {
    setVisible(prev => !prev);
  };
  const handleChangeSearchText = (text: string) => {
    setSearchText(text);
  };
  return (
    <Modal animationType="fade" visible={visible} style={globalStyles.flexOne}>
      <View
        style={[
          styles.container,
          {
            paddingBottom: insets.bottom,
          },
        ]}>
        <Row
          style={[
            styles.headerContainer,
            {
              paddingTop: insets.top,
              paddingBottom: SPACING.space_8,
            },
          ]}>
          <Button
            onPress={handleSetVisible}
            startIcon={
              <Ionicons
                name="arrow-back"
                color={COLORS.primaryOrangeHex}
                size="large"
              />
            }
          />
          <Input
            onBlur={onNavigationSearch}
            value={searchText}
            onChangeText={handleChangeSearchText}
            autoFocus
            styleContainer={styles.inputContainer}
            rightIcon={
              <Row>
                <Ionicons
                  name="camera-outline"
                  color={COLORS.thirdGreyHex}
                  size="large"
                />
                <Button
                  onPress={onNavigationSearch}
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
        <FlatList
          showsVerticalScrollIndicator={false}
          data={histories}
          renderItem={({item}) => <ItemHistory item={item} />}
        />
      </View>
    </Modal>
  );
};

export default SearchModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    backgroundColor: COLORS.primaryOrangeHex,
    height: SPACING.space_32,
    paddingHorizontal: SPACING.space_8,
    marginRight: -SPACING.space_8,
    marginLeft: SPACING.space_8,
  },
  headerContainer: {
    paddingHorizontal: SPACING.space_8,
    backgroundColor: COLORS.primaryWhiteHex,
  },
  inputContainer: {
    marginLeft: SPACING.space_8,
    borderWidth: 1,
    borderColor: COLORS.primaryOrangeHex,
  },
  itemContainer: {
    borderBottomWidth: 0.5,
    borderColor: COLORS.thirdGreyHex,
    paddingVertical: SPACING.space_16,
    paddingHorizontal: SPACING.space_8,
  },
});

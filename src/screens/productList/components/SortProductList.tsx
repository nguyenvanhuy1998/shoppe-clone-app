import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Ionicons, Line, Row} from '../../../components';
import {COLORS, SPACING} from '../../../constants';

const SortProductList = () => {
  return (
    <Row style={styles.container}>
      <Button
        styleContainer={styles.btnContainer}
        text="Phổ biến"
        onPress={() => {}}
      />
      <Line width={1} height={'50%'} />
      <Button
        styleContainer={styles.btnContainer}
        text="Mới nhất"
        onPress={() => {}}
      />
      <Line width={1} height={'50%'} />
      <Button
        styleContainer={styles.btnContainer}
        text="Bán chạy"
        onPress={() => {}}
      />
      <Line width={1} height={'50%'} />
      <Button
        styleContainer={styles.btnContainer}
        text="Giá"
        endIcon={<Ionicons name="chevron-expand-outline" />}
        onPress={() => {}}
      />
    </Row>
  );
};

export default SortProductList;

const styles = StyleSheet.create({
  container: {
    minHeight: SPACING.space_32,
    marginTop: SPACING.space_8,
  },
  btnContainer: {
    flex: 1,
    height: '100%',
    borderBottomWidth: 1,
    borderColor: COLORS.primaryGreyHex,
  },
});

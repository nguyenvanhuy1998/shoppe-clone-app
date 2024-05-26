import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import {TextComponent} from '.';
import {COLORS} from '../constants';
import {globalStyles} from '../styles';
interface Props {
  visible: boolean;
}
const LoadingModal = ({visible}: Props) => {
  return (
    <Modal
      visible={visible}
      style={globalStyles.flexOne}
      transparent
      statusBarTranslucent>
      <View style={[globalStyles.containerCenter, styles.contentContainer]}>
        <ActivityIndicator color={COLORS.primaryWhiteHex} size={32} />
        <TextComponent text="Loading" color={COLORS.primaryWhiteHex} />
      </View>
    </Modal>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

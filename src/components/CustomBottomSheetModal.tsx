import {StyleSheet, Text} from 'react-native';
import React, {forwardRef, useCallback, useMemo} from 'react';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';

interface Props {}
const CustomBottomSheetModal = forwardRef<BottomSheetModal, Props>(
  ({}, ref) => {
    const snapPoints = useMemo(() => ['25%', '50%'], []);
    const handleSheetChanges = useCallback((index: number) => {
      console.log('handleSheetChanges', index);
    }, []);
    return (
      <BottomSheetModal
        ref={ref}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheetModal>
    );
  },
);

export default CustomBottomSheetModal;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

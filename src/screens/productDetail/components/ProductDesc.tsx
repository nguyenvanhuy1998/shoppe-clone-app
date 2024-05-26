import React from 'react';
import {StyleSheet, View} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {Heading, Line, Section, TextComponent} from '../../../components';
import {
  COLORS,
  FONT_FAMILY,
  FONTSIZE,
  SPACING,
  WIDTH,
} from '../../../constants';
import {spacingBottom, spacingLeft} from '../../../utils/spacing';
import {globalStyles} from '../../../styles';

const ProductDesc = ({description}: {description: string}) => {
  return (
    <View style={styles.container}>
      <Heading
        text="Chi tiết sản phẩm"
        textButton="Kho, Thương hiệu, H..."
        colorTitle={COLORS.primaryBlackHex}
        sizeTitle={FONTSIZE.size_14}
      />
      <Line style={spacingBottom(SPACING.space_8)} height={1} width={WIDTH} />
      <TextComponent
        style={spacingLeft(SPACING.space_8)}
        text={'Mô tả sản phẩm'}
        fontSize={FONTSIZE.size_14}
        fontFamily={FONT_FAMILY.montserrat_semibold}
      />
      <View style={globalStyles.horizontalSpacing8}>
        <RenderHtml
          contentWidth={WIDTH}
          source={{
            html: description,
          }}
        />
      </View>
    </View>
  );
};

export default ProductDesc;

const styles = StyleSheet.create({
  container: {
    marginTop: SPACING.space_8,
    backgroundColor: COLORS.primaryWhiteHex,
  },
});

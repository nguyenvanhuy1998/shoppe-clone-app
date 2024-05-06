import React, {useRef} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {ContainerComponent} from '../components';
import Carousel from 'react-native-snap-carousel';

const HomeScreen = () => {
  const carouselRef = useRef(null);
  const {width: viewportWidth} = Dimensions.get('window');

  const data = [
    'Item 1',
    'Item 2',
    'Item 3',
    // Add more items here
  ];
  const renderItem = ({item}) => (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25,
      }}>
      <Text>{item}</Text>
    </View>
  );
  return (
    <ContainerComponent type="noSafeArea">
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth - 50}
        loop={true}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
      />
    </ContainerComponent>
  );
};

export default HomeScreen;

import React from 'react';
import {ContainerComponent, TextComponent} from '../components';
import Carousel from 'react-native-reanimated-carousel';
import {WIDTH} from '../constants';
import {Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <ContainerComponent type="noSafeArea">
      <Carousel
        loop
        width={WIDTH}
        height={WIDTH / 2}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', fontSize: 30}}>{index}</Text>
          </View>
        )}
      />
    </ContainerComponent>
  );
};

export default HomeScreen;

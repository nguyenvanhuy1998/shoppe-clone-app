import React, {useEffect, useState} from 'react';
import AuthStackNavigator from './AuthStackNavigator';
import {SplashScreen} from '../screens';

const RootStackNavigator = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return isShowSplash ? <SplashScreen /> : <AuthStackNavigator />;
};

export default RootStackNavigator;

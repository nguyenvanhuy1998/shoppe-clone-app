import React, {useContext, useEffect, useState} from 'react';
import {SplashScreen} from '../screens';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import {AppContext} from '../contexts/AppContext';

const RootNavigator = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const {isAuthenticated} = useContext(AppContext);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return isShowSplash ? (
    <SplashScreen />
  ) : isAuthenticated ? (
    <TabNavigator />
  ) : (
    <AuthNavigator />
  );
};

export default RootNavigator;

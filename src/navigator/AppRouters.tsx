import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from '../contexts/AppContext';
import {SplashScreen} from '../screens';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const AppRouters = () => {
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
    <MainNavigator />
  ) : (
    <AuthNavigator />
  );
};

export default AppRouters;

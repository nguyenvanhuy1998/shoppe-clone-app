import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAccessTokenToLS = async (accessToken: string) => {
  await AsyncStorage.setItem('accessToken', accessToken);
};

export const clearAccessTokenFromLS = async () => {
  await AsyncStorage.removeItem('accessToken');
};

export const getAccessTokenFromLS = async () => {
  const token = await AsyncStorage.getItem('accessToken');
  return token || '';
};

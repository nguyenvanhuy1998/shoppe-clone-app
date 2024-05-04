import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '../types/user.type';

export const setAccessTokenToLS = async (accessToken: string) => {
  await AsyncStorage.setItem('accessToken', accessToken);
};

export const clearLS = async () => {
  await AsyncStorage.removeItem('accessToken');
  await AsyncStorage.removeItem('profile');
};

export const getAccessTokenFromLS = async () => {
  const token = await AsyncStorage.getItem('accessToken');
  return token || '';
};
export const setProfileToLS = async (profile: User) => {
  await AsyncStorage.setItem('profile', JSON.stringify(profile));
};
export const getProfileFromLS = async () => {
  const result = await AsyncStorage.getItem('profile');
  console.log('result', result);
  return result ? JSON.parse(result) : null;
};

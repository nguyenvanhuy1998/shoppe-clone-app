import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import {useMutation} from '@tanstack/react-query';
import authApi from '../../apis/auth.api';
import {globalStyles} from '../../styles';
import {TextComponent} from '../../components';
import {AppContext} from '../../contexts/AppContext';

const ProfileScreen = () => {
  const {setIsAuthenticated, setProfile, profile} = useContext(AppContext);

  const logoutMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      setIsAuthenticated(false);
      setProfile(null);
    },
  });
  const handleLogout = () => {
    logoutMutation.mutate();
  };
  return (
    <View style={globalStyles.containerCenter}>
      <TextComponent text={profile?.email} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;

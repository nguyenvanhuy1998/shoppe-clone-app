import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import {globalStyles} from '../styles';
import {useMutation} from '@tanstack/react-query';
import {logout} from '../apis/auth.api';
import {AppContext} from '../contexts/AppContext';
import {TextComponent} from '../components';

const ProfileScreen = () => {
  const {setIsAuthenticated, setProfile, profile} = useContext(AppContext);

  const logoutMutation = useMutation({
    mutationFn: logout,
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

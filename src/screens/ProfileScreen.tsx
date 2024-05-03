import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import {globalStyles} from '../styles';
import {useMutation} from '@tanstack/react-query';
import {logout} from '../apis/auth.api';
import {AppContext} from '../contexts/AppContext';

const ProfileScreen = () => {
  const {setIsAuthenticated} = useContext(AppContext);

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: data => {
      setIsAuthenticated(false);
    },
  });
  const handleLogout = () => {
    logoutMutation.mutate();
  };
  return (
    <View style={globalStyles.containerCenter}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;

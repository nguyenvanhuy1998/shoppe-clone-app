import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {AppProvider} from './src/contexts/AppContext';
import {RootNavigator} from './src/navigator';
import {globalStyles} from './src/styles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 300000, // 5 minutes
      // retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});
const App = () => {
  return (
    <GestureHandlerRootView style={globalStyles.flexOne}>
      <SafeAreaProvider>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <AppProvider>
              <RootNavigator />
            </AppProvider>
            {/* <DevToolsBubble /> */}
          </QueryClientProvider>
        </NavigationContainer>
        <Toast />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;

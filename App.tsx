import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './src/navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {DevToolsBubble} from 'react-native-react-query-devtools';
import Toast from 'react-native-toast-message';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <RootStackNavigator />
          <DevToolsBubble />
        </QueryClientProvider>
      </NavigationContainer>
      <Toast />
    </SafeAreaProvider>
  );
};

export default App;

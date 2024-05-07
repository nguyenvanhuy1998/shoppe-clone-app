import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {DevToolsBubble} from 'react-native-react-query-devtools';
import Toast from 'react-native-toast-message';
import {RootNavigator} from './src/navigator';
import {AppProvider} from './src/contexts/AppContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {globalStyles} from './src/styles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
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

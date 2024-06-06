import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {AppProvider} from './src/contexts/AppContext';
import {AppRouters} from './src/navigator';
import {globalStyles} from './src/styles';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

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
        <Provider store={store}>
          <NavigationContainer>
            <BottomSheetModalProvider>
              <QueryClientProvider client={queryClient}>
                <AppProvider>
                  <AppRouters />
                </AppProvider>
              </QueryClientProvider>
            </BottomSheetModalProvider>
          </NavigationContainer>
        </Provider>
        <Toast />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;

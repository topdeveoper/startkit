import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {RecoilRoot} from 'recoil';
import {AppNavigator} from './navigation';
import {Organisms} from './components';

function App() {
  //hide splash screen
  React.useEffect(() => SplashScreen.hide(), []);

  return (
    <RecoilRoot>
      <Organisms.ErrorBoundary>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </Organisms.ErrorBoundary>
    </RecoilRoot>
  );
}

export default App;

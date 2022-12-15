import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/domain/store/store';
import {PersistGate} from 'redux-persist/es/integration/react';
import {StackNavigations} from './src/presentation/navigations/StackNavigations';
import SplashScreen from 'react-native-splash-screen';

const Main = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackNavigations />
      </PersistGate>
    </Provider>
  );
};

export default Main;

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { Provider } from 'react-redux';
import store from './src/store';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar translucent={false} backgroundColor={'black'} animated style='light'/>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
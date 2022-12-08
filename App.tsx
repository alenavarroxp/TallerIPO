import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Screens from 'screens/Screens';
import { NativeBaseProvider } from 'native-base';

export default function App() {

  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Screens/>
        
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

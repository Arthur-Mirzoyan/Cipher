import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './Components/HomeScreen/HomeScreen';
import { EncryptionScreen } from './Components/EncryptionScreen/EncryptionScreen';
import { DecryptionScreen } from './Components/DecryptionScreen/DecryptionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Welcome',
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Encryption"
            component={EncryptionScreen}
            options={{
              title: 'Welcome',
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Decryption"
            component={DecryptionScreen}
            options={{
              title: 'Welcome',
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
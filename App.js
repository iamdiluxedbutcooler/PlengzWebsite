import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from './firebase';
import LoginScreen from './screens/sessions/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  const [signedIn, setSignedIn] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  });
  
  /* return (
    <NavigationContainer theme={DefaultTheme}>
      {signedIn
        ? (
          <Text>Signed in</Text>
        ) : (
          <>
            <StatusBar style="dark" />
            <Stack.Navigator
              mode="card"
              screenOptions={{
              }}
            >
              <Stack.Screen
                name="signIn"
                component={LoginScreen}
                options={{
                  title: 'Sign in : Pleng 11/08/64',
                  headerStyle: {
                    backgroundColor: '#29434e',
                    borderBottomColor: '#29434e',
                  },
                  headerTintColor: '#fff',
                }}
              />
            </Stack.Navigator>
          </>
        )}
    </NavigationContainer>
  );*/

  return (
    <View style={styles.container}>
      {signedIn
        ? (<Text>Pleng signed In</Text>) : (<Text>Pleng not signed in</Text>)
      }
    </View>
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
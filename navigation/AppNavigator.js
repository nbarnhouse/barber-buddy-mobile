import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';
import { AuthContext } from '../contexts/AuthContext';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { isLoggedIn } = useContext(AuthContext); // Access login state

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        // Main App Flow (Post-Login)
        <Stack.Screen name="Main" component={TabNavigator} />
      ) : (
        // Authentication Flow (Pre-Login)
        <Stack.Screen name="Login" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
}

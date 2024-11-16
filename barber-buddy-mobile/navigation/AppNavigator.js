import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Authentication Flow */}
      <Stack.Screen name="Auth" component={AuthNavigator} />

      {/* Main App Flow */}
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
}

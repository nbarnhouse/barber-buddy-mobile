// import { Stack } from 'expo-router';

// export default function RootLayout() {
//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="index" options={{ title: 'Index' }} />
//       <Stack.Screen
//         name="login"
//         options={{
//           title: 'Login',
//         }}
//       />
//       <Stack.Screen
//         name="home"
//         options={{
//           title: 'Home',
//         }}
//       />
//     </Stack>
//   );
// }

import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '../context/ThemeContext';
import { AuthProvider } from '../context/AuthContext';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <ThemeProvider>
          <Slot /> {/* Automatically renders child routes */}
        </ThemeProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}

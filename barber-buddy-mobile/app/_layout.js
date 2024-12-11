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

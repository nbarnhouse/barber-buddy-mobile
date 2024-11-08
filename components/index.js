import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const logoImg = require('../assets/images/barber_logo.png');

  const [fontsLoaded] = useFonts({
    interFont: require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#f5722a" />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView></SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d2124',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    // marginTop: 100,
    height: 366,
    width: 366,
  },
  title: {
    color: '#ffd890',
    // marginBottom: 200,
    fontSize: 38.63,
    fontWeight: 900,
    fontFamily: 'interFont',
  },
});

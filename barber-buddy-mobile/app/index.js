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
      <SafeAreaView style={styles.container} edges={['none']}>
        <Image source={logoImg} style={styles.image} />
        <Text style={styles.title}>Barber Buddy</Text>

        <Button title="Go to Login" onPress={() => router.push('/login')} />
        <Button title="Go to Home" onPress={() => router.push('/home')} />
        <Button title="Go to Signup" onPress={() => router.push('/signup')} />
        <Button title="Go to About" onPress={() => router.push('/about')} />
        <Button
          title="test alert"
          onPress={() => Alert.alert('Alert Button Pushed')}
        />
      </SafeAreaView>
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

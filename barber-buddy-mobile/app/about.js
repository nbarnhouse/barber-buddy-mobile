import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  SafeAreaProvider,
  Button,
} from 'react-native';

import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';

import globalStyles from '../components/globalStyles';

export default function About() {
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
      <SafeAreaView>
        <View>
          <Image source={logoImg} style={styles.logo}></Image>
          <Text style={globalStyles.title}>Barber Buddy</Text>
          <Text style={styles.font}>
            Getting a haircut can feel like entering uncharted territory.
            Questions flood your mind: What style suits me? How do I explain it
            to my barber? Will I end up with a haircut I hate? These
            uncertainties often deter men from experimenting with new looks and
            styles.
            <br></br>
            Imagine having a trusted companion by your side, providing expert
            guidance and advice on the perfect haircut for you. That's exactly
            what BarberBuddy offers. Our user-friendly mobile application is
            designed to empower you with the knowledge and confidence you need
            to step into any barbershop with ease.
          </Text>
          <Button title={'Start'} onPress={() => router.push('/login')} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 140,
    width: 140,
  },
  text: {
    size: 20,
    color: '#FED992',
    weight: 900,
    justifyContent: 'flex-start',
    fontFamily: 'interFont',
  },
});

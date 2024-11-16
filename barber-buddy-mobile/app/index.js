import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';
import { useState } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
const logoImg = require('../assets/images/barber_logo.png');
import { useFonts } from 'expo-font';
import { Link, useRouter } from 'expo-router';
import SubmitButton from '@/components/SubmitButton';

export default function Index() {
  const [fontsLoaded] = useFonts({
    interFont: require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
  });
  const router = useRouter();

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#f5722a" />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['none']}>
        <Image source={logoImg} style={styles.image} />
        <Text style={styles.text}>Barber Buddy</Text>
        <View style={{ width: 172, height: 42 }}>
          <SubmitButton />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d2124',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    marginTop: 100,
    height: 366,
    width: 366,
  },
  text: {
    color: '#f5722a',
    marginBottom: 200,
    fontSize: 38.63,
    fontWeight: 900,
    fontFamily: 'interFont',
  },
});

import { Text, View, Image, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
const logoImg = require('../assets/images/barber_logo.png');

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['none']}>
        <Image source={logoImg} style={styles.image} />

        <Text style={styles.text}>Barber Buddy</Text>
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
    height: 366,
    width: 366,
  },
  text: {
    color: '#f5722a',
    marginBottom: 200,
    fontSize: 80,
  },
});

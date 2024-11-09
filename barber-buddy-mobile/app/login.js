import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const logoImg = require('../assets/images/barber_logo.png');

export default function Login() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['none']}>
        <View>
          <Image source={logoImg} style={styles.image} />
          <Text style={(styles.text, styles.title)}>Barber Buddy</Text>
          <TextInput value={username} />
          <TextInput value={password} />

          <Button style={styles.button_text} title="Submit" />
          <Button style={styles.text} title="New User" />
        </View>
      </SafeAreaView>
      w
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d2124',
  },
  text: {
    color: '#ffd991',
    fontSize: 25,
    //Font uploaded to assets folder
  },
  title: {
    fontSize: 47,
  },
  image: {
    height: 366,
    width: 366,
  },
  button_text: {
    color: '#f5722a',
    fontSize: 25,
  },
});

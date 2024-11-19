import { useRouter } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Platform,
} from 'react-native';
import { useFonts } from 'expo-font';
import { Shadow } from 'react-native-shadow-2';

export default function Register() {
  const logoImg = require('../assets/images/barber_logo.png');
  const [fontsLoaded] = useFonts({
    interFont: require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
  });

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo}></Image>
      <Text style={styles.title}>Barber Buddy</Text>
      <Text style={styles.text}>Create an Account</Text>
      <Shadow radius={5}>
        <View>
          <TextInput style={styles.input} placeholder={'e-mail'}></TextInput>
        </View>
      </Shadow>
      <View style={{ flexDirection: 'row' }}>
        <Button style={styles.button} title="Back" />
        <Button style={styles.button} title="Next" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#0d2124',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: 20.8,
    fontWeight: 400,
  },

  title: {
    color: '#ffd890',
    fontSize: 38.63,
    fontWeight: 900,
    fontFamily: 'interFont',
  },

  logo: {
    height: 250,
    width: 250,
  },

  input: {
    backgroundColor: 'red',
    width: 296,
    height: 42,
    borderRadius: 10,
    paddingLeft: 10,
    overflow: 'hidden',
  },

  button: {
    width: 124,
    height: 42,
    borderRadius: 10,
  },

  // shadow: {
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: { width: 0, height: -4 },
  //       shadowOpacity: 0.2,
  //       shadowRadius: 4,
  //     },
  //     android: {
  //       elevation: 5,
  //     },
  //   }),
  // },
});

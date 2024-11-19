import { useRouter } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Shadow } from 'react-native-shadow-2';
import { LinearGradient } from 'expo-linear-gradient';

export default function Register() {
  const logoImg = require('../assets/images/barber_logo.png');
  const [fontsLoaded] = useFonts({
    interFont: require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo}></Image>
        <Text style={styles.title}>Barber Buddy</Text>
        <Text style={[styles.text, { textDecorationLine: 'underline' }]}>
          Create an Account
        </Text>

        <Shadow radius={5}>
          <TextInput style={styles.input} placeholder={'e-mail'}></TextInput>
        </Shadow>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <TouchableOpacity
            style={[{ backgroundColor: '#b97f60' }, styles.button]}
          >
            <LinearGradient
              colors={['#ffffff', 'transparent']}
              style={styles.background}
            >
              {/* <Text style={styles.text}>Back</Text> */}
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={[{ backgroundColor: '#f27732' }, styles.button]}
          >
            <Text style={styles.text}> Next</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#0d2124',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  text: {
    color: 'white',
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
    backgroundColor: 'white',
    width: 296,
    height: 42,
    borderRadius: 10,
    paddingLeft: 10,
  },

  button: {
    width: 124,
    height: 42,
    borderRadius: 10,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// style={[ NEXT COLOR
//   { backgroundColor: '#f27732' },
//   styles.text,
//   styles.button,
// ]}

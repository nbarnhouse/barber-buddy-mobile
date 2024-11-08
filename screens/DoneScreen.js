import { View, StyleSheet, Text, Image, Alert, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import scissorImage from '../assets/images/scissor_image.png';
import statusBar from '../assets/images/status_bars/statusBarDone.png';
import NonGradientButton from '../components/NonGradientButton';
import globalStyles from '../styles/globalStyles';
const { width, height } = Dimensions.get('window');

export default function DoneScreen() {
  const [fontsLoaded] = useFonts({
    interFont: require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
  });

  return (
    <View style={styles.container}>
      <Image source={statusBar} />
      <Image
        source={scissorImage}
        style={[styles.image, { resizeMode: 'contain' }]}
      />
      <Text style={globalStyles.title}>You’re done!</Text>
      <NonGradientButton
        label="Suggested Cuts"
        height={42}
        width={172}
        onPress={() => Alert.alert('Suggested Cuts Button Pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d2124',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  image: {
    height: height * 0.4, // 40% of screen height
    width: width * 0.6, // 60% of screen width
    resizeMode: 'contain',
  },
});

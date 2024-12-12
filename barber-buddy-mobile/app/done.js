import { View, StyleSheet, Text, Image, Alert } from 'react-native';
import scissorImage from '../assets/images/scissor_image.png';
import statusBar from '../assets/images/statusBar.png';
import NonGradientButton from '../components/NonGradientButton';
import globalStyles from '../components/globalStyles';

export default function Done() {
  return (
    <View style={styles.container}>
      <Image source={statusBar} />
      <Image source={scissorImage} style={styles.image} />
      <Text style={[globalStyles.title, { color: 'white' }]}>You’re done!</Text>
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
    height: 384.18,
    width: 248.58,
  },
});

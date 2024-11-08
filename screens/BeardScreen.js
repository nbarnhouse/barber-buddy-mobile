import { View, StyleSheet, Text, Image, Alert, Dimensions } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import beardImage from '../assets/images/BeardImage.png';
import statusBar from '../assets/images/status_bars/statusBarBeard.png';
import NonGradientButton from '../components/NonGradientButton';
import globalStyles from '../styles/globalStyles';
import { Picker } from '@react-native-picker/picker';

const { width, height } = Dimensions.get('window');

export default function BeardScreen() {
  const [selectedValue, setSelectedValue] = useState('Select Here');
  const [fontsLoaded] = useFonts({
    interFont: require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
  });

  return (
    <View style={styles.container}>
      <Image source={statusBar} />
      <Text style={[globalStyles.text, { color: 'white' }]}>Beard Length</Text>

      <Image source={beardImage} style={{ height: 446, width: 350 }} />

      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={{ height: 140, width: 253 }}
      >
        <Picker.Item label="Item 1" value="option1" />
        <Picker.Item label="Item 2" value="option2" />
        <Picker.Item label="Item 3" value="option3" />
        <Picker.Item label="Item 4" value="option4" />
        <Picker.Item label="Item 5" value="option5" />
      </Picker>

      <NonGradientButton
        label="Select"
        height={42}
        width={172}
        onPress={() => Alert.alert('Select Button Pressed')}
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

import { View, Text, Button, Image, StyleSheet } from 'react-native';
const logoImg = require('../assets/images/barber_logo.png');

export default function Login() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={logoImg} />
        <Text style={(styles.text, styles.title)}>Barber Buddy</Text>

        <Button title="Submit" />
        <Button title="New User" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d2124',
  },
  text: {
    color: '#e19854',
  },
  title: {
    fontSize: 36,
  },
  image: {
    height: 366,
    width: 366,
  },
});

import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Login() {
  const logoImg = require('../assets/images/barber_logo.png');

  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('Password');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['none']}>
        <View>
          <Image source={logoImg} style={styles.image} />
          <Text style={(styles.text, styles.title)}>Barber Buddy</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeUsername}
            value={text}
            placeholder={'Username'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder={'Password'}
          />

          <Button style={styles.button_text} title="Submit" />
          <Button style={styles.text} title="New User" />
        </View>
      </SafeAreaView>
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
  input: { height: 40, margin: 12, borderWidth: 1, backgroundColor: '#ffd991' },
});

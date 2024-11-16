import React from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import SubmitButton from '@/components/SubmitButton';

export default function Login() {
  const logoImg = require('../assets/images/barber_logo.png');

  const [username, onEnterUsername] = React.useState('');
  const [password, onEnterPassword] = React.useState('');

  const handleTextInput = (input) => {
    onEnterUsername(input);
    console.log(input);
  };

  const handlePassInput = (input) => {
    onEnterPassword(input);
    console.log(input);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['none']}>
        <View>
          <Image source={logoImg} style={styles.image} />
          <Text style={(styles.text, styles.title)}>Barber Buddy</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleTextInput}
            value={username}
            placeholder={'Username'}
          />
          <TextInput
            style={styles.input}
            onChangeText={handlePassInput}
            value={password}
            placeholder={'Password'}
          />

          <SubmitButton />
          <Button
            style={styles.text}
            title="New User"
            onPress={() => console.log('New User Link clicked')}
          />
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
  input: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#ffd991',
  },
});

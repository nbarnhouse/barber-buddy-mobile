import React from 'react';
import {
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,  
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Keyboard,
} from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';

import globalStyles from './globalStyles.js';
import NonGradientButton from '../components/buttons/NonGradientButton.js';

const SignIn = () => {
   const router = useRouter();
   const logoImg = require('../assets/images/barber_logo.png');

    const [fontsLoaded] = useFonts({
    interFont: require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
  });



    const [username, onEnterUsername] = React.useState('');
  const [password, onEnterPassword] = React.useState('');

    if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#f5722a" />;
  }

  const handleTextInput = (input) => {
    onEnterUsername(input);
  };

  const handlePassInput = (input) => {
    onEnterPassword(input);
  };

  const handleSubmit = () => {
    console.log(`username: ${username}, password: ${password}`);
  };

  return (

    
      <SafeAreaView style={styles.container} edges={['none']}>
        <Image source={logoImg} style={styles.image} />

        <Text style={[styles.font, globalStyles.title]}>Barber Buddy</Text>

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
          secureTextEntry // Mask the password text
        />

        <NonGradientButton
          label="Submit"
          onPress={() => Alert.alert('Submit Button Pressed')}
          height={42}
          width={124}
        />

        <TouchableOpacity onPress={() => router.push('/signup')}>
          <Text
            style={[
              styles.font,
              {
                textDecorationLine: 'underline',
              },
            ]}
          >
            New User
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d2124',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  font: { color: '#FFFFFF', fontSize: 18, fontWeight: 400 },

  image: {
    height: 366,
    width: 366,
  },

  input: {
    height: 42,
    paddingLeft: 15,
    width: 296,
    // margin: 1,
    backgroundColor: '#FBE1B2',
    borderRadius: 10,
  },
});

export default SignIn
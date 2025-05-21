import React from "react";
import {
  Text,
  View,
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
  Alert,
} from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";

import NonGradientButton from "../../components/NonGradientButton";
import globalStyles from "../../styles/globalStyles";

const SignIn = () => {
  const router = useRouter();
  const logoImg = require("../../assets/images/barber_logo.png");

  const [fontsLoaded] = useFonts({
    interFont: require("../../assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
  });

  const [username, onEnterUsername] = React.useState("");
  const [password, onEnterPassword] = React.useState("");

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#f5722a" />;
  }

  const handleTextInput = (input: string) => {
    onEnterUsername(input);
  };

  const handlePassInput = (input: string) => {
    onEnterPassword(input);
  };

  const handleSubmit = () => {
    console.log(`username: ${username}, password: ${password}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logoImg} style={styles.image} />

      <Text style={[styles.font, globalStyles.title]}>Barber Buddy</Text>

      <TouchableOpacity onPress={() => router.push("/register")}>
        <Text style={styles.font}>Create an Account</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        onChangeText={handleTextInput}
        value={username}
        placeholder={"Username"}
      />
      <TextInput
        style={styles.input}
        onChangeText={handlePassInput}
        value={password}
        placeholder={"Password"}
        secureTextEntry // Mask the password text
      />
      <View
        style={{ flexDirection: "row", padding: 10, backgroundColor: "red" }}
      >
        <NonGradientButton
          //style={{ color: "#b97f60" }}
          label="Back"
          onPress={() => router.back()}
          height={42}
          width={124}
        />

        <NonGradientButton
          label="Submit"
          onPress={() => Alert.alert("Submit Button Pressed")}
          height={42}
          width={124}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d2124",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  font: { color: "#FFFFFF", fontSize: 18, fontWeight: 400 },

  image: {
    height: 366,
    width: 366,
  },

  input: {
    height: 42,
    paddingLeft: 15,
    width: 296,
    // margin: 1,
    backgroundColor: "#FBE1B2",
    borderRadius: 10,
  },
});

export default SignIn;

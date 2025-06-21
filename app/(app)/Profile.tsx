import {
  Text,
  TextInput,
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";

import NonGradientButton from "../../components/NonGradientButton";
import globalStyles from "../../GlobalStyles";

export default function UpdateProfile() {
  const router = useRouter();
  const logoImg = require("../../assets/images/barber_logo.png");

  const [fontsLoaded] = useFonts({
    interFont: require("../../assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
  });

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUpdate = () => {
    // connect to AsyncStorage
    console.log("Updated Profile:", { name, username, password });
    router.back();
  };

  return (
    <SafeAreaView style={globalStyles.background}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.container}>
            <Image source={logoImg} style={styles.logo} />
            <Text style={{ color: "white " }}>Update Profile</Text>

            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#aaa"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#aaa"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <NonGradientButton
              label="Update"
              height={42}
              width={172}
              onPress={handleUpdate}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 120,
    width: 120,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 44,
    backgroundColor: "#FED992",
    borderRadius: 8,
    paddingHorizontal: 12,
    color: "#fff",
    marginVertical: 8,
    fontSize: 16,
  },
});

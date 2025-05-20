import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import globalStyles from "../../styles/globalStyles";

export default function SignupScreen() {
  const router = useRouter();

  const logoImg = require("../../assets/images/barber_logo.png");
  const [fontsLoaded] = useFonts({
    interFont: require("../../assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logoImg} style={styles.logo}></Image>
      <Text style={globalStyles.title}>Barber Buddy</Text>

      <Text style={[styles.text, styles.link]}>Create an Account</Text>

      <TextInput style={styles.input} placeholder={"e-mail"}></TextInput>

      <View style={{ flexDirection: "row", padding: 10 }}>
        <LinearGradient
          colors={["#ffffff", "#b97f60"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.button_gradient}
        >
          <TouchableOpacity
            style={[styles.button_shape]}
            onPress={() => router.back()}
          >
            <Text style={styles.text}>Back</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          colors={["#ffffff", "#f77121"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 1 }}
          style={styles.button_gradient}
        >
          <TouchableOpacity
            style={[styles.button_shape]}
            // onPress={() => router.push('')}
          >
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d2124",
    justifyContent: "space-around",
    alignItems: "center",
  },

  text: {
    color: "#FFFFFF",
    fontSize: 20.8,
    fontWeight: 400,
  },

  logo: {
    height: 250,
    width: 250,
  },

  input: {
    width: 296,
    height: 42,
    padding: 10,
    fontSize: 20.8,
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
  },

  button_shape: {
    width: 124,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
  },

  button_gradient: {
    borderRadius: 10,
    marginHorizontal: 15,
  },

  link: {
    textDecorationLine: "underline",
  },
});

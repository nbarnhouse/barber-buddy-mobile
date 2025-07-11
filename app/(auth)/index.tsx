import { Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";

import globalStyles from "../../styles/globalStyles";
import NonGradientButton from "../../components/NonGradientButton";

export default function Index() {
  const router = useRouter();
  const logoImg = require("../../assets/images/barber_logo.png");

  const [fontsLoaded] = useFonts({
    interFont: require("../../assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logoImg} style={styles.logo}></Image>
      <Text style={globalStyles.title}>Barber Buddy</Text>
      <Text style={[globalStyles.text, styles.text]}>
        Getting a haircut can feel like entering uncharted territory. Questions
        flood your mind: What style suits me? How do I explain it to my barber?
        Will I end up with a haircut I hate? These uncertainties often deter men
        from experimenting with new looks and styles.
      </Text>
      <Text style={[globalStyles.text, styles.text]}>
        Imagine having a trusted companion by your side, providing expert
        guidance and advice on the perfect haircut for you. That's exactly what
        BarberBuddy offers. Our user-friendly mobile application is designed to
        empower you with the knowledge and confidence you need to step into any
        barbershop with ease.
      </Text>

      <NonGradientButton
        label="Start"
        height={42}
        width={124}
        onPress={() => router.push("/register")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c2025",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 140,
    width: 140,
  },
  text: {
    justifyContent: "flex-start",
    padding: 20,
    fontSize: 18,
  },
});

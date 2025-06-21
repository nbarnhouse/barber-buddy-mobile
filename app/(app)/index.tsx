import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import globalStyles from "../../GlobalStyles";
import BackgroundButton from "../../components/BackgroundButton";
import HomePageHeader from "../../components/HomePageHeader";
export default function HomeScreen() {
  const router = useRouter();
  const userLogo = require("../../assets/images/logo_image.jpeg");
  const homeButton = require("../../assets/icons/home_icon.png");
  const savedImage = require("../../assets/images/saved_image.jpeg");
  const topicsImage = require("../../assets/images/topics_image.jpeg");
  const trendsImage = require("../../assets/images/trends_image.jpeg");

  return (
    <SafeAreaView style={globalStyles.background}>
      <View style={globalStyles.container}>
        <HomePageHeader />

        <Image source={homeButton} style={{ width: 82, height: 82 }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  user_logo: {
    height: 60,
    width: 60,
    margin: 5,
    marginRight: 15,
    overflow: "hidden",
    borderRadius: 30,
  },

  screen_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },

  image_size: {
    height: "18%",
    width: "90%",
    borderRadius: 10,
    margin: 10,
    resizeMode: "cover",
  },
});

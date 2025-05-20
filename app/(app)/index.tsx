import { View, Text, Image, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function HomeScreen() {
  const userLogo = require("../../assets/images/logo_image.jpeg");
  const homeButton = require("../../assets/icons/home_icon.png");
  const savedImage = require("../../assets/images/saved_image.jpeg");
  const profileImage = require("../../assets/images/profile_image.jpeg");
  const topicsImage = require("../../assets/images/topics_image.jpeg");
  const trendsImage = require("../../assets/images/trends_image.jpeg");

  return (
    <View style={styles.container}>
      <View style={styles.screen_banner}>
        <Image source={userLogo} style={styles.user_logo} />
        <AntDesign name="home" size={24} color="black" />{" "}
      </View>
      <View>
        <Image source={profileImage} style={styles.image_size} />
        {/* <MenuTitle style={{ flex: 1, justifyContent: 'flex-end' }} /> */}
      </View>
      <Image source={savedImage} style={styles.image_size} />
      <Image source={topicsImage} style={styles.image_size} />
      <Image source={trendsImage} style={styles.image_size} />
      <Image source={homeButton} style={{ width: 88, height: 88 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d2124",
    justifyContent: "space-around",
    alignItems: "center",
  },

  user_logo: {
    height: 82,
    width: 82,
    borderRadius: 40,
    margin: 5,
  },

  screen_banner: {
    height: 90,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },

  image_size: {
    height: 158,
    width: 368,
    resizeMode: "cover",
    borderRadius: 10,
  },
});

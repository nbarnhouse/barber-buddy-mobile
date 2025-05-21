import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function HomeScreen() {
  const userLogo = require("../../assets/images/logo_image.jpeg");
  const homeButton = require("../../assets/icons/home_icon.png");
  const savedImage = require("../../assets/images/saved_image.jpeg");
  const profileImage = require("../../assets/images/profile_image.jpeg");
  const topicsImage = require("../../assets/images/topics_image.jpeg");
  const trendsImage = require("../../assets/images/trends_image.jpeg");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen_header}>
        <Image source={userLogo} style={styles.user_logo} />
        <Feather name="menu" size={36} color="black" />{" "}
        {/* <MenuTitle style={{ flex: 1, justifyContent: 'flex-end' }} /> */}
      </View>

      <View style={styles.screen_body}>
        <Image source={profileImage} style={styles.image_size} />
        <Image source={savedImage} style={styles.image_size} />
        <Image source={topicsImage} style={styles.image_size} />
        <Image source={trendsImage} style={styles.image_size} />
      </View>
      {/* <View>
        <Image source={homeButton} style={{ width: 82, height: 82 }} />
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d2124",
    justifyContent: "space-evenly",
    padding: 10,
  },

  user_logo: {
    height: 60,
    width: 60,
    borderRadius: 40,
    margin: 5,
  },

  screen_header: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  screen_body: {
    //justifyContent: "center",
    backgroundColor: "red",
  },

  image_size: {
    height: "18%",
    width: "90%",
    // resizeMode: "cover",
    borderRadius: 10,
    margin: 10,
  },
});

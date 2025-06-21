import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import Feather from "@expo/vector-icons/Feather";

import globalStyles from "../GlobalStyles";

const HomePageHeader = () => {
  const router = useRouter();
  const userLogo = require("../assets/images/logo_image.jpeg");
  return (
    <View style={styles.screen_header}>
      <TouchableOpacity
        onPress={() => router.push("/(app)/Profile")}
        style={styles.user_logo_button}
      >
        <Image source={userLogo} style={styles.user_logo} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Menu icon pressed")}>
        <Feather name="menu" size={36} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HomePageHeader;

const styles = StyleSheet.create({
  screen_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    width: "100%",
    height: 80,
    paddingRight: 10,
  },
  user_logo_button: {
    //backgroundColor: "#4CAF50", // green background for testing
    backgroundColor: "#0d2124",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  user_logo: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
  },
});

//

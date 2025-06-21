import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const profileImage = require("../assets/images/profile_image.jpeg");

const BackgroundButton = () => {
  return (
    <TouchableOpacity>
      <Image source={profileImage} style={styles.image_size} />
    </TouchableOpacity>
  );
};

export default BackgroundButton;

const styles = StyleSheet.create({
  image_size: {
    borderRadius: 10,
  },
});

// <Image source={savedImage} style={styles.image_size} />
// <Image source={topicsImage} style={styles.image_size} />
// <Image source={trendsImage} style={styles.image_size} />

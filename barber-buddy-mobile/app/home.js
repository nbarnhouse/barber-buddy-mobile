import { View, Text, Image, StyleSheet } from 'react-native';

export default function Home() {
  const userLogo = require('../assets/images/logo_image.jpeg');
  const homeButton = require('../assets/images/home_icon.png');
  const savedImage = require('../assets/images/saved_image.jpeg');
  const profileImage = require('../assets/images/profile_image.jpeg');

  return (
    <View style={styles.container}>
      <View style={styles.screen_banner}>
        <Image source={userLogo} style={styles.user_logo} />
      </View>
      <Image source={profileImage} style={styles.image_size} />
      <Image source={savedImage} style={styles.image_size} />
      <Image source={homeButton} style={{ width: 88, height: 88 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d2124',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  user_logo: {
    height: 82,
    width: 82,
    borderRadius: 40,
  },

  screen_banner: {
    height: 90,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },

  image_size: {
    height: 158,
    width: 368,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

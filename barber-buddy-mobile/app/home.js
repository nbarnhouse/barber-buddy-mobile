import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  const userLogo = require('../assets/images/logo_image.jpeg');
  const homeButton = require('../assets/images/home_icon.png');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Image source={userLogo} style={styles.user_logo} />
          <Text>Getting Started</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  user_logo: {
    height: 82,
    width: 82,
  },
});

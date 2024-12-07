import { View, Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import globalStyles from '../components/globalStyles';

export default function Confirm() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Confirm Page</Text>
          <Text style={globalStyles.title}>Barber Buddy</Text>
          <Text style={[globalStyles.text, styles.confirm_text]}>
            Confirm via e-mail
          </Text>
          <Button title="Complete"></Button>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d2124',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirm_text: {
    fontSize: 43.12,
  },
});

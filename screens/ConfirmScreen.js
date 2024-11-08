import { View, Text, StyleSheet, Button } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function ConfirmScreen() {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.title}>Barber Buddy</Text>
      <Text style={[globalStyles.text, styles.confirm_text]}>
        Confirm via e-mail
      </Text>
      <Button title="Complete"></Button>
    </View>
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

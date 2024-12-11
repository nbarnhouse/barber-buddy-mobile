import { View, Text, StyleSheet, Pressable } from 'react-native';
import globalStyles from './globalStyles';

export default function MenuTitle({ label, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button_shape} onPress={onPress}>
        <Text style={[globalStyles.text, { color: '#FFFFFF' }]}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    Width: 274,
    Height: 55,
    backgroundColor: '#1E1E1E',
    opacity: 0.75,
  },
});

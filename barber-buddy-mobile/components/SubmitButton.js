import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function SubmitButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.shape} onPress={onPress}>
      <Text style={styles.font}> Submit</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  shape: {
    backgroundColor: '#f5722a',
    width: 172,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  font: {
    fontSize: 20.8,
    color: '#FFFFFF',
  },
});

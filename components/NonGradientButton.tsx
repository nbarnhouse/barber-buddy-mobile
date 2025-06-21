import { View, Text, StyleSheet, Pressable } from "react-native";
import globalStyles from "../styles/globalStyles";

type NonGradientButtonProps = {
  label: string;
  onPress: () => void;
  height: number;
  width: number;
};

export default function NonGradientButton({
  label,
  onPress,
  height,
  width,
}: NonGradientButtonProps) {
  return (
    <Pressable style={[styles.shape, { height, width }]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FC7B33",
    borderRadius: 10,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20.8,
  },
});

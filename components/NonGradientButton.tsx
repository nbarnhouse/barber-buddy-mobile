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
    <View style={styles.container}>
      <Pressable style={[styles.shape, { height, width }]} onPress={onPress}>
        <Text style={globalStyles.text}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F77127",
    borderRadius: 10,
  },
  shape: {
    justifyContent: "center",
    alignItems: "center",
  },
});

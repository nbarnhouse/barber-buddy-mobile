import { Slot, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await AsyncStorage.getItem("userToken");
      setIsAuthenticated(!!user);
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Slot screenOptions={{ headerShown: false }} />;
}

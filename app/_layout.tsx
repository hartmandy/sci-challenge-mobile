import "~/global.css";
import {
  Platform,
  Image,
  Pressable,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useColorScheme } from "../lib/useColorScheme";
import Home from "./home";
export { ErrorBoundary } from "expo-router";
import { SplashScreen } from "expo-router";
import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CardProvider } from "~/contexts/CardContext";

export default function RootLayout() {
  const { colorScheme, setColorScheme, toggleColorScheme, isDarkColorScheme } =
    useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);
  const iconColor = isDarkColorScheme ? "white" : "black";

  React.useEffect(() => {
    (async () => {
      const theme = await AsyncStorage.getItem("theme");
      if (Platform.OS === "web") {
        document.documentElement.classList.add("bg-background");
      }
      if (!theme) {
        AsyncStorage.setItem("theme", colorScheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      const colorTheme = theme === "dark" ? "dark" : "light";
      if (colorTheme !== colorScheme) {
        setColorScheme(colorTheme);

        setIsColorSchemeLoaded(true);
        return;
      }
      setIsColorSchemeLoaded(true);
    })().finally(() => {
      SplashScreen.hideAsync();
    });
  }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  return (
    <CardProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex flex-row items-center justify-between p-4 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-300 dark:border-zinc-800">
          <View className="w-6 h-6 p-4 rounded-full bg-white border dark:border-zinc-800 border-zinc-300 flex justify-center items-center">
            <Image
              source={require("../assets/images/ship.png")}
              style={styles.headerImage}
            />
          </View>
          <View>
            <Pressable onPress={toggleColorScheme}>
              <MaterialCommunityIcons
                name={isDarkColorScheme ? "weather-sunny" : "weather-night"}
                size={24}
                color={iconColor}
              />
            </Pressable>
          </View>
        </View>
        <Home />
      </SafeAreaView>
    </CardProvider>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});

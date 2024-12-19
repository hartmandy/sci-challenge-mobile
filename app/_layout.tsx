import "global.css";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, Image, Pressable, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useColorScheme } from "../lib/useColorScheme";
import CardSearch from "./card-search";
import SavedCards from "./saved-cards";

export { ErrorBoundary } from "expo-router";
const Tab = createBottomTabNavigator();

export default function RootLayout() {
  const { toggleColorScheme, isDarkColorScheme } = useColorScheme();
  const iconColor = isDarkColorScheme ? "white" : "black";

  return (
    <Tab.Navigator
      initialRouteName="card-search"
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: isDarkColorScheme ? "#000" : "#fff",
        },
        headerTitle: () => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 9999,
              backgroundColor: "white",
              padding: 8,
              borderWidth: 1,
              borderColor: "#D1D5DB",
            }}
          >
            <Image
              source={require("../assets/images/ship.png")}
              style={{ width: 20, height: 20, resizeMode: "contain" }}
            />
          </View>
        ),
        headerRight: () => (
          <Pressable onPress={toggleColorScheme} style={{ marginRight: 20 }}>
            <MaterialCommunityIcons
              name={isDarkColorScheme ? "weather-sunny" : "weather-night"}
              size={24}
              color={iconColor}
            />
          </Pressable>
        ),
        tabBarStyle: {
          ...Platform.select({
            ios: { position: "absolute" },
          }),
          backgroundColor: isDarkColorScheme ? "#000" : "#fff",
          borderTopWidth: 0,
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          shadowColor: "transparent",
        },
        tabBarActiveTintColor: isDarkColorScheme ? "white" : "black",
        tabBarInactiveTintColor: isDarkColorScheme ? "#888" : "#666",
      }}
    >
      <Tab.Screen
        name="card-search"
        component={CardSearch}
        options={{
          title: "Card Search",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="cards" size={24} color={iconColor} />
          ),
        }}
      />
      <Tab.Screen
        name="saved-cards"
        component={SavedCards}
        options={{
          title: "Saved Cards",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="cards-playing-heart-multiple"
              size={24}
              color={iconColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

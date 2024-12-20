import { View, type ViewProps } from "react-native";

import { useThemeColor } from "../hooks/useThemeColor";
import { useColorScheme } from "~/lib/useColorScheme";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const { isDarkColorScheme } = useColorScheme();
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <View
      style={[
        { backgroundColor: isDarkColorScheme ? "#000000" : "#ffffff" },
        style,
      ]}
      {...otherProps}
    />
  );
}

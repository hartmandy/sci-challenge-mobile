import React, { useState } from "react";
import { SortKey, SortOrder } from "../types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Option as RnOption } from "@rn-primitives/select";
import Button from "./Button";
import { View, TouchableOpacity, Animated } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Input } from "./ui/input";
import { useCardContext } from "~/contexts/CardContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useColorScheme } from "~/lib/useColorScheme";
import { ThemedText } from "./ThemedText";

export default function CardFilters() {
  const {
    options,
    setOrderBy,
    dir,
    setDir,
    setSearch,
    search,
    setHp,
    loading,
  } = useCardContext();

  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };
  const { isDarkColorScheme } = useColorScheme();
  const [isExpanded, setIsExpanded] = useState(true);
  const arrowRotation = new Animated.Value(isExpanded ? 0 : 1);

  const togglePanel = () => {
    Animated.timing(arrowRotation, {
      toValue: isExpanded ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsExpanded((prev) => !prev);
  };

  const rotateInterpolate = arrowRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const arrowStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  function sortCards(key: SortKey) {
    setOrderBy(key);
    const newDir: SortOrder = dir === "asc" ? "desc" : "asc";
    setDir(newDir);
  }

  function handleSelectHp(option: RnOption) {
    if (option?.value === "--") {
      setHp(null);
    }

    if (option?.value) {
      setHp(option?.value);
    } else {
      return;
    }
  }

  return (
    <View>
      <TouchableOpacity onPress={togglePanel} activeOpacity={0.8}>
        <View className="dark:bg-zinc-900 flex flex-row justify-between p-4 items-center border-b dark:border-zinc-800 border-zinc-300">
          <ThemedText>Filters</ThemedText>
          <Animated.View style={arrowStyle}>
            <MaterialIcons
              name="keyboard-arrow-up"
              size={24}
              color={isDarkColorScheme ? "#fff" : "#000"}
            />
          </Animated.View>
        </View>
      </TouchableOpacity>

      {isExpanded && (
        <View className="flex flex-col gap-4 w-full pb-8 p-4 border-b border-zinc-300 dark:border-zinc-800">
          <Input
            placeholder="Search for Card..."
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
          <Select onValueChange={handleSelectHp}>
            <SelectTrigger>
              <SelectValue
                className="text-foreground text-sm native:text-lg"
                placeholder="Select HP"
              />
            </SelectTrigger>
            <SelectContent insets={contentInsets}>
              {options.map((option) => (
                <SelectItem key={option} label={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <View className="grid grid-cols-2 gap-2">
            <Button onPress={() => sortCards("name")} disabled={loading}>
              Name
            </Button>
            <Button onPress={() => sortCards("setnumber")} disabled={loading}>
              Set
            </Button>
            <Button onPress={() => sortCards("cost")} disabled={loading}>
              Cost
            </Button>
            <Button onPress={() => sortCards("power")} disabled={loading}>
              Power
            </Button>
          </View>
        </View>
      )}
    </View>
  );
}

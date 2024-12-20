import React, { useState, useEffect } from "react";
import { Image, View, Text, Platform } from "react-native";
import { useColorScheme } from "../lib/useColorScheme";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type CardProps = {
  name: string;
  set: string;
  cost: number;
  power: number;
  hp: number;
  type: string;
  traits: string[];
  rarity: string;
  frontArt: string;
  fronttext: string;
  onPopoverChange?: (isOpen: boolean) => void;
};

export default function Card({
  name,
  set,
  cost,
  power,
  hp,
  type,
  traits,
  rarity,
  frontArt,
  fronttext,
  onPopoverChange,
}: CardProps) {
  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };
  const { isDarkColorScheme } = useColorScheme();

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    if (onPopoverChange) {
      onPopoverChange(isPopoverOpen);
    }
  }, [isPopoverOpen]);

  return (
    <View className="w-full rounded-2xl overflow-hidden border mb-2 dark:border-zinc-700 border-zinc-300">
      <Popover onOpenChange={(open) => setIsPopoverOpen(open)}>
        <PopoverTrigger asChild>
          <View className="w-full h-[500px] inset-0">
            <Image
              source={{ uri: frontArt }}
              style={{ flex: 1 }}
              resizeMode="cover"
              className="w-full h-full"
            />
          </View>
        </PopoverTrigger>
        <PopoverContent
          side={Platform.OS === "web" ? "bottom" : "bottom"}
          sideOffset={-200}
          align="center"
          insets={contentInsets}
          className="w-80"
        >
          <View className="p-4">
            <Text
              className={`text-xl font-bold mb-2 ${
                isDarkColorScheme ? "text-white" : "text-black"
              }`}
            >
              {name}
            </Text>
            <Text
              className={`text-gray-500 mb-2 ${
                isDarkColorScheme ? "text-gray-400" : "text-gray-600"
              }`}
            >
              C {cost} | PWR {power} | HP {hp}
            </Text>
            <Text
              className={`mb-2 ${
                isDarkColorScheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {fronttext}
            </Text>
            <View className="space-y-1">
              <Text
                className={`font-semibold ${
                  isDarkColorScheme ? "text-white" : "text-black"
                }`}
              >
                Set: {set}
              </Text>
              <Text
                className={`font-semibold ${
                  isDarkColorScheme ? "text-white" : "text-black"
                }`}
              >
                Type: {type}
              </Text>
              <Text
                className={`font-semibold ${
                  isDarkColorScheme ? "text-white" : "text-black"
                }`}
              >
                Rarity: {rarity}
              </Text>
              <Text
                className={`font-semibold ${
                  isDarkColorScheme ? "text-white" : "text-black"
                }`}
              >
                Traits: {traits?.join(", ")}
              </Text>
            </View>
          </View>
        </PopoverContent>
      </Popover>
    </View>
  );
}

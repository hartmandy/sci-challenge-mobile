import React, { useState } from "react";
import { Text, FlatList, Image } from "react-native";
import { useColorScheme } from "../lib/useColorScheme";
import CardComponent from "./Card";
import { ThemedView } from "./ThemedView";
import { useCardContext } from "~/contexts/CardContext";
import CardLoader from "./CardLoader";

export default function CardList() {
  const { cards, loading, error } = useCardContext();
  const [isScrollEnabled, setIsScrollEnabled] = useState(true);
  const { isDarkColorScheme } = useColorScheme();
  const textColor = isDarkColorScheme ? "text-white" : "text-black";

  const handlePopoverChange = (isOpen: boolean) => {
    setIsScrollEnabled(!isOpen);
  };

  if (loading) {
    return <CardLoader />;
  }

  if (error) {
    return (
      <ThemedView>
        <Text className="text-red-500 text-lg font-semibold">
          Error: {error}
        </Text>
      </ThemedView>
    );
  }

  if (!loading && !error && cards.length === 0) {
    return (
      <ThemedView className="items-center mt-8">
        <Image
          source={require("../assets/images/grogu.png")}
          style={{ width: 200, height: 230 }}
        />
        <Text className={`text-lg font-semibold mt-4 ${textColor}`}>
          No results. Search again.
        </Text>
      </ThemedView>
    );
  }

  return (
    <ThemedView className="flex-1">
      <FlatList
        className="p-4 flex gap-2 flex-col"
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardComponent
            key={item.id}
            {...item}
            onPopoverChange={handlePopoverChange}
          />
        )}
        scrollEnabled={isScrollEnabled}
      />
    </ThemedView>
  );
}

import React from "react";
import { View } from "react-native";

const CardLoader = () => {
  const cards = Array(4).fill(0);

  return (
    <View className="fixed inset-0 flex items-center justify-center mt-[200px]">
      <View className="flex flex-row">
        {cards.map((_, index) => {
          const rotation = index % 2 === 0 ? "-3deg" : "3deg";
          return (
            <View
              key={index}
              style={{
                transform: [{ rotate: rotation }],
              }}
            >
              <View
                className="top-0 left-0 w-16 h-24 bg-accent rounded-md shadow-2xl opacity-0 animate-shadow border dark:border-zinc-700 border-zinc-300"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default CardLoader;

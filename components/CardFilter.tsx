import React from "react";
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
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Input } from "./ui/input";
import { useCardContext } from "~/contexts/CardContext";

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
  );
}

import { ThemedView } from "../components/ThemedView";
import CardList from "../components/CardList";
import CardFilters from "~/components/CardFilter";
import { SafeAreaView } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        <CardFilters />
        <CardList />
      </ThemedView>
    </SafeAreaView>
  );
}

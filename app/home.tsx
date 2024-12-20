import { ThemedView } from "../components/ThemedView";
import CardList from "../components/CardList";
import CardFilters from "~/components/CardFilter";

export default function HomeScreen() {
  return (
    <>
      <ThemedView className="h-full">
        <CardFilters />
        <CardList />
      </ThemedView>
    </>
  );
}

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { fetchCatalog, searchCards } from "~/api/api";
import { CardData, Card, SortKey, SortOrder } from "~/types";

type CardContextType = {
  cards: Card[];
  options: string[];
  loading: boolean;
  error: null | string;
  hp: string | null;
  setHp: (hp: string | null) => void;
  search: string;
  setSearch: (search: string) => void;
  orderBy: SortKey;
  setOrderBy: (orderBy: SortKey) => void;
  dir: SortOrder;
  setDir: (dir: SortOrder) => void;
};

const CardContext = createContext<CardContextType | null>(null);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const [hp, setHp] = useState<string | null>("5");
  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState<SortKey>("name");
  const [dir, setDir] = useState<SortOrder>("asc");
  const [cards, setCards] = useState<Card[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCards = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await searchCards(hp, search, orderBy, dir);
      const formattedCards = Array.isArray(result.data)
        ? result.data.map((card: CardData) => ({
            set: card.Set,
            number: card.Number,
            name: card.Name,
            type: card.Type,
            aspects: card.Aspects,
            traits: card.Traits,
            arenas: card.Arenas,
            cost: card.Cost,
            power: card.Power,
            hp: card.HP,
            fronttext: card.FrontText,
            doublesided: card.DoubleSided,
            rarity: card.Rarity,
            unique: card.Unique,
            artist: card.Artist,
            varianttype: card.VariantType,
            marketprice: card.MarketPrice,
            foilprice: card.FoilPrice,
            frontArt: card.FrontArt,
            id: `${card.Set}-${card.Number}`,
          }))
        : [];
      setCards(formattedCards);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setCards([]);
    } finally {
      setLoading(false);
    }
  }, [hp, search, orderBy, dir]);

  const fetchOptions = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchCatalog();
      setOptions(result.data || []);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOptions();
  }, [fetchOptions]);

  useEffect(() => {
    if (hp || search) {
      fetchCards();
    }
  }, [hp, search, orderBy, dir, fetchCards]);

  const contextValue = useMemo(
    () => ({
      cards,
      options,
      loading,
      error,
      hp,
      setHp,
      search,
      setSearch,
      orderBy,
      setOrderBy,
      dir,
      setDir,
    }),
    [cards, options, loading, error, hp, search, orderBy, dir]
  );

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};

export type Card = {
  set: string;
  number: string;
  name: string;
  type: string;
  aspects: string[];
  traits: string[];
  arenas: string[];
  cost: number;
  power: number;
  hp: number;
  fronttext: string;
  doublesided: boolean;
  rarity: string;
  unique: boolean;
  artist: string;
  varianttype: string;
  marketprice: string;
  foilprice: string;
  frontArt: string;
  id: string;
};

export type CardData = {
  Set: string;
  Number: string;
  Name: string;
  Type: string;
  Aspects: any;
  Traits: any;
  Arenas: any;
  Cost: number;
  Power: number;
  HP: number;
  FrontText: string;
  DoubleSided: boolean;
  Rarity: string;
  Unique: boolean;
  Artist: string;
  VariantType: string;
  MarketPrice: number;
  FoilPrice: number;
  FrontArt: string;
  Id: string;
};

export type SortKey = "name" | "setnumber" | "cost" | "power";

export type SortOrder = "asc" | "desc";

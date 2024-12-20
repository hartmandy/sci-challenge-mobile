import axios from "axios";
import { SortOrder, SortKey } from "~/types";
const BASE_URL = "http://localhost:8010/proxy"; // local-cors-proxy base URL

export const fetchCatalog = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/catalog/hps`);
    console.log("Catalog response:", response.data); // Debug log
    return response.data;
  } catch (error) {
    console.error("Catalog fetch error:", error);
    throw new Error("Failed to fetch catalog data");
  }
};

export const searchCards = async (
  hp: string | null,
  search: string,
  orderBy: SortKey,
  dir: SortOrder
) => {
  try {
    const query = [hp ? `h=${hp}` : "", search ? search : ""]
      .filter(Boolean)
      .join(" ");

    const response = await axios.get(`${BASE_URL}/cards/search`, {
      params: {
        q: query,
        dir,
        orderBy,
        pretty: true,
      },
    });
    console.log("Search response:", response.data); // Debug log
    return response.data;
  } catch (error) {
    console.error("Search error:", error);
    throw new Error("Failed to fetch card data");
  }
};

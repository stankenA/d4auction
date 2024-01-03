import { type TInventoryItem } from "@/components/InventoryItem/types";

export const initialInventoryA: { item: TInventoryItem }[] = [
  {
    item: {
      id: 1,
      title: "The Grandfather",
      img: "https://wow.zamimg.com/d4/texture/hash/6/2952066822.webp",
      description: "Ancestral Unique Two-Handed Sword",
    },
  },
  {
    item: {
      id: 2,
      title: "Doombringer",
      img: "https://wow.zamimg.com/d4/texture/hash/12/2397813516.webp",
      description: "Ancestral Unique Sword",
    },
  },
];

export const initialInventoryB: { item: TInventoryItem }[] = [
  {
    item: {
      id: 3,
      title: "Melted Heart of Selig",
      img: "https://wow.zamimg.com/d4/texture/hash/111/2403703919.webp",
      description: "Ancestral Unique Amulet",
    },
  },
];

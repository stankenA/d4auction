import { type TInventoryItem } from "@/components/InventoryItem/types";

export const initialInventoryA: { item: TInventoryItem }[] = [
  {
    item: {
      id: 1,
      title: "The Grandfather",
      img: "https://wow.zamimg.com/d4/texture/hash/6/2952066822.webp",
      description: "An unbroken lineage of unwavering strength.",
    },
  },
  {
    item: {
      id: 2,
      title: "Doombringer",
      img: "https://wow.zamimg.com/d4/texture/hash/12/2397813516.webp",
      description:
        "Whenever this ancient sword has reappeared throughout history, it portends a time of great strife, as well as a devastating loss of life.",
    },
  },
  {
    item: {
      id: 3,
      title: "Distilled Fear",
      img: "https://wow.zamimg.com/d4/texture/hash/173/3252499629.webp",
      description:
        "An ink that reflects no light. You find yourself acutely aware of your own mortality.",
    },
  },
  {
    item: {
      id: 4,
      title: "Hellhammer",
      img: "https://wow.zamimg.com/d4/texture/hash/72/2591328072.webp",
      description:
        "The demon prince Ikonoth slew hundreds of the Heavenly Host with this infernal hammer before falling to none other than the Archangel Imperius himself.",
    },
  },
];

export const initialInventoryB: { item: TInventoryItem }[] = [
  {
    item: {
      id: 5,
      title: "Melted Heart of Selig",
      img: "https://wow.zamimg.com/d4/texture/hash/111/2403703919.webp",
      description:
        "Do not allow your passions to become obsessions. Fuel the fire that burns within you, but it is madness to allow yourself to become ash to please an uncaring universe.",
    },
  },
];

import { type Id } from "@/types/types";

export type InventoryItem = {
  id: Id;
  inventoryId: Id;
  content: string;
};

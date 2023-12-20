import { type Id } from "@/types/types";

export type TInventoryItem = {
  id: Id;
  inventoryId: Id;
  content: string;
  parentId?: Id;
};

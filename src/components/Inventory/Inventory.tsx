import React, {
  useState,
  type FC,
  type Dispatch,
  type SetStateAction,
} from "react";
import InventoryCell from "../InventoryCell/InventoryCell";
import { type TInventoryItem } from "../InventoryItem/types";
import InventoryItem from "../InventoryItem/InventoryItem";
import { type Id } from "@/types/types";

type Inventory = {
  items: TInventoryItem[];
  inventoryId: Id;
  parent: Id | null;
  setParent?: Dispatch<SetStateAction<Id | null>>;
};

const Inventory: FC<Inventory> = ({ items, inventoryId, parent }) => {
  const parentCells = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

  return (
    <ul className="grid w-[790px]  grid-cols-inventoryCols grid-rows-inventoryRows">
      {parent === null ? (
        <InventoryCell key={1} id={"A1" + inventoryId}>
          <InventoryItem item={items[0]!} />
        </InventoryCell>
      ) : null}
      {parentCells.map((id) => (
        <InventoryCell key={id + inventoryId} id={id + inventoryId}>
          {parent === id + inventoryId ? (
            <InventoryItem item={{ ...items[0]!, parentId: id }} />
          ) : null}
        </InventoryCell>
      ))}
    </ul>
  );
};

export default Inventory;

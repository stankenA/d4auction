import React, { type FC, type Dispatch, type SetStateAction } from "react";
import { type TInventoryItem } from "../InventoryItem/types";
import { type Id } from "@/types/types";
import { type TInventoryArr } from "../pageComponents/MainPage";
import InventoryCell from "../InventoryCell/InventoryCell";
import InventoryItem from "../InventoryItem/InventoryItem";

type Inventory = {
  items: TInventoryArr;
  inventoryId: Id;
  parentCellId: Id | null;
  setParentCellId?: Dispatch<SetStateAction<Id | null>>;
};

const Inventory: FC<Inventory> = ({ items, inventoryId }) => {
  return (
    <ul className="grid w-[790px] grid-cols-inventoryCols grid-rows-inventoryRows">
      {items.map((item, i) => (
        <InventoryCell inventoryId={inventoryId} index={i} key={i}>
          {item.item ? <InventoryItem item={item.item} /> : null}
        </InventoryCell>
      ))}
    </ul>
  );
};

export default Inventory;

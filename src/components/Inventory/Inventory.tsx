import React, { type FC } from "react";
import InventoryCell from "../InventoryCell/InventoryCell";
import { type TInventoryItem } from "../InventoryItem/types";
import InventoryItem from "../InventoryItem/InventoryItem";
import { SortableContext } from "@dnd-kit/sortable";

type Inventory = {
  items: TInventoryItem[];
};

const Inventory: FC<Inventory> = ({ items }) => {
  const droppableArr = ["A", "B", "C", "D", "E"];
  const itemsIds = items.map((item) => item.id);

  return (
    <ul className="grid w-[790px]  grid-cols-inventoryCols grid-rows-inventoryRows">
      <SortableContext items={itemsIds}>
        {droppableArr.map((id, i) => (
          <InventoryCell key={id} id={id}>
            {items
              .filter((_, index) => index === i)
              .map((item) => (
                <InventoryItem item={item} />
              ))}
          </InventoryCell>
        ))}
      </SortableContext>
    </ul>
  );
};

export default Inventory;

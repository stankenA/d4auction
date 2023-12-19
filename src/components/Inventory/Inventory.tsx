import React, { type FC } from "react";
import InventoryCell from "../InventoryCell/InventoryCell";

const Inventory: FC = () => {
  const droppableArr = ["A", "B", "C", "D", "E"];

  return (
    <ul className="grid w-[790px]  grid-cols-inventoryCols grid-rows-inventoryRows">
      {droppableArr.map((id, i) => (
        <InventoryCell key={id} id={id}></InventoryCell>
      ))}
    </ul>
  );
};

export default Inventory;

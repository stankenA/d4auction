import React, { useEffect, type FC, useState } from "react";
import { items } from "@/items/items";

const Inventory: FC = () => {
  const [emptyItems, setEmptyItems] = useState<null[]>([]);

  useEffect(() => {
    const emptyArr = new Array(32 - items.length).fill(null);
    setEmptyItems(emptyArr);
  }, []);

  return (
    <ul className="grid w-[790px]  grid-cols-inventoryCols grid-rows-inventoryRows">
      {items.map((item) => (
        <li
          className="h-[99px] w-[70px] border-[1px] border-solid border-borderColor"
          key={item.id}
        >
          <div className="h-full w-full bg-grey"></div>
        </li>
      ))}
      <li className="h-[99px] w-[70px] border-[1px] border-solid border-borderColor">
        <div className="h-full w-full bg-grey"></div>
      </li>
      {emptyItems.map((_, index) => (
        <li
          className="h-[99px] w-[70px] border-[1px] border-solid border-borderColor"
          key={index}
        ></li>
      ))}
    </ul>
  );
};

export default Inventory;

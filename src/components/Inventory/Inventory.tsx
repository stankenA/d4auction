import React, { type FC } from "react";

const Inventory: FC = () => {
  const arr = new Array(31).fill(null);

  return (
    <ul className="grid-rows-inventoryRows grid-cols-inventoryCols  grid w-[790px]">
      <li className="border-borderColor h-[99px] w-[70px] border-[1px] border-solid">
        <div className="bg-grey h-full w-full"></div>
      </li>
      <li className="border-borderColor h-[99px] w-[70px] border-[1px] border-solid">
        <div className="bg-grey h-full w-full"></div>
      </li>
      {arr.map(() => (
        <li className="border-borderColor h-[99px] w-[70px] border-[1px] border-solid"></li>
      ))}
    </ul>
  );
};

export default Inventory;

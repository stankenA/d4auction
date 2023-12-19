import { useState, type FC } from "react";
import Inventory from "../Inventory/Inventory";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { type InventoryItem } from "../InventoryItem/types";

const MainPage: FC = () => {
  const inventoriesId = ["A", "B"];
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);

  return (
    <DndContext>
      <main className="flex min-h-screen w-full flex-col items-center justify-center gap-[50px] bg-black font-sans text-white">
        <SortableContext items={inventoriesId}>
          {inventoriesId.map((id) => (
            <Inventory key={id} />
          ))}
        </SortableContext>
      </main>
    </DndContext>
  );
};

export default MainPage;

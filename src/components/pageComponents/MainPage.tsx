import { useState, type FC } from "react";
import Inventory from "../Inventory/Inventory";
import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
} from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { type TInventoryItem } from "../InventoryItem/types";
import InventoryItem from "../InventoryItem/InventoryItem";
import { Portal } from "../Portal/Portal";
import { type Id } from "@/types/types";

const MainPage: FC = () => {
  const inventoriesId = ["A", "B"];
  const [parent, setParent] = useState<Id | null>(null);
  const [activeItem, setActiveItem] = useState<TInventoryItem | null>(null);
  const [inventoryItems, setInventoryItems] = useState<TInventoryItem[]>([
    {
      id: 1,
      inventoryId: "A",
      content: "bruh",
    },
    {
      id: 2,
      inventoryId: "A",
      content: "bruh",
    },
    {
      id: 3,
      inventoryId: "B",
      content: "bruh",
    },
  ]);

  function startDrag(evt: DragStartEvent) {
    if (evt.active.data.current?.type === "Item") {
      setActiveItem(evt.active.data.current.item as TInventoryItem);
    }
  }

  function handleDragEnd(evt: DragEndEvent) {
    if (evt.over) {
      setParent(evt.over.id);
    }
  }

  return (
    <DndContext onDragStart={startDrag} onDragEnd={handleDragEnd}>
      <main className="flex min-h-screen w-full flex-col items-center justify-center gap-[50px] bg-black font-sans text-white">
        {inventoriesId.map((id) => (
          <Inventory
            key={id}
            inventoryId={id}
            items={inventoryItems.filter((item) => item.inventoryId === id)}
            parent={parent}
            setParent={setParent}
          />
        ))}
      </main>

      <Portal>
        <DragOverlay>
          {activeItem && <InventoryItem item={activeItem} />}
        </DragOverlay>
      </Portal>
    </DndContext>
  );
};

export default MainPage;

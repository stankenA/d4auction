import { useState, type FC } from "react";
import Inventory from "../Inventory/Inventory";
import { DndContext, DragOverlay, type DragStartEvent } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { type TInventoryItem } from "../InventoryItem/types";
import { createPortal } from "react-dom";
import InventoryItem from "../InventoryItem/InventoryItem";
import { Portal } from "../Portal/Portal";

const MainPage: FC = () => {
  const inventoriesId = ["A", "B"];
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

  return (
    <DndContext onDragStart={startDrag}>
      <main className="flex min-h-screen w-full flex-col items-center justify-center gap-[50px] bg-black font-sans text-white">
        <SortableContext items={inventoriesId}>
          {inventoriesId.map((id) => (
            <Inventory
              key={id}
              items={inventoryItems.filter((item) => item.inventoryId === id)}
            />
          ))}
        </SortableContext>
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

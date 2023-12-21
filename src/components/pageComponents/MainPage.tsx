import { useState, type FC } from "react";
import Inventory from "../Inventory/Inventory";
import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
} from "@dnd-kit/core";
import { type TInventoryItem } from "../InventoryItem/types";
import { type Id } from "@/types/types";
import { createArrayOfEmptyItems } from "@/utils/createArray";

export type TInventoryArr = Array<{ item: TInventoryItem | null }>;

const MainPage: FC = () => {
  const inventoriesId = ["A", "B"];

  const [inventoryA, setInventoryA] = useState<TInventoryArr>(
    createArrayOfEmptyItems(33),
  );
  const [inventoryB, setInventoryB] = useState<TInventoryArr>(
    createArrayOfEmptyItems(33),
  );

  const [parentCellId, setParentCellId] = useState<Id | null>(null);
  const [activeItem, setActiveItem] = useState<TInventoryItem | null>(null);

  // function handleDragStart(evt: DragStartEvent) {
  //   if (evt.active.data.current?.type === "Item") {
  //     setActiveItem(evt.active.data.current.item as TInventoryItem);
  //   }
  // }

  function handleDragEnd(evt: DragEndEvent) {
    if (evt.over) {
      setParentCellId(evt.over.id);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <main className="flex min-h-screen w-full flex-col items-center justify-center gap-[50px] bg-black font-sans text-white">
        {inventoriesId.map((id) => (
          <Inventory
            key={id}
            inventoryId={id}
            items={id === "A" ? inventoryA : inventoryB}
            parentCellId={parentCellId}
            setParentCellId={setParentCellId}
          />
        ))}
      </main>

      {/* <Portal>
        <DragOverlay>
          {activeItem && <InventoryItem item={activeItem} />}
        </DragOverlay>
      </Portal> */}
    </DndContext>
  );
};

export default MainPage;

import {
  useState,
  type FC,
  useEffect,
  type SetStateAction,
  type Dispatch,
} from "react";
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
import { initialInventoryA, initialInventoryB } from "@/items/items";
import InventoryItem from "../InventoryItem/InventoryItem";

export type TInventoryArr = Array<{ item: TInventoryItem | null }>;

type EvtOverData = {
  item: TInventoryItem;
  inventoryId: Id;
  index: number;
};

type EvtActiveData = {
  inventoryId: Id;
  index: number;
};

const MainPage: FC = () => {
  const inventoriesId = ["A", "B"];

  const [inventoryA, setInventoryA] = useState<TInventoryArr>(
    createArrayOfEmptyItems(33),
  );
  const [inventoryB, setInventoryB] = useState<TInventoryArr>(
    createArrayOfEmptyItems(33),
  );

  const [activeItem, setActiveItem] = useState<TInventoryItem | null>(null);

  function swapElementsInsideArray(
    prevIndex: number,
    newIndex: number,
    array: TInventoryArr,
  ) {
    [array[prevIndex], array[newIndex]] = [array[newIndex]!, array[prevIndex]!];
    return [...array];
  }

  function swapElementsBetweenArrays(
    indexA: number,
    indexB: number,
    arrayA: TInventoryArr,
    arrayB: TInventoryArr,
  ) {
    const temp = arrayA[indexA]!;
    arrayA[indexA] = arrayB[indexB]!;
    arrayB[indexB] = temp;

    return [[...arrayA], [...arrayB]];
  }

  function handleDragEnd(evt: DragEndEvent) {
    if (!evt.over) return;

    const overCellData = evt.over.data.current as EvtOverData;
    const activeItemData = evt.active.data.current as EvtActiveData;

    if (overCellData.inventoryId === activeItemData.inventoryId) {
      const newArr = swapElementsInsideArray(
        overCellData.index,
        activeItemData.index,
        overCellData.inventoryId === "A" ? inventoryA : inventoryB,
      );

      overCellData.inventoryId === "A"
        ? setInventoryA(newArr)
        : setInventoryB(newArr);
    } else {
      if (overCellData.inventoryId === "B") {
        const [arrayA, arrayB] = swapElementsBetweenArrays(
          activeItemData.index,
          overCellData.index,
          inventoryA,
          inventoryB,
        );

        setInventoryA(arrayA!);
        setInventoryB(arrayB!);
      } else {
        const [arrayB, arrayA] = swapElementsBetweenArrays(
          activeItemData.index,
          overCellData.index,
          inventoryB,
          inventoryA,
        );

        setInventoryA(arrayA!);
        setInventoryB(arrayB!);
      }
    }
  }

  function handleDragStart(evt: DragStartEvent) {
    if (evt.active.data.current) {
      setActiveItem(evt.active.data.current.item as TInventoryItem);
    }
  }

  useEffect(() => {
    setInventoryA([
      ...initialInventoryA,
      ...inventoryA.slice(0, inventoryA.length - initialInventoryA.length),
    ]);

    setInventoryB([
      ...initialInventoryB,
      ...inventoryB.slice(0, inventoryB.length - initialInventoryB.length),
    ]);
  }, []);

  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <main className="flex min-h-screen w-full flex-col items-center justify-center gap-[50px] bg-black font-sans text-white">
        {inventoriesId.map((id) => (
          <Inventory
            key={id}
            inventoryId={id}
            items={id === "A" ? inventoryA : inventoryB}
          />
        ))}
      </main>

      <DragOverlay>
        {activeItem && (
          <InventoryItem item={activeItem} isHoverActive={false} />
        )}
      </DragOverlay>
    </DndContext>
  );
};

export default MainPage;

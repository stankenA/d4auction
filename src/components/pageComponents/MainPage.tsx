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

export type TInventoryArr = Array<{ item: TInventoryItem | null }>;

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
    [array[prevIndex], array[newIndex]] = [array[newIndex], array[prevIndex]];
    return array.slice();
  }

  function swapElementsBetweenArrays(
    index1: number,
    index2: number,
    array1: TInventoryArr,
    array2: TInventoryArr,
    setArray1: Dispatch<SetStateAction<TInventoryArr>>,
    setArray2: Dispatch<SetStateAction<TInventoryArr>>,
  ) {
    const temp = array1[index1];
    array1[index1] = array2[index2];
    array2[index2] = temp;

    setArray1(array1.slice());
    setArray2(array2.slice());
  }

  function handleDragEnd(evt: DragEndEvent) {
    if (!evt.over) return;

    const overCellData = evt.over.data.current!;
    const activeItemData = evt.active.data.current!;

    if (overCellData.inventoryId === activeItemData.inventoryId) {
      const newArr = swapElementsInsideArray(
        overCellData.index as number,
        activeItemData.index as number,
        overCellData.inventoryId === "A" ? inventoryA : inventoryB,
      );

      overCellData.inventoryId === "A"
        ? setInventoryA(newArr)
        : setInventoryB(newArr);
    } else {
      if (overCellData.inventoryId === "B") {
        swapElementsBetweenArrays(
          activeItemData.index as number,
          overCellData.index as number,
          inventoryA,
          inventoryB,
          setInventoryA,
          setInventoryB,
        );
      } else {
        swapElementsBetweenArrays(
          activeItemData.index as number,
          overCellData.index as number,
          inventoryB,
          inventoryA,
          setInventoryB,
          setInventoryA,
        );
      }
    }
  }

  // function handleDragStart(evt: DragStartEvent) {
  //   if (evt.active.data.current?.type === "Item") {
  //     setActiveItem(evt.active.data.current.item as TInventoryItem);
  //   }
  // }

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
    <DndContext onDragEnd={handleDragEnd}>
      <main className="flex min-h-screen w-full flex-col items-center justify-center gap-[50px] bg-black font-sans text-white">
        {inventoriesId.map((id) => (
          <Inventory
            key={id}
            inventoryId={id}
            items={id === "A" ? inventoryA : inventoryB}
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

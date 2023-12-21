import React, {
  type CSSProperties,
  type FC,
  type PropsWithChildren,
} from "react";
import { type TInventoryItem } from "./types";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable } from "@dnd-kit/core";
import { type Id } from "@/types/types";

type InventoryItemProps = PropsWithChildren & {
  item: TInventoryItem;
  index: number;
  inventoryId: Id;
};

const InventoryItem: FC<InventoryItemProps> = ({
  children,
  item,
  index,
  inventoryId,
}) => {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id: item.id,
    data: {
      item,
      inventoryId,
      index,
    },
  });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="h-full w-full bg-grey"
    >
      {item.id}
      {children}
    </div>
  );
};

export default InventoryItem;

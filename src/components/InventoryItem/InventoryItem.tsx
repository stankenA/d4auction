import React, {
  type CSSProperties,
  type FC,
  type PropsWithChildren,
} from "react";
import { type TInventoryItem } from "./types";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable } from "@dnd-kit/core";

type InventoryItemProps = PropsWithChildren & {
  item: TInventoryItem;
};

const InventoryItem: FC<InventoryItemProps> = ({ children, item }) => {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id: item.id,
    data: {
      type: "Item",
      item,
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

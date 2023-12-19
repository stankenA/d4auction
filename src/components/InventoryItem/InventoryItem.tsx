import React, {
  type CSSProperties,
  type FC,
  type PropsWithChildren,
} from "react";
import { type TInventoryItem } from "./types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type InventoryItemProps = PropsWithChildren & {
  item: TInventoryItem;
};

const InventoryItem: FC<InventoryItemProps> = ({ children, item }) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: item.id,
    data: {
      type: "Item",
      item: item,
    },
  });

  const style: CSSProperties = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="h-full w-full bg-grey opacity-80"
      >
        {item.id}
        {children}
      </div>
    );
  }

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

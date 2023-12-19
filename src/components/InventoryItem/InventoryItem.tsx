import { useDraggable } from "@dnd-kit/core";
import React, { type FC, type PropsWithChildren } from "react";

type InventoryItemProps = PropsWithChildren & {
  id: string;
};

const InventoryItem: FC<InventoryItemProps> = ({ children, id }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="h-full w-full bg-grey"
    ></div>
  );
};

export default InventoryItem;

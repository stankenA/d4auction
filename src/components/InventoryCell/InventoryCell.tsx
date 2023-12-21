import { type Id } from "@/types/types";
import { useDroppable } from "@dnd-kit/core";
import React, {
  type PropsWithChildren,
  type FC,
  type CSSProperties,
  useId,
} from "react";

type InventoryCellProps = PropsWithChildren & {
  inventoryId: Id;
  index: number;
};

const InventoryCell: FC<InventoryCellProps> = ({
  children,
  inventoryId,
  index,
}) => {
  const cellId = useId();

  const { isOver, setNodeRef } = useDroppable({
    id: cellId,
    data: {
      inventoryId,
      index,
    },
  });

  const style: CSSProperties = {
    backgroundColor: isOver ? "#87878766" : undefined,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="h-[99px] w-[70px] border-[1px] border-solid border-borderColor"
    >
      {children}
    </li>
  );
};

export default InventoryCell;

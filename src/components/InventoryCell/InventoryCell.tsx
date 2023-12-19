import { useDroppable } from "@dnd-kit/core";
import React, {
  type PropsWithChildren,
  type FC,
  type CSSProperties,
} from "react";

type InventoryCellProps = PropsWithChildren & {
  id: string;
};

const InventoryCell: FC<InventoryCellProps> = ({ children, id }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
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

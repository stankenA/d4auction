import React, {
  type CSSProperties,
  type FC,
  type PropsWithChildren,
} from "react";
import { type TInventoryItem } from "./types";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable } from "@dnd-kit/core";
import { type Id } from "@/types/types";
import Image from "next/image";
import clsx from "clsx";

type InventoryItemProps = PropsWithChildren & {
  item: TInventoryItem;
  index?: number;
  inventoryId?: Id;
  isHoverActive?: boolean;
};

const InventoryItem: FC<InventoryItemProps> = ({
  children,
  item,
  index,
  inventoryId,
  isHoverActive = true,
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
      className="group relative h-full w-full"
    >
      <Image src={item.img} fill alt={item.description} />
      <div
        className={clsx(
          "invisible absolute bottom-[70%] left-[110%] z-10 flex w-[200px] flex-col justify-between gap-5 bg-slate-700 p-2 opacity-0 transition-all",
          isHoverActive && "group-hover:visible group-hover:opacity-100",
        )}
      >
        <h3 className="text-l font-sans text-white">{item.title}</h3>
        <p className="text-sm text-white">{item.description}</p>
      </div>
    </div>
  );
};

export default InventoryItem;

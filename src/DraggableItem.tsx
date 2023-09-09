import React, { CSSProperties } from "react";
import { useDraggable } from "@dnd-kit/core";

export const DraggableItem = ({ id, type, title }: any) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging
  } = useDraggable({
    id: id,
    data: {
      id,
      type: "type1",
      title
    }
  });

  const style: CSSProperties | undefined = isDragging
    ? {
        position: "absolute",
        transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
        cursor: "move"
      }
    : {
        cursor: "pointer"
      };

  return (
    <>
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {title}
      </div>
      {isDragging && <div style={{ display: "none !important" }}>{title}</div>}
    </>
  );
};

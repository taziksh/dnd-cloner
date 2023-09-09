import React from "react";
import { useDroppable } from "@dnd-kit/core";

export const DroppableArea = (props: any) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
    data: {
      accepts: ["type1"]
    }
  });

  const style = {
    color: isOver ? "green" : undefined,
    display: "block",
    height: "100%"
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
};

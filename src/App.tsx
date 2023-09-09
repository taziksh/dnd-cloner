import "./styles.css";
import { toolItems } from "./types";
import { DraggableItem } from "./DraggableItem";
import { DndContext } from "@dnd-kit/core";
import { DroppableArea } from "./DroppableArea";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function App() {
  const [elements, setElements] = useState([]);

  const renderElement = () => {
    return elements.map((element, index) => {
      return <div key={index}>{element.title}</div>;
    });
  };

  function handleDragEnd(event: any) {
    const over = event.over;
    const active = event.active;
    // console.log(event);
    if (over?.data.current.accepts.includes(active.data.current.type)) {
      let newElements: any = [...elements, ...[event.active.data.current]];
      setElements(newElements);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="body">
        <div className="sideBar">
          {toolItems.map((tool) => (
            <DraggableItem key={tool.id} {...tool} />
          ))}
        </div>

        <div className="pageContainer">
          <div className="page">
            <DroppableArea id={`droppable-${nanoid(11)}`}>
              {renderElement()}
            </DroppableArea>
          </div>
        </div>
      </div>
    </DndContext>
  );
}

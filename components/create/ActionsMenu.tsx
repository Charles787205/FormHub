import { useState, useEffect } from "react";

const ActionsMenu = ({
  show,
  showAddComponentModal,
  removeComponent,
  component_id,
}: {
  show: boolean;
  showAddComponentModal: () => void;
  removeComponent: () => void;
  component_id: string;
}) => {
  const [isDragged, setIsDragged] = useState(false);

  return (
    <div
      className={`flex gap-1 absolute -left-[80px]  top-1/2 -translate-y-1/2 bg-white items-center ${
        !show ? "invisible" : "visible"
      }`}
    >
      <button className="flex items-center" onClick={() => removeComponent()}>
        <span className="material-symbols-outlined">delete</span>
      </button>
      <button
        className="flex items-center"
        onClick={() => {
          showAddComponentModal();
        }}
      >
        <span className="material-symbols-outlined">add</span>
      </button>
      <button
        className="flex items-center"
        draggable={true}
        onDrag={(e) => {
          setIsDragged(true);
        }}
        onDragStart={(e) => {
          e.dataTransfer.setDragImage(
            document.getElementById(component_id) as HTMLElement,
            0,
            0
          );

          e.dataTransfer.setData("component_id", component_id);
          e.dataTransfer.dropEffect = "move";
          e.dataTransfer.effectAllowed = "move";
        }}
        onDragEnd={(e) => {
          setIsDragged(false);

          e.preventDefault();
        }}
      >
        <span className="material-symbols-outlined">drag_indicator</span>
      </button>
    </div>
  );
};

export default ActionsMenu;

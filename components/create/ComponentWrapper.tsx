import ActionsMenu from "./ActionsMenu";
import { useState } from "react";
import { Component } from "@/types/types";
import AddComponentModal from "./modal/AddComponentModal";
/**
 *
 * @returns The wrapped component
 * Handles other functionality like dragging and showing of action menu of the component
 *
 */
const ComponentWrapper = ({
  children,
  addComponent,
  removeComponent,
  component,
  updateDraggedLayout,
}: {
  children: React.ReactNode;
  addComponent: (component: string) => void;
  removeComponent: (component: Component) => void;
  component: Component;
  updateDraggedLayout: (
    component: Component,
    dragged_component_id: string,
    dragPos: "t" | "l" | "b" | "r"
  ) => void;
}) => {
  const [showActionMenu, setShowActionMenu] = useState(false);
  const [showAddComponentModal, setShowAddComponentModal] = useState(false);
  const [isDragOver, setIsDraggedOver] = useState(false);
  const [dragPos, setDragPos] = useState<"t" | "l" | "b" | "r">("t");

  function handleDrop(component_id: string) {
    updateDraggedLayout(component, component_id, dragPos);
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const boundingRect = (e.target as HTMLElement).getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    var newPosition = dragPos;
    if (
      mouseX > boundingRect.left + boundingRect.width / 2 &&
      mouseX < boundingRect.right + boundingRect.width / 4
    ) {
      newPosition = "r";
    } else if (mouseX < boundingRect.left + boundingRect.width / 4) {
      newPosition = "l";
    } else if (mouseY > boundingRect.top + boundingRect.height / 2) {
      newPosition = "b";
    } else {
      newPosition = "t";
    }
    if (dragPos !== newPosition) {
      setDragPos(newPosition);
    }
    setIsDraggedOver(true);
  }
  return (
    <>
      <div
        className="flex justify-start  gap-2 text-neutral-400  relative  min-h-[34px] "
        onMouseEnter={() => {
          setShowActionMenu(true);
        }}
        onMouseLeave={() => {
          setShowActionMenu(false);
        }}
        onDragEnter={(e) => {
          e.preventDefault();
          setIsDraggedOver(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setIsDraggedOver(false);
        }}
        onDragOver={handleDragOver}
        onDrop={(e) => {
          e.preventDefault();
          const component_id = e.dataTransfer.getData("component_id");
          handleDrop(component_id);
          setIsDraggedOver(false);
        }}
      >
        <div className="relative flex">
          <ActionsMenu
            component_id={component.id}
            show={showActionMenu}
            showAddComponentModal={() => setShowAddComponentModal(true)}
            removeComponent={() => removeComponent(component)}
          />
          <div
            className={`p-1 ${
              isDragOver &&
              `border-blue-500  ${
                dragPos == "l"
                  ? "border-l-4"
                  : dragPos == "r"
                  ? "border-r-4"
                  : dragPos == "t"
                  ? "border-t-4"
                  : "border-b-4"
              }`
            }`}
          >
            {children}
          </div>
        </div>
      </div>
      <AddComponentModal
        showModal={showAddComponentModal}
        setShowModal={(val: boolean) => setShowAddComponentModal(val)}
        addComponent={addComponent}
      />
    </>
  );
};

export default ComponentWrapper;

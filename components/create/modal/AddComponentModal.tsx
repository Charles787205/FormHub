import { useState } from "react";
import { componentNames } from "@/utils/createData";
import { ThemeContext } from "@/contexts";
import { useContext } from "react";
import { Component } from "@/types/types";

/**
 *
 * @returns The modal for adding components
 *  used in ComponentWrapper
 */
const AddComponentModal = ({
  showModal,
  setShowModal,
  addComponent,
}: {
  showModal: boolean;
  setShowModal: (val: boolean) => void;
  addComponent: (componentName: string) => void;
}) => {
  const [selectedComponent, setSelectedComponent] = useState("");
  const { theme } = useContext(ThemeContext);

  const textClass = theme === "light" ? "text-light" : "text-dark";
  const paneClass = theme === "light" ? "pane-light" : "pane-dark";
  return (
    <div className="absolute  top-0 left-0 w-full h-full" hidden={!showModal}>
      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-15"
        onClick={(e) => {
          setShowModal(false);
        }}
      ></div>
      <div
        className={` top-1/2  left-1/2 -translate-y-1/2 -translate-x-1/2 rounded flex flex-col absolute w-[700px] h-[600px] overflow-hidden text-neutral-900 z-10 ${
          theme === "light" ? "pane-light" : "pane-dark"
        }`}
      >
        <div className="flex w-full h-14 gap-4 items-center p-3 border-b border-neutral-400">
          <span className={`material-symbols-outlined ${textClass}`}>
            search
          </span>
          <input
            type="text"
            className={`outline-none border-none ${textClass} ${paneClass}`}
            placeholder="Search for components here..."
          />
        </div>
        <div className="flex overflow-hidden">
          <div className="flex flex-col overflow-auto w-[250px] gap-2 p-1">
            {Object.keys(componentNames).map((key, index) => {
              return (
                <div className="flex flex-col" key={index}>
                  <h1
                    className={`px-3 py-1 text-[14px] font-semibold ${
                      theme === "light" ? "text-light" : "text-dark"
                    }`}
                  >
                    {key}
                  </h1>
                  {componentNames[key].map(
                    (component: { name: string; icon: string }, index) => {
                      return (
                        <button
                          className={`flex text-[14px] gap-2 px-3 py-1 items-center ${
                            theme === "light"
                              ? "pane-light-hover"
                              : "pane-dark-hover"
                          }  rounded-md ${textClass} ${
                            selectedComponent === component.name
                              ? "bg-neutral-200"
                              : ""
                          }`}
                          key={index}
                          onClick={() => {
                            setSelectedComponent(component.name);
                          }}
                        >
                          <span className="material-symbols-outlined text-[15px]">
                            {component.icon}
                          </span>
                          <p>{component.name}</p>
                        </button>
                      );
                    }
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex w-full h-full flex-col">
            <button
              className="bg-blue-600 text-white min-w-[150px] rounded m-2"
              onClick={() => {
                addComponent(selectedComponent);
                setShowModal(false);
              }}
            >
              {`Add ${selectedComponent}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddComponentModal;

"use client";
import {
  ActionsMenu,
  AddCover,
  Heading,
  Text,
  ComponentWrapper,
  ShortAnswer,
} from "@/components/create";
import { ThemeContext } from "@/contexts";
import { useState, useReducer, useCallback, useEffect } from "react";
import {
  Component,
  TextComponent,
  InputComponent,
  LayoutComponents,
} from "@/types/types";
import { determineComponent } from "@/utils/create/determineComponent";
import { componentsReducer } from "@/utils/create/componentReducer";

/**
 *
 *
 */

const Create = () => {
  const [theme, setTheme] = useState("light");
  const [components, dispatch] = useReducer(componentsReducer, [], () => {
    return [];
  });

  useEffect(() => {
    const headingComponent = {
      component_name: "Heading 1",
      id: crypto.randomUUID(),
      value: "",
      component_type: "text",
      placeholder: "Type here...",
    };
    const textComponent = {
      component_name: "Text",
      id: crypto.randomUUID(),
      value: "",
      component_type: "text",
      placeholder: "Type here...2",
    };
    const inputComponent = {
      component_name: "Short Answer",
      id: crypto.randomUUID(),
      value: "",
      component_type: "input",
      placeholder: "Type here..1.",
    };
    dispatch({
      type: "set_components",
      components: [[headingComponent], [textComponent], [inputComponent]],
    });
  }, []);

  /**
   *
   * @param component
   * @returns ReactNode
   * This function translates and determine the component data into a ReactNode
   */

  function addComponent(componentName: string, index: number) {
    const newComponent: Component = {
      component_name: componentName,
      id: crypto.randomUUID(),
      value: "",
      component_type: "text",
    };
    dispatch({ type: "add_component", component: newComponent, index: index });
  }

  function removeComponent(component: Component) {
    if (components.length <= 2) {
      console.log("sadf");
      addComponent("Input Component", components.length);
    }
    dispatch({ type: "remove_component", component });
  }

  function updateDraggedLayout(
    component: Component,
    dragged_component_id: string,
    dragPos: "t" | "l" | "b" | "r"
  ) {
    dispatch({
      type: "update_dragged_layout",
      component,
      dragged_component_id,
      dragPos,
    });
  }

  return (
    <main
      className={`flex items-center h-full pt-12 flex-col ${
        theme == "light" ? "pane-white" : "pane-dark"
      }`}
    >
      <ThemeContext.Provider value={{ theme, setTheme: setTheme }}>
        <AddCover />
        <div className="w-4/6 flex flex-col gap-1">
          {components.map((component, index) => {
            return (
              <div className="flex flex-start gap-2 px-[80px]" key={index}>
                {component.map((comp, ind) => {
                  return (
                    <ComponentWrapper
                      key={comp.id}
                      addComponent={(componentName: string) => {
                        addComponent(componentName, index);
                      }}
                      removeComponent={removeComponent}
                      component={comp as Component}
                      updateDraggedLayout={updateDraggedLayout}
                    >
                      {determineComponent(comp as Component, dispatch)}
                    </ComponentWrapper>
                  );
                })}
              </div>
            );
          })}
        </div>
      </ThemeContext.Provider>
    </main>
  );
};
export default Create;

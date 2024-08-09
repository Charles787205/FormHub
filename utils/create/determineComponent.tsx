import { Component, TextComponent, InputComponent } from "@/types/types";
import { ComponentAction } from "@/types/create";

import * as Components from "@/components/create";

export const determineComponent = (
  component: Component,
  dispatch: (val: ComponentAction) => void
) => {
  switch (component.component_name) {
    case "Text":
      return (
        <Components.Text
          component={component as TextComponent}
          setText={(value: string) => {
            component.value = value;
            dispatch({ type: "update_value", component });
          }}
        />
      );

    case "Short Answer":
      return (
        <Components.ShortAnswer
          component={component as InputComponent}
          updateComponent={(component: Component) => {
            dispatch({ type: "update_value", component });
          }}
        />
      );
    case "Heading 1":
      return (
        <Components.Heading
          component={component as TextComponent}
          setText={(value: string) => {
            component.value = value;
            console.log(value);
            dispatch({ type: "update_value", component });
          }}
        />
      );

    default:
      return <div></div>;
  }
};

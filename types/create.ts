import { Component } from "./types";
export type ComponentAction =
  | { type: "add_component"; component: Component; index: number }
  | { type: "remove_component"; component: Component }
  | { type: "update_value"; component: Component }
  | {
      type: "update_dragged_layout";
      component: Component;
      dragged_component_id: string;
      dragPos: "t" | "l" | "b" | "r";
    }
  | { type: "set_components"; components: Component[][] };

import { Component } from "@/types/types";
import { ComponentAction } from "@/types/create";
/**
 *
 * @param componentsList
 * @param draggedComponentXY
 * @param componentXY
 * @param dragged_component_id
 * @returns a new array of components that position the draggedComponent to the top of the component that called it.
 */
export function draggedTop(
  componentsList: Component[][],
  draggedComponentXY: { x: number; y: number },
  componentXY: { x: number; y: number },
  dragged_component_id: string
) {
  var newComponentList: Component[][] = [];

  newComponentList = [
    ...componentsList.slice(0, componentXY.y),
    [componentsList[draggedComponentXY.y][draggedComponentXY.x]],
    ...componentsList.slice(componentXY.y),
  ];

  if (componentXY.y <= draggedComponentXY.y) {
    newComponentList[draggedComponentXY.y + 1] = newComponentList[
      draggedComponentXY.y + 1
    ].filter((comp) => comp.id != dragged_component_id);
  } else {
    newComponentList[draggedComponentXY.y] = newComponentList[
      draggedComponentXY.y
    ].filter((comp) => comp.id != dragged_component_id);
  }

  return newComponentList.filter((comp) => comp.length != 0);
}

export function draggedBottom(
  componentsList: Component[][],
  draggedComponentXY: { x: number; y: number },
  componentXY: { x: number; y: number },
  dragged_component_id: string
) {
  var newComponentList: Component[][] = [];
  newComponentList = [
    ...componentsList.slice(0, componentXY.y + 1),
    [componentsList[draggedComponentXY.y][draggedComponentXY.x]],
    ...componentsList.slice(componentXY.y + 1),
  ];
  if (componentXY.y < draggedComponentXY.y) {
    newComponentList[draggedComponentXY.y + 1] = newComponentList[
      draggedComponentXY.y + 1
    ].filter((comp) => comp.id != dragged_component_id);
  } else {
    newComponentList[draggedComponentXY.y] = newComponentList[
      draggedComponentXY.y
    ].filter((comp) => comp.id != dragged_component_id);
  }

  return newComponentList.filter((comp) => comp.length != 0);
}

export function draggedRight(
  componentsList: Component[][],
  draggedComponentXY: { x: number; y: number },
  componentXY: { x: number; y: number },
  dragged_component_id: string
) {
  var newComponentList: Component[][] = [];
  newComponentList = componentsList.map((components, index) => {
    if (index == componentXY.y) {
      return [
        ...components.slice(0, componentXY.x + 1),
        componentsList[draggedComponentXY.y][draggedComponentXY.x],
        ...components.slice(componentXY.x + 1),
      ];
    } else {
      return components;
    }
  });

  if (draggedComponentXY.y == componentXY.y) {
    if (draggedComponentXY.x > componentXY.x) {
      newComponentList[draggedComponentXY.y] = newComponentList[
        draggedComponentXY.y
      ].filter((comp, index) => index != draggedComponentXY.x + 1);
    } else {
      newComponentList[draggedComponentXY.y] = newComponentList[
        draggedComponentXY.y
      ].filter((comp, index) => index != draggedComponentXY.x);
    }
  } else {
    newComponentList[draggedComponentXY.y] = newComponentList[
      draggedComponentXY.y
    ].filter((comp, index) => index != draggedComponentXY.x);
  }
  return newComponentList.filter((comp) => comp.length != 0);
}
export function draggedLeft(
  componentsList: Component[][],
  draggedComponentXY: { x: number; y: number },
  componentXY: { x: number; y: number },
  dragged_component_id: string
) {
  var newComponentList: Component[][] = [];
  newComponentList = componentsList.map((components, index) => {
    if (index == componentXY.y) {
      return [
        ...components.slice(0, componentXY.x),
        componentsList[draggedComponentXY.y][draggedComponentXY.x],
        ...components.slice(componentXY.x),
      ];
    } else {
      return components;
    }
  });

  if (draggedComponentXY.y == componentXY.y) {
    if (draggedComponentXY.x > componentXY.x) {
      newComponentList[draggedComponentXY.y] = newComponentList[
        draggedComponentXY.y
      ].filter((comp, index) => index != draggedComponentXY.x + 1);
    } else {
      newComponentList[draggedComponentXY.y] = newComponentList[
        draggedComponentXY.y
      ].filter((comp, index) => index != draggedComponentXY.x);
    }
  } else {
    newComponentList[draggedComponentXY.y] = newComponentList[
      draggedComponentXY.y
    ].filter((comp, index) => index != draggedComponentXY.x);
  }
  return newComponentList.filter((comp) => comp.length != 0);
}

export function componentsReducer(
  componentsList: Component[][],
  action: ComponentAction
) {
  switch (action.type) {
    case "add_component":
      return [
        ...componentsList.slice(0, action.index + 1),
        [action.component],
        ...componentsList.slice(action.index + 1),
      ];

    case "remove_component":
      const newComponents = componentsList.map((components) => {
        //check if an componentObject is an array if it is then filter the component

        return components.filter((comp) => comp.id !== action.component.id);
      });
      return newComponents.filter((comp) => comp.length != 0);

    case "update_value":
      return componentsList.map((component) => {
        component.map((comp) => {
          if (comp.id == action.component.id) {
            comp.value = action.component.value;
          }
        });

        return component;
      });
    case "update_dragged_layout":
      var newComponentList: Component[][] = [];
      var componentXY = { x: -1, y: -1 };
      const draggedComponentXY = { x: -1, y: -1 };

      componentsList.forEach((components, index) => {
        components.forEach((comp, ind) => {
          if (comp.id == action.component.id) {
            componentXY.x = ind;
            componentXY.y = index;
          }
          if (comp.id == action.dragged_component_id) {
            draggedComponentXY.x = ind;
            draggedComponentXY.y = index;
          }
        });
      });
      if (
        componentXY.x == -1 ||
        componentXY.y == -1 ||
        draggedComponentXY.x == -1 ||
        draggedComponentXY.y == -1
      ) {
        return componentsList;
      }

      switch (action.dragPos) {
        case "t":
          return draggedTop(
            componentsList,
            draggedComponentXY,
            componentXY,
            action.dragged_component_id
          );
        case "b":
          return draggedBottom(
            componentsList,
            draggedComponentXY,
            componentXY,
            action.dragged_component_id
          );
        case "r":
          return draggedRight(
            componentsList,
            draggedComponentXY,
            componentXY,
            action.dragged_component_id
          );
        case "l":
          return draggedLeft(
            componentsList,
            draggedComponentXY,
            componentXY,
            action.dragged_component_id
          );
      }

    case "set_components":
      return action.components;

    default:
      return componentsList;
  }
}

import { componentNames } from "@/utils/createData";
export type TextComponentProps = {
  text: string;
  setText: (text: string) => void;
};

/**
 * /**
 * @description This is the list of component that are used in create page
 *
 */

export type componentNamesType = {
  [key: string]: { name: string; icon: string }[];
};

export type InputComponentNames =
  | "Short Answer"
  | "Long Answer"
  | "Email"
  | "Phone"
  | "Date"
  | "Time"
  | "Number"
  | "URL";
export type TextComponentNames =
  | "Text"
  | "Heading 1"
  | "Heading 2"
  | "Heading 3"
  | "Title"
  | "Label";
export type OptionsComponentNames =
  | "Checkbox"
  | "Multi Select"
  | "Dropdown"
  | "Multiple Choice";

export interface Component {
  component_name: string;
  id: string;
  value: string;
  component_type: string;
}

export interface TextComponent extends Component {
  component_name: TextComponentNames;
}
export interface InputComponent extends Component {
  component_name: InputComponentNames;
  placeholder: string;
}
export interface OptionsComponent extends Component {
  component_name: OptionsComponentNames;
  options: string[];
}

//layout components is needed to preserve the layout of the components
export type LayoutComponents = Component[][];

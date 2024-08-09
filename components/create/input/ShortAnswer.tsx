import { ThemeContext } from "@/contexts";
import { InputComponent } from "@/types/types";
import { useContext } from "react";

const ShortAnswer = ({
  component,
  updateComponent,
}: {
  component: InputComponent;
  updateComponent: (component: InputComponent) => void;
}) => {
  const { theme } = useContext(ThemeContext);
  const classTheme = theme === "light" ? "pane-light" : "pane-dark";

  return (
    <input
      id={component.id}
      type="text"
      className={`border border-neutral-500 rounded p-1 outline-none ${classTheme}`}
      value={component.value}
      onChange={(e) => {
        updateComponent({ ...component, value: e.target.value });
      }}
      placeholder="Type here..."
    />
  );
};

export default ShortAnswer;

import { Component, TextComponentProps } from "@/types/types";
import { getTextClassFromTheme } from "@/utils/theme";
import { useContext } from "react";
import { ThemeContext } from "@/contexts";
const Text = ({
  component,
  setText,
}: {
  component: Component;
  setText: (val: string) => void;
}) => {
  const { theme } = useContext(ThemeContext);
  const textClass = getTextClassFromTheme(theme);
  return (
    <div>
      <input
        id={component.id}
        className={`bg-transparent outline-none p-1 ${textClass}`}
        type="text"
        value={component.value}
        placeholder="Add Text Here"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
    </div>
  );
};

export default Text;

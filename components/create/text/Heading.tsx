import { TextComponent } from "@/types/types";
import { useContext, useState } from "react";
import { ThemeContext } from "@/contexts";
import { getTextClassFromTheme } from "@/utils/theme";

const Heading = ({
  component,
  setText,
}: {
  component: TextComponent;
  setText: (val: string) => void;
}) => {
  const { theme } = useContext(ThemeContext);
  const textClass = getTextClassFromTheme(theme);

  return (
    <input
      className={`border-none outline-none text-4xl font-bold bg-transparent ${textClass}`}
      type="text"
      value={component.value}
      onChange={(event) => setText(event.target.value)}
      placeholder="Add Heading Here"
      id={component.id}
    />
  );
};

export default Heading;

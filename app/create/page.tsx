"use client";
import { ActionsMenu, AddCover, Heading, Text } from "@/components/create";
import { ThemeContext } from "@/contexts";
import { useState } from "react";
const Create = () => {
  const [theme, setTheme] = useState("light");

  const [actions, setActions] = useState(false);
  return (
    <main
      className={`flex items-center h-full pt-12 flex-col ${
        theme == "light" ? "bg-white text-black" : "bg-neutral-700 text-white"
      }`}
    >
      <ThemeContext.Provider value={{ theme, setTheme: setTheme }}>
        <AddCover />
        <div className="w-4/6">
          <Heading text="Test" setText={() => {}} />
          <div
            className="flex justify-start w-full gap-2 text-neutral-400  relative px-[80px]"
            onMouseEnter={() => {
              setActions(true);
            }}
            onMouseLeave={() => {
              setActions(false);
            }}
          >
            <div className="relative">
              <ActionsMenu show={actions} />
              <Text text="another test" setText={() => {}} />
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </main>
  );
};
export default Create;

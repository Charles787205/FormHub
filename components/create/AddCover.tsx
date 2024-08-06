"use client";
import { useState, useContext } from "react";
import { ThemeContext } from "@/contexts";
import LogoAndDesign from "./LogoAndDesign";
/*
    AddCover is the component on top of the form that allows the user to add a cover image to the form.
*/
const AddCover = () => {
  const [cover, setCover] = useState("");
  const [hovered, setHovered] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  let textColor = theme === "light" ? "text-black" : "text-neutral-400";
  let bgColor = theme === "light" ? "bg-white  shadow" : "bg-neutral-800";
  const buttonClassName = `px-2 rounded mb-2 hover:text-black ease-in-out transition-all duration-500 ${
    cover
      ? "text-neutral-900 hover:scale-105 bg-white shadow"
      : "text-neutral-400"
  } `;

  return (
    <>
      <div
        className={`h-[200px] w-full  flex justify-center  ${cover}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`flex w-full  items-end gap-4 ${
            cover ? "justify-end mr-2" : "justify-center"
          }  ${hovered ? "" : "hidden"}`}
        >
          <button
            onClick={() => setCover("bg-red-400")}
            className={buttonClassName}
          >
            Add Cover
          </button>
          <button
            className={buttonClassName}
            onClick={() => {
              setTheme("dark");
            }}
          >
            Add Image
          </button>
        </div>
      </div>
      <LogoAndDesign coverHovered={hovered} />
    </>
  );
};

export default AddCover;

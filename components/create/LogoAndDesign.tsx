import { useState } from "react";
import { ThemeContext } from "@/contexts";
import { useContext } from "react";

const LogoAndDesign = ({ coverHovered }: { coverHovered: boolean }) => {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      className="min-h-[50px] w-full"
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(modalOpen || false);
      }}
    >
      <div
        className={`w-full flex justify-center gap-2 p-3  ${
          !coverHovered && !hovered && "hidden"
        }`}
      >
        <button className="hover:scale-105">Add Logo</button>
        <button
          className="hover:scale-105"
          onClick={() => {
            setModalOpen((modal) => !modal);
          }}
        >
          Design
        </button>
        {modalOpen && (
          <LadModal setModalOpen={(modalOpen) => setModalOpen(modalOpen)} />
        )}
      </div>
    </div>
  );
};

const LadModal = ({
  setModalOpen,
}: {
  setModalOpen: (modalOpen: boolean) => void;
}) => {
  const { setTheme } = useContext(ThemeContext);
  const buttonClicked = (theme: "light" | "dark") => {
    setTheme(theme);
    setModalOpen(false);
  };

  return (
    <div className="fixed top-[50px] right-2  bg-opacity-50 z-50 flex justify-center items-center shadow-lg">
      <div
        className={`flex flex-col bg-neutral-100 shadow-lg  border border-neutral-300 p-4 rounded-lg gap-2 text-neutral-600`}
      >
        <h2>Select Theme:</h2>
        <div className="flex  gap-3 ">
          <button
            onClick={() => buttonClicked("light")}
            className="p-4 text-[14px] shadow border border-neutral-400 rounded-lg"
          >
            Light
          </button>
          <button
            onClick={() => buttonClicked("dark")}
            className="p-4 text-[14px] shadow border border-neutral-400 rounded-lg"
          >
            Dark
          </button>
        </div>
      </div>
    </div>
  );
};
export default LogoAndDesign;

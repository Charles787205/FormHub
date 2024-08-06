const ActionsMenu = ({ show }: { show: boolean }) => {
  return (
    <div className={`flex gap-1 absolute -left-[80px] ${!show && "hidden"}`}>
      <button>
        <span className="material-symbols-outlined">delete</span>
      </button>
      <button>
        <span className="material-symbols-outlined">add</span>
      </button>
      <button>
        <span className="material-symbols-outlined">drag_indicator</span>
      </button>
    </div>
  );
};

export default ActionsMenu;

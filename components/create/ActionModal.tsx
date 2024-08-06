const ActionModal = () => {
  return (
    <div>
      <div className="flex gap-1 absolute -left-[80px]">
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
    </div>
  );
};

export default ActionModal;

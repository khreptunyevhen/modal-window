const CloseButton = ({ setStore }) => {
  return (
    <button
      className="h-12 w-12 rounded-2xl text-xs font-bold bg-gray-100"
      onClick={() => {
        setStore((prev) => {
          return {
            ...prev,
            showModal: false,
          };
        });
      }}
    >
      X
    </button>
  );
};

export default CloseButton;

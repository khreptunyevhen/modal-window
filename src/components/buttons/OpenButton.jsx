import { modals } from "../../common/modalsData";

const OpenButton = ({ setStore, index, modal }) => {
  return (
    <button
      className="max-w-max mb-4 py-2 px-36 border-b-4 rounded-2xl border-indigo-500 bg-blueButton text-white font-bold uppercase hover:bg-blue-400 duration-200"
      onClick={() => {
        setStore(() => {
          return {
            showModal: true,
            modalTitle: modals[index].title,
            modalText: modals[index].text,
          };
        });
      }}
    >
      Open modal: {modal.id + 1}
    </button>
  );
};

export default OpenButton;

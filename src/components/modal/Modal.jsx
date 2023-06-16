import CloseButton from "../buttons/CloseButtom";

const Modal = ({ store, setStore }) => {
  console.log(store);
  return (
    <div className="">
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 w-11/12 md:w-8/12 lg:w-1/2 rounded-2xl text-main"
        style={{ display: store.showModal ? "block" : "none" }}
      >
        <div className="flex items-center justify-between mb-8 border-b-2 pb-4 border-main">
          <h2 className="text-2xl">{store.modalTitle}</h2>
          <CloseButton setStore={setStore} />
        </div>
        <h3 className="text-3xl mb-8">{store.modalTitle}</h3>
        <p>{store.modalText}</p>
      </div>
    </div>
  );
};

export default Modal;

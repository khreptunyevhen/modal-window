import { useState } from "react";
import OpenButton from "./components/buttons/OpenButton";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import "./index.scss";
import { modals } from "./common/modalsData";

function App() {
  const [store, setStore] = useState({
    showModal: false,
    modalTitle: "",
    modalText: "",
  });

  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
        <Header />
        {modals.map((modal, index) => {
          return (
            <OpenButton
              key={`modal-${index}`}
              index={index}
              modal={modal}
              setStore={setStore}
            />
          );
        })}
        <Modal store={store} setStore={setStore} />
      </div>
    </div>
  );
}

export default App;

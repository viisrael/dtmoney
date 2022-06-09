import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/dashboard/Index";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  Modal.setAppElement('#root');
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar Transação</h2>
      </Modal>

      <GlobalStyle/>
    </>
  );
}
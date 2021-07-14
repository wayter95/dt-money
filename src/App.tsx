import Modal from 'react-modal'
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import { useState } from "react";
import { NewTransactionModal } from "./components/new-transascion-modal";
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root")

export function App() {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
	

	function handleOpenNewTransactionModal(){
		setIsNewTransactionModalOpen(true)
	}

	function handleCloseNewTransactionModal(){
		setIsNewTransactionModalOpen(false)
	}
  return (
   <TransactionsProvider>
	 	 <Header onOpenNewTranslationModal={handleOpenNewTransactionModal}/>
		 <Dashboard/>
		 <NewTransactionModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			/>
		 <GlobalStyle/>
	 </TransactionsProvider>
  )
}
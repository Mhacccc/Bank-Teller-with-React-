import { useState } from 'react'
import Transaction from './transactions/Transaction'
import './App.css'
import { Routes, Route } from 'react-router'
import CheckBalance from './transactions/CheckBalance'
import Deposit from './transactions/Deposit'
import Withdraw from './transactions/Withdraw'
import ViewTransaction from './transactions/ViewTransactions'


function App() {

  const [balance,setBalance] = useState(0)
  const [transaction,setTransaction] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Transaction />} />
        <Route path="check-balance" element={<CheckBalance balance={balance}/>} />
        <Route path="deposit" element={<Deposit setBalance={setBalance} balance={balance} transaction={transaction} setTransaction={setTransaction} />} />
        <Route path="withdraw" element={<Withdraw setBalance={setBalance} balance={balance} transaction={transaction} setTransaction={setTransaction}/>} />
        <Route path="view-transaction" element={<ViewTransaction transaction={transaction} />}  />
      </Routes>
      
    </>
  )
}

export default App

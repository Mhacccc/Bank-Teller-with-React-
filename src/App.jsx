import { useState } from 'react'
import Transaction from './transactions/Transaction'
import PinLogin from './components/PinLogin'
import './App.css'
import { Routes, Route } from 'react-router'
import CheckBalance from './transactions/CheckBalance'
import Deposit from './transactions/Deposit'
import Withdraw from './transactions/Withdraw'
import ViewTransaction from './transactions/ViewTransactions'


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [balance,setBalance] = useState(0)
  const [transaction,setTransaction] = useState([]);

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setBalance(0)
    setTransaction([])
  }

  if (!isAuthenticated) {
    return <PinLogin onLogin={handleLogin} />
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Transaction onLogout={handleLogout} />} />
        <Route path="check-balance" element={<CheckBalance balance={balance}/>} />
        <Route path="deposit" element={<Deposit setBalance={setBalance} balance={balance} transaction={transaction} setTransaction={setTransaction} />} />
        <Route path="withdraw" element={<Withdraw setBalance={setBalance} balance={balance} transaction={transaction} setTransaction={setTransaction}/>} />
        <Route path="view-transaction" element={<ViewTransaction transaction={transaction} />}  />
      </Routes>
      
    </>
  )
}

export default App

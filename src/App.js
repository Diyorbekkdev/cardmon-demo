import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, Menu} from './pages'
import Layout from './components/Layout'
import DebtsBorrow from './components/DebtsBorrow'
import DebtsLend from './components/DebtsLend'
import TransactionsIncome from './components/TransactionsIncome'
import TransactionsExpenses from './components/TransactionsExpenses'
import HomeIncome from "./components/HomeIncome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='income' element={<HomeIncome />} />
          <Route path="transactions/income" element={<TransactionsIncome />} />
          <Route path="transactions/expenses" element={<TransactionsExpenses />} />
          <Route path="menu" element={<Menu />} />
          <Route path="debts/lend" element={<DebtsLend />} />
          <Route path="debts/borrow" element={<DebtsBorrow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
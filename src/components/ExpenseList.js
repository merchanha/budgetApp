import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import ExpenseTransaction from './ExpenseTransaction'


const ExpenseList = () => {

  const {expenseTransactions} = useContext(GlobalContext)

  return (
    <div className='list-group mt-3 mb-3'>
    <h2>Movimientos Realizados</h2>
    <ul className='list-group mt-3 mb-3'>
    {expenseTransactions.map(expenseTransaction=>(
      <ExpenseTransaction key={expenseTransaction.id}expenseTransaction={expenseTransaction}/>
    ))}
    </ul>
</div>
  )
}

export default ExpenseList
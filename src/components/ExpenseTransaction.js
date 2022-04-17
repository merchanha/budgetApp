import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { TiDelete } from 'react-icons/ti';

const ExpenseTransaction = ({ expenseTransaction }) => {
  const {deleteTransaction}= useContext(GlobalContext)
  return (
    <div className='container'>
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        <div className='col-4'>
          <span className='transaction-text'>{expenseTransaction.expenseText}</span>
        </div>

        <div className='col-3'>
          <span className='transaction-amount'>{expenseTransaction.expenseAmount}</span>
        </div>

        <div className='col-4'>
          <span className='transaction-date'>{expenseTransaction.expenseDate}</span>
        </div>

        <div className='col-1'>
          <button class='btn btn-danger'>
            <TiDelete size='1.5em' onClick={() => deleteTransaction(expenseTransaction.id)} />
          </button>
        </div>

      </li>

    </div>

  )
}

export default ExpenseTransaction
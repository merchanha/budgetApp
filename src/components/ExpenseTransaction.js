import React from 'react'

const ExpenseTransaction = ({ expenseTransaction }) => {
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
            <i className='fas fa-trash'></i>
          </button>
        </div>

      </li>

    </div>

  )
}

export default ExpenseTransaction
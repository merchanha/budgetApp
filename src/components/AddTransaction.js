import React, { useState } from 'react'
import ExpenseList from './ExpenseList'
import IncomeList from './IncomeList'

const AddTransaction = () => {
  const [income, setIncome] = useState({ incomeText: '', incomeAmount: 0, incomeDate: null })
  const { incomeText, incomeAmount, incomeDate } = income

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value })

    console.log(income)
  }

  const onSubmitIncome = (e) => {
    e.preventDefault();

    const newIncomeTransaction = {
      incomeText,
      incomeAmount,
      incomeDate

    }

    console.log(newIncomeTransaction)

  }

  return (
    <>
    <div class='container'>
    <h3 className='mt-3'>Add Income</h3>
    <form onSubmit={onSubmitIncome}>
      <div class='row'>
        <div class='col-sm col-lg-4'>
          <label for='name'>Name</label>
          <input type='text' name='incomeText' placeholder='Add Income...' autoComplete='off' onChange={onChangeIncome} />
        </div>

        <div class='col-sm col-lg-4'>
          <label for='amount'>Amount</label>
          <input type='number' name='incomeAmount' placeholder='Amount' autoComplete='off' onChange={onChangeIncome} />
        </div>

        <div class='col-sm col-lg-4'>
          <label for='amount'>Date</label>
          <input type="date" name="incomeDate" id="date" placeholder="Income date..." onChange={onChangeIncome} />
        </div>

        <div class='row mt-3'>
          <div class='col-sm'>
            <input type='submit' value='Submit' class='btn btn-primary' />
         </div>
        </div>
      </div>
    </form>
    <IncomeList/>
          
  </div>

  <hr/>

  <div class=' mt-4 container'>
    <h3 className='mt-3'>Add Expense</h3>
    <form onSubmit={onSubmitIncome}>
      <div className='row'>
      
      <div class='col-sm col-lg-4'>
        <label for='name'>Name</label>
        <input type='text' name='expenseText' placeholder='Add Expense...' autoComplete='off' />
      </div>

      <div class='col-sm col-lg-4'>
        <label for='amount'>Amount</label>
        <input type='number' name='expenseAmount' placeholder='Amount' autoComplete='off'  />
      </div>

      <div class='col-sm col-lg-4'>
        <label for='amount'>Date</label>
        <input type="date" name="expenseDate" id="date" placeholder="Expense date..." />
      </div>

      <div class='row mt-3'>
        <div class='col-sm'>
          <input type='submit' value='Submit' class='btn btn-primary' />
       </div>
      </div>
    
      </div>
    </form>
    <ExpenseList/>
    
    </div>

    
    
    
    
    
    
    
    </>

   






  )
}

export default AddTransaction

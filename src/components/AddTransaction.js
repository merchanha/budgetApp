import React, { useState, useContext } from 'react'
import ExpenseList from './ExpenseList'
import IncomeList from './IncomeList'
import { v4 as uuidv4 } from 'uuid'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext)
  const [income, setIncome] = useState({ incomeText: '', incomeAmount: 0, incomeDate: null })
  const { incomeText, incomeAmount, incomeDate } = income

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value })

  }
  const onSubmitIncome = (e) => {
    e.preventDefault();
    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1,
        incomeDate

      };
      addIncome(newIncomeTransaction);
      setIncome({
        incomeText: '',
        incomeAmount: 0,
        incomeDate: null

      })
    }
  }

  //EXPENSE

  const [expense, setExpense] = useState({ expenseText: '', expenseAmount: 0, expenseDate: null })
  const { expenseText, expenseAmount, expenseDate } = expense

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value })

  }
  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
        expenseDate

      };
      addExpense(newExpenseTransaction);
      setExpense({
        expenseText: '',
        expenseAmount: 0,
        expenseDate: null
      })

    }
  }


  return (
    <>
      <div class='container'>
        <h3 className='mt-3'>Add Income</h3>
        <form onSubmit={onSubmitIncome}>
          <div class='row'>
            <div class='col-sm col-lg-3'>
              <label for='name'>Name</label>
              <input type='text' name='incomeText' value={incomeText} placeholder='Add Income...' autoComplete='off' onChange={onChangeIncome} />
            </div>

            <div class='col-sm col-lg-3'>
              <label for='amount'>Amount</label>
              <input type='number' name='incomeAmount' value={incomeAmount} placeholder='Amount' autoComplete='off' onChange={onChangeIncome} />
            </div>

            <div class='col-sm col-lg-3'>
              <label for='amount'>Date</label>
              <input type="date" name="incomeDate" value={incomeDate} id="date" placeholder="Income date..." onChange={onChangeIncome} />
            </div>

            <div class='col-sm col-lg-3'>
              <select class="inputGroup">
                <option selected>Type</option>
                <option value="1">Income</option>
                <option value="2">Expense</option>
              </select>

            </div>

            <div class='row mt-3'>
              <div class='col-sm'>
                <input type='submit' value='Submit' class='btn btn-primary' />
              </div>
            </div>
          </div>
        </form>
        <IncomeList />

      </div>

      <hr />

      <div class=' mt-4 container'>
        <h3 className='mt-3'>Add Expense</h3>
        <form onSubmit={onSubmitExpense}>
          <div className='row'>

            <div class='col-sm col-lg-4'>
              <label for='name'>Name</label>
              <input type='text' name='expenseText' value={expenseText} placeholder='Add Expense...' autoComplete='off' onChange={onChangeExpense} />
            </div>

            <div class='col-sm col-lg-4'>
              <label for='amount'>Amount</label>
              <input type='number' name='expenseAmount' value={expenseAmount} placeholder='Amount' autoComplete='off' onChange={onChangeExpense} />
            </div>

            <div class='col-sm col-lg-4'>
              <label for='amount'>Date</label>
              <input type='date' name='expenseDate' value={expenseDate} id='date' placeholder='Expense date...' onChange={onChangeExpense} />
            </div>

            <div class='row mt-3'>
              <div class='col-sm'>
                <input type='submit' value='Submit' class='btn btn-primary' />
              </div>
            </div>

          </div>
        </form>
        <ExpenseList />

      </div>
    </>

  )
}

export default AddTransaction;

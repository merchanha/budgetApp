import React, { useState, useContext } from 'react'
import IncomeList from './IncomeList'
import { v4 as uuidv4 } from 'uuid'
import formatDate from '../utils/formatDate'
import { GlobalContext } from '../context/GlobalState'
import Axios from 'axios'

const initialState = {
  amount: '',
  description: '',
  type: 'Income',
  date: formatDate(new Date()),
};

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext)
  const [income, setIncome] = useState(initialState)
  const { amount, description, date, type } = income

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value })

  }
  const onSubmitIncome = (e) => {
    e.preventDefault();

      Axios.post('http://localhost:4000/budget', {
        id: uuidv4(),
        description: description,
        amount: amount * 1,
        date:date,
        type: type

      }).then((response)=>{
        console.log(response)
      })
    }
  

  return (
    <>
      <div class='container'>
        <h3 className='mt-3'>Add Income</h3>
        <form onSubmit={onSubmitIncome}>
          <div class='row'>
            <div class='col-sm col-lg-3'>
              <label for='name'>Description</label>
              <input type='text' name='description' value={description|| ''} placeholder='Add Income...' autoComplete='off' onChange={onChangeIncome} />
            </div>

            <div class='col-sm col-lg-3'>
              <label for='amount'>Amount</label>
              <input type='number' name='amount' value={amount || ''} placeholder='Amount' autoComplete='off' onChange={onChangeIncome} />
            </div>

            <div class='col-sm col-lg-3'>
              <label for='amount'>Date</label>
              <input type="date" name="date" value={date|| ''} id="date" placeholder="Income date..." onChange={onChangeIncome} />
            </div>

            <div class='col-sm col-lg-3'>
              <select class="inputGroup" value={type|| ''} onChange={(e) => setIncome({ ...income, type: e.target.value })}>
                <option selected>Type</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
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

    </>

  )
}

export default AddTransaction;

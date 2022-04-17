import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import IncomeTransaction from './IncomeTransaction'

const Balance = () => {
    const {incomeTransactions, expenseTransactions} = useContext(GlobalContext)
    const incomeAmounts = incomeTransactions.map(
        incomeTransaction=> incomeTransaction.incomeAmount
    )

    const expenseAmounts = expenseTransactions.map(
        expenseTransaction=> expenseTransaction.expenseAmount
    )

    const totalIncome = incomeAmounts.reduce((acc,item)=>(acc+=item), 0).toFixed(2)
    const totalExpense = expenseAmounts.reduce((acc,item)=>(acc+=item), 0).toFixed(2)



    return (
        <div class='container'>
            <h2 class='mt-3'>Yor Balance</h2>
            
            
            <div class='row mt-3'>
            <div class='col-sm'>
            <h3 class='alert alert-secondary p-4 d-flex align-items-center justify-content-between'>Budget: ${(totalIncome-totalExpense).toFixed(2)}</h3>

            </div>
                <div class='col-sm'>
                    <div class='alert p-4 alert-success'>
                        <h4 className='alert-success'>Income : ${totalIncome}</h4>
                    </div>
                    </div>

                    <div class='col-sm'>
                    <div class='alert p-4 alert-danger'>
                        <h4 className='alert-danger'>Expense : ${totalExpense}</h4>

                    </div>
                    </div>
                
            </div>


        </div>
    )
}

export default Balance
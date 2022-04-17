import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import IncomeTransaction from './IncomeTransaction'

const Balance = () => {
    const {transactions} = useContext(GlobalContext)
    
    const totalIncome = transactions.reduce((acc,item)=>(item.type === "Income"? acc+ item.amount: acc),0).toFixed(2)
      
    const totalExpense = transactions.reduce((acc,item)=>(item.type === "Expense"? acc+ item.amount: acc),0).toFixed(2)

    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);


    return (
        <div class='container'>
            <h2 class='mt-3'>Yor Balance</h2>
            
            
            <div class='row mt-3'>
            <div class='col-sm'>
            <h3 class='alert alert-secondary p-4 d-flex align-items-center justify-content-between'>Budget: ${(balance).toFixed(2)}</h3>

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
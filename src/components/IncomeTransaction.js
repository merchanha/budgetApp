import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { TiDelete } from 'react-icons/ti';



const IncomeTransaction = ({ transaction }) => {
 

    const {deleteTransaction}= useContext(GlobalContext)

    return (

        <div className='container'>
        <li className='list-group-item d-flex justify-content-between align-items-center' style={{backgroundColor: transaction.type === "Income" ? '  rgb(186, 240, 186)': 'rgb(245, 197, 197)'}}>
            <div className='col-4'>
                <span className='transaction-text'>{transaction.description}</span>
            </div>

            <div className='col-3'>
                <span >{transaction.amount}</span>
            </div>

            <div className='col-4'>

                <span className='transaction-date'>{transaction.date}</span>
            </div>


            <div className='col-1'>
                <button class='btn btn-danger'>
                <TiDelete size='1.5em' onClick={()=>deleteTransaction(transaction.id)} />
                </button>
            </div>

        </li>
        
        </div>
        
    )
}

export default IncomeTransaction
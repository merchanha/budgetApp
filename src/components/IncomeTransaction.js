import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { TiDelete } from 'react-icons/ti';


const IncomeTransaction = ({ incomeTransaction }) => {
    const {deleteTransaction}= useContext(GlobalContext)
    return (

        <div className='container'>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <div className='col-4'>
                <span className='transaction-text'>{incomeTransaction.incomeText}</span>
            </div>

            <div className='col-3'>
                <span >{incomeTransaction.incomeAmount}</span>
            </div>

            <div className='col-4'>

                <span className='transaction-date'>{incomeTransaction.incomeDate}</span>
            </div>


            <div className='col-1'>
                <button class='btn btn-danger'>
                <TiDelete size='1.5em' onClick={()=>deleteTransaction(incomeTransaction.id)} />
                </button>
            </div>

        </li>
        
        </div>
        
    )
}

export default IncomeTransaction
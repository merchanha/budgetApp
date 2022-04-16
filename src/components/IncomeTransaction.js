import React from 'react'

const IncomeTransaction = ({ incomeTransaction }) => {
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
                    <i className='fas fa-trash'></i>
                </button>
            </div>

        </li>
        
        </div>
        
    )
}

export default IncomeTransaction
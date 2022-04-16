import React from 'react'

const Balance = () => {
    return (
        <div class='container'>
            <h2 class='mt-3'>Yor Balance</h2>
            
            
            <div class='row mt-3'>
            <div class='col-sm'>
            <h3 class='alert alert-secondary p-4 d-flex align-items-center justify-content-between'>Budget: $0.00</h3>

            </div>
                <div class='col-sm'>
                    <div class='alert p-4 alert-success'>
                        <h4 className='alert-success'>Income : $0.00</h4>
                    </div>
                    </div>

                    <div class='col-sm'>
                    <div class='alert p-4 alert-danger'>
                        <h4 className='alert-danger'>Expense : $0.00</h4>

                    </div>
                    </div>
                
            </div>


        </div>
    )
}

export default Balance
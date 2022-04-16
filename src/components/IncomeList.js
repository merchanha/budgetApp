import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import IncomeTransaction from './IncomeTransaction';

const IncomeList = () => {
    const {incomeTransactions} = useContext(GlobalContext)

    console.log(incomeTransactions);

    return (
        <div className='list-group mt-3 mb-3'>
            <h2>Movimientos Realizados</h2>
            <ul className='list-group mt-3 mb-3 '>
            {incomeTransactions.map(incomeTransaction=>(
                <IncomeTransaction  key={incomeTransaction.id}incomeTransaction={incomeTransaction}/>
               
            ))}
                
            </ul>
        </div>
    )
}

export default IncomeList
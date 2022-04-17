import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import IncomeTransaction from './IncomeTransaction';
import '../App.css'

const IncomeList = () => {
    const {transactions} = useContext(GlobalContext)

    console.log(transactions);

    return (
        <div className='list-group mt-3 mb-3'>
            <h2>Movimientos Realizados</h2>
            <ul  className='list-group mt-3 mb-3 '>
            {transactions.map(transaction=>(
                
                <IncomeTransaction key={transaction.id}transaction={transaction}/>
                
                
               
            ))}
                
            </ul>
        </div>
    )
}

export default IncomeList
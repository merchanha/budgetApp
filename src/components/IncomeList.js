import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import IncomeTransaction from './IncomeTransaction';
import '../App.css'
import Axios from 'axios'

const IncomeList = () => {

    const {transactions} = useContext(GlobalContext)

    
    useEffect(()=>{
        Axios.get('http://localhost:4000/budget').then((response)=>{
            console.log(response)
            
        })
        
    },[])

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
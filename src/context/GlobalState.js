import React, {createContext, useReducer} from "react";
import IncomeTransaction from "../components/IncomeTransaction";
import AppReducer from "./AppReducer";

const initialState = JSON.parse(localStorage.getItem('transactions')) || [
    { amount: 500, description: 'salary', type: 'Income', date: '2020-11-16', id: '44c68123-5b86-4cc8-b915-bb9e16cebe6a' }, 
    { amount: 225, description: 'sale car', type: 'Income', date: '2020-11-16', id: '33b295b8-a8cb-49f0-8f0d-bb268686de1a' }, 
    { amount: 50, description: 'rent', type: 'Expense', date: '2020-11-13', id: 'c5647dde-d857-463d-8b4e-1c866cc5f83e' }, 
    { amount: 500, description: 'bill', type: 'Expense', date: '2020-11-13', id: '365a4ebd-9892-4471-ad55-36077e4121a9' }];
 


export const GlobalContext = createContext(initialState)

export const GlobalContextProvider = ({children})=>{
    const [transactions, dispath]= useReducer(AppReducer, initialState)

    const addTransaction = (transaction)=>{
        dispath({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    
    const deleteTransaction = (id)=>{
        dispath({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);


    return (
        <GlobalContext.Provider value={{
            transactions,
            addTransaction,
            deleteTransaction
        }}>
        {children}
        
        </GlobalContext.Provider>
    )

}
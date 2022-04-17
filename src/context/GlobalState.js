import React, {createContext, useReducer} from "react";
import IncomeTransaction from "../components/IncomeTransaction";
import AppReducer from "./AppReducer";

const initialState = {
    incomeTransactions: [],
    expenseTransactions:[]
}


export const GlobalContext = createContext(initialState)

export const GlobalContextProvider = ({children})=>{
    const [state, dispath]= useReducer(AppReducer, initialState)

    const addIncome = (incomeTransaction)=>{
        dispath({
            type: 'ADD_INCOME',
            payload: incomeTransaction
        })
    }
    const addExpense = (expenseTransaction)=>{
        dispath({
            type: 'ADD_EXPENSE',
            payload: expenseTransaction
        })
    }

    const deleteTransaction = (id)=>{
        dispath({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            incomeTransactions: state.incomeTransactions,
            expenseTransactions: state.expenseTransactions,
            addIncome,
            addExpense,
            deleteTransaction
        }}>
        {children}
        
        </GlobalContext.Provider>
    )

}
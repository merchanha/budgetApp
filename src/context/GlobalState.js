import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    incomeTransactions: [
        {id:1, incomeText: 'car sold', incomeAmount: 15000, incomeDate: '02/03/2022'},
        {id:2, incomeText: 'salary', incomeAmount: 500, incomeDate: '09/03/2022'},
       
    ],

    expenseTransactions:[
        {id:3, expenseText: 'rent', expenseAmount: 1000, expenseDate: '01/01/2022'},
        {id:4, expenseText: 'bank', expenseAmount: 600, expenseDate: '01/01/2022'}
    ]
}


export const GlobalContext = createContext(initialState)

export const GlobalContextProvider = ({children})=>{
    const [state, dispath]= useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={{
            incomeTransactions: state.incomeTransactions,
            expenseTransactions: state.expenseTransactions
        }}>
        {children}
        
        </GlobalContext.Provider>
    )

}
import React,{createContext, useContext, useState} from 'react'
import { ProductContext } from './ProductContext'

export const AmountToggleContext=createContext()

export const AmountToggleProvider =({children})=>{

    const [amount, setAmount]=useState(1)
    

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)

    }

    const setIncrease = (stock) => {

        amount < stock ? setAmount(amount + 1) : setAmount(stock)

    }

    return(
        <AmountToggleContext.Provider value={{amount, setIncrease, setDecrease}}>
                {children}
        </AmountToggleContext.Provider>
    )
}
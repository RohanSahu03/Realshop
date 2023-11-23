import React,{useContext, useState} from 'react'
import { CartContext } from './context/CartContext'


function CartAmountToggle({ stock, id, dataFromChild }) {
  const [amount,setAmount]=useState(1)
  const {cartItems} = useContext(CartContext)
 
  const setDecrease = (itemId) => {
      cartItems.map((item)=>{
        if (item.id === itemId){
          if(amount > 1){
            setAmount(amount-1)
            dataFromChild(amount)
          }
          else{
           setAmount(1)
            dataFromChild(amount)
          }
          // item.quantity > 1 ? item.quantity - 1 : item.quantity = 1
         
        }
      })
  }

  const setIncrease = (itemId) => {
   cartItems.map((item)=>{
      if (item.id === itemId) {
        if(amount < stock){
          setAmount(amount+1)
          dataFromChild(amount)
        }
        else{
          setAmount(stock)
          dataFromChild(amount)
        }

        //  item.quantity < stock ? item.quantity+1 : item.quantity=stock
      
      }
    })
  }

    const mystyle={
        "display":"flex"
    }
    const mybtn={
        "border":"none",
        "outline":"none",
        "background":"none",
        "fontSize":'18px'
    }
  return (
    <div>
        <div className="amountToggle" style={mystyle}>
        <button onClick={() => setDecrease(id)} style={mybtn}>-</button>
   
            <div style={{ marginLeft: '10px', marginRight: '10px' }}>{amount}</div>
        <button onClick={() => setIncrease(id)} style={mybtn}>+</button>
        </div>
    </div>
  )
}

export default CartAmountToggle
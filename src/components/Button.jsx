import React from 'react'

function Button({value}) {
    const buybtn ={
        display: 'flex',
        justifyContent: 'center',
    alignItems: 'center',
    width:'120px',
    cursor: 'pointer',
    height: '30px',
    backgroundColor: 'blueviolet',
    color: 'white',
    borderRadius: '4px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
  return (
    <div>
       
          <div style={buybtn}>
            {value}
          </div>
         
    </div>
  )
}

export default Button
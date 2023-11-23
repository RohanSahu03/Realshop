import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

function StarRating({star,review}) {
 const myStyle={
    fontSize:"9px",
    color:'brown',

 }



   const ratingStar= Array.from({length:5},(elem,index)=>{
            let number=index+0.5;

            return <span key={index}>
                {
                    star >= index + 1 ? <FaStar style={myStyle} /> : star >= number ? <FaStarHalfAlt style={myStyle} /> : <AiOutlineStar style={myStyle} />
                }
            </span>
    })

  return (
    <div>
        {ratingStar}
    </div>
  )
}

export default StarRating
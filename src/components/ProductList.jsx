import React, { useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import style from '../css/productList.module.css'
import { ProductContext } from './context/ProductContext'
import Filter from './Filter';
import Button from './Button';
import { BsCurrencyRupee, BsFillBagPlusFill } from 'react-icons/bs'
import StarRating from './StarRating';

function ProductList() {
  
  const { products,filteredProducts,getData} = useContext(ProductContext);
  
useEffect(() => {
getData()
 
}, []);


  return (<>
  
    <div className={style.mainBody}>
     <Filter/> 
    <div className={` ${style.productOuterDiv}`}>   
    {  
          filteredProducts.length > 0 ?(
            filteredProducts.map((item,index)=>{
              return(
                <div className={` ${style.productInnerDiv}`}>
                  <Link to={`/productdetails/${item.id}`} className={` ${style.card} `} key={index} >
                    <img src={item.image} className={`card-img-top img-fluid  ${style.cardImg}`} alt="..." />
                    <div className={`card-body ${style.cardBody}`}>
                      <div className={`card-title  ${style.brand}`}>{item.title}</div>
                        <StarRating star={item.rating} review={item.review} />
                      <div className={`card-text ${style.description}`}>{item.description}</div>
                      <div className={` ${style.price}`}><BsCurrencyRupee />{item.price}  <BsFillBagPlusFill style={{ fontSize: '12px' }} /></div>
        
                    </div>
                  </Link>
                </div>
              )
            })
          ): products.length > 0 ? products.map((data,index)=>{
        return(
          <div className={` ${style.productInnerDiv}`}>
            <Link to={`/productdetails/${data.id}`} className={` ${style.card} `} key={index} >
              <img src={data.image} className={`card-img-top img-fluid  ${style.cardImg}`} alt="..." />
              <div className={`card-body ${style.cardBody}`}>
                <div className={`card-title ${style.brand}`}>{data.title}</div>
                <StarRating star={data.rating} review={data.review} />
                <div className={`card-text ${style.description}`}>{data.description}</div>
                <div className={` ${style.price}`}><pre><BsCurrencyRupee />{data.price}   <BsFillBagPlusFill style={{ fontSize: '12px' }} /></pre></div>
                

              </div>
              </Link>
           </div>
        )
      }):(
        <>
        <div className={style.notFound}>
            <h5>Product Not Found</h5>
            <p>enjoy your shopping...</p>
            <Button value={'view products'} />
        </div>
        </>
      )
}
         
      </div>
    </div>
  </>
  )
}
export default ProductList
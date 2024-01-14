import React, { useEffect,useContext } from 'react'
import { Link } from 'react-router-dom'
import style from '../css/productList.module.css'
import { ProductContext } from './context/ProductContext'
import Filter from './Filter';
import Button from './Button';
import { BsCurrencyRupee } from 'react-icons/bs'
import { PiSmileySadLight } from 'react-icons/pi'
import StarRating from './StarRating';
import { Spinner } from 'reactstrap';

function ProductList() {
  
  const { products,filteredProducts,getData,isLoading} = useContext(ProductContext);
  
useEffect(() => {
getData()
 
}, []);


  return (<>
  
    <div className={style.mainBody}>
     <Filter/> 
    <div className={` ${style.productOuterDiv}`}>   
    {  isLoading ? (
          filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => {
              return (
                <div className={` ${style.productInnerDiv}`}>
                  <Link to={`/productdetails/${item.id}`} className={` ${style.card} `} key={index} >
                    <img src={item.image} className={`card-img-top img-fluid  ${style.cardImg}`} alt="..." />
                    <div className={`card-body ${style.cardBody}`}>
                      <div className={`card-title  ${style.brand}`}>{item.title}</div>
                      <StarRating star={item.rating} review={item.review} />
                      <div className={`card-text ${style.description}`}>{item.description}</div>
                      <br />
                      <div className={` ${style.price}`}><BsCurrencyRupee />{item.price} </div>

                    </div>
                  </Link>
                </div>
              )
            })
          ) : products.length > 0 ? products.map((data, index) => {
            return (
              <div className={` ${style.productInnerDiv}`}>
                <Link to={`/productdetails/${data.id}`} className={` ${style.card} `} key={index} >
                  <img src={data.image} className={`card-img-top img-fluid  ${style.cardImg}`} alt="..." />
                  <div className={`card-body ${style.cardBody}`}>
                    <div className={`card-title ${style.brand}`}>{data.title}</div>
                    <StarRating star={data.rating} review={data.review} />
                    <div className={`card-text ${style.description}`}>{data.description}</div>
                    <br />
                    <div className={` ${style.price}`}><pre><BsCurrencyRupee />{data.price}  </pre></div>


                  </div>
                </Link>
              </div>
            )
          }) : (
            <>
              <div className={style.notFound}>
                <h5>Product Not Found</h5>
                <p><PiSmileySadLight /></p>
                <Button value={'view products'} />
              </div>
            </>
          )

    ):(
            <Spinner color="primary">
              Please wait...
            </Spinner>       
      )
         
         }
         
      </div>
    </div>
  </>
  )
}
export default ProductList
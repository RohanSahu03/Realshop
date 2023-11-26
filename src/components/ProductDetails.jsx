import React, { useState,useEffect,useContext } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import style from '../css/productDetails.module.css'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'
import { BsCurrencyRupee } from 'react-icons/bs'
import { FaTruck } from 'react-icons/fa'
import { TbReplace } from 'react-icons/tb'
import { BiShieldQuarter } from 'react-icons/bi'


function ProductDetails() {

const {pid}=useParams()
const [product,setProduct]=useState({})
    // const [item, setItem] = useState({});
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    //  setItem(product)
    addToCart(product);
  };

  useEffect(() => {
    axios.get(`https://realshop-product-api.onrender.com/product/${pid}`)
      .then(resp => {

        setProduct(resp.data)
        
      })
      .catch(err => console.log(err))

  }, []);

  return (
    <div>
        <div className={`${style.main}`}>
        <div className={`${style.innermain}`}>
          <div className={`${style.imgcontainer}`}>
            <div className={`${style.img}`}>
              <img src={`../${product.image}`} className={`card-img-top img-fluid`} alt="img" />
              </div>
            <div className={`${style.btn}`}>
              <Link to='/addToCart' className={`${style.cartbtn}`} onClick={handleAddToCart}>Add To Cart</Link>
              </div>
          </div>
          <div className={`${style.details}`}>
            <div className={`${style.brand}`}>
              <h6>{product.title}</h6>
              <StarRating star={product.rating} review={product.review} /><span style={{fontSize:'10px'}}>({product.review} customer review)</span>
              <div className={`${style.desc}`}>{product.description}</div>
              <h5><BsCurrencyRupee/>{product.price}</h5>
              <p>Free delivery</p>
              </div>
            <div className={`${style.productdetails}`}>
                <b>Product Details</b>
                <ul>
                  <li>Name:{product.title}</li>
                  <li>Description:{product.description}</li>
                  <li>Quantity:{product.quantity}</li>
                  <li>Material:Some material</li>
                  <li>{product.stock} products in stock</li>
                </ul>
                <div className={style.iconDiv}>
                <div className={style.deliveryCharge}>
                  <FaTruck style={{width:'100%'}}/>
                  <p>{product.deliveryCharge}</p>
                </div>
                <div className={style.replacementPeriod}>
                  <TbReplace style={{ width: '100%' }} />
                  <p> {product.replacementPeriod} Replacement</p>
                </div>
                <div className={style.warrantyPeriod}>
                  <BiShieldQuarter style={{ width: '100%' }} />
                  <p>{product.warrantyPeriod} Warranty</p>
                </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
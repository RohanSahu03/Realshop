import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'
import { useContext, useState, useEffect } from 'react';
import style from '../css/cart.module.css'
import styled from '../css/nav.module.css'
import { FaTrash } from 'react-icons/fa'
import { Button, Modal, ModalHeader, ModalBody, Table } from 'reactstrap';
import { BsCurrencyRupee } from 'react-icons/bs'




function Cart() {
    const { cartItems, removeFromCart, setIncrease,setDecrease } = useContext(CartContext);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    let holderName = useRef()
    let cardNumber = useRef()
    let cvvNumber = useRef()
    const handlePayment = () => {
        let holderName = holderName.current.value
        let cardNumber = cardNumber.current.value
        let cvvNumber = cvvNumber.current.value
    }

    const mystyle = {
        "display": "flex"
    }
    const mybtn = {
        "border": "none",
        "outline": "none",
        "background": "none",
        "fontSize": '18px'
    }
    const inputStyle = {
        width: "90%",
        height: "30px",
        border: "none",
        color: "black",
        outline: 0,
        padding: "0 28px 0 0px",
        borderRadius: 0,
        background: "none",
        fontSize: "12px",
        borderBottom: "1px solid gray"
    }
    const btnStyle = {
        color: "white",
        background: "blue",

    }

   

    const handleRemoveFromCart = (product) => {
        removeFromCart(product);
    };

    const totalPrice = cartItems.reduce(
        (accumulator, item) => accumulator + item.subtotal,
        0
    );


    return (
        <div>

            <h6><span>{cartItems.length} </span> Products on your Cart</h6>

            <div className={`${style.main}`}>
                <div className={`${style.innermain}`}>
                    <div className={`${style.productDetails}`}>
                        <div className={`${style.tableHead}`}>Product Details</div>
                        {
                            cartItems.length === 0 ? (
                                <>
                                    <img src="../images/emptycart.png" alt="empty" className={`${style.emptycart}`} />
                                    <h6>Your cart is empty.</h6>
                                    <Link to='/' className={`${style.viewProduct}`}>
                                        View Product
                                    </Link>
                                </>
                            ) : (

                                cartItems.map((item, index) => (
                                    <>
                                        <table className={`${style.tableData} table`} key={index}>
                                            <tbody >
                                                <tr >
                                                    <td>
                                                        <div className="tableDatar">
                                                            <img src={`../${item.image}`} alt="img" className={`${style.img}`} />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="tableDatar">
                                                            {item.title}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="tableDatar">
                                                            <BsCurrencyRupee />{item.price}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="tableDatar">

                                                            <div className="amountToggle" style={mystyle}>
                                                                <button onClick={() => setDecrease(item.id)} style={mybtn}>-</button>

                                                                <div style={{ marginLeft: '10px', marginRight: '10px' }}>{item.quantity}</div>
                                                                <button onClick={() => setIncrease(item.id)} style={mybtn}>+</button>
                                                            </div>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="tableDatar">

                                                            {item.subtotal}

                                                        </div>
                                                    </td>
                                                    <td onClick={() => handleRemoveFromCart(item)}>
                                                        <div className="tableData1">
                                                            <FaTrash />
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </>
                                )

                                ))
                        }


                    </div>{
                        cartItems.length !== 0 ? (
                            <>
                                <div className={`${style.verticalLine}`}></div>
                                <div className={`${style.priceDetails}`}>
                                    <div className={`${style.priceHead}`}>
                                        Order Details
                                    </div>
                                    <div className={`${style.bill}`}>
                                        <table className={` table ${style.table}`}>
                                            <tbody>
                                                <tr>
                                                    <td>Total Product Price</td>
                                                    <td><BsCurrencyRupee />{totalPrice}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Delivery Charge</td>
                                                    <td><BsCurrencyRupee />{0.00}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td><b>Order Total</b></td>
                                                    <td><b><BsCurrencyRupee />{totalPrice}</b></td>

                                                </tr>

                                            </tbody>
                                        </table>

                                        <div className={`${style.buybtn}`} onClick={toggle}>
                                            <b>Buy</b>
                                        </div>
                                        <Modal isOpen={modal} toggle={toggle} className={styled.model} >
                                            <ModalHeader toggle={toggle} className={styled.modelHeader}> Payment </ModalHeader>
                                            <ModalBody className={styled.modelBody}>

                                                <Table borderless style={{ marginBottom: "0px" }}>
                                                    <thead >
                                                        <tr>
                                                            <th>
                                                                Enter Card Details
                                                            </th>

                                                        </tr>

                                                    </thead>

                                                    <tbody>
                                                        <tr>
                                                            <input style={inputStyle} type="text" ref={holderName} placeholder="Card Holder Name" id="searchField" autoComplete="off" required />
                                                        </tr>
                                                        <tr>
                                                            <input style={inputStyle} type="text" ref={cardNumber} placeholder="Card Number" id="searchField" autoComplete="off" required />
                                                        </tr>
                                                        <tr>
                                                            <input style={inputStyle} type="text" ref={cvvNumber} placeholder="CVV Number" id="searchField" autoComplete="off" required />
                                                        </tr>
                                                        <br />
                                                        <tr>
                                                            <Button type='submit' onClick={handlePayment} style={btnStyle}>
                                                                Make Payment
                                                            </Button>
                                                        </tr>
                                                        <br />
                                                    </tbody>
                                                </Table>
                                            </ModalBody>

                                        </Modal>
                                    </div>
                                </div>
                            </>
                        ) : ""
                    }

                </div>
            </div>

        </div>
    )
}

export default Cart
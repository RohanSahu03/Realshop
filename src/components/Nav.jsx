import React, { useContext,useState} from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { BiMenu, BiUserCircle } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import style from '../css/nav.module.css'
import { CartContext } from './context/CartContext';
import { Button,Modal,ModalHeader, ModalBody, } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Nav() {
    const navigate = useNavigate()
    const logout=()=>{
        localStorage.removeItem('user')
        toast('you are logged out')
        setTimeout(()=>{
            navigate('/login')
        },4000)
    }
    
    const {cartItems} =useContext(CartContext)

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [isActive, setIsActive] = useState(false)

    function showMenu() {
        setIsActive(current => !current)
    }
    
  return (
    <div>

          <section id={style.nav}>
              <article>

                  <div className={style.menu}>
                    <ToastContainer/>
                      <ol>
                          <li><a href="">
                              <img className={style.logo} src={`real-shop.png`} alt="logo"  />
                          </a></li>
                          <li> <Link to='/' >HOME</Link></li>
                          <li> <Link to='/'>MOBILE</Link></li>
                          <li><Link to='/'>HEADPHONE</Link></li>
                          <li><Link to='/'>BAG</Link></li>
                          <li><Link to='/'>T-SHIRT</Link></li>
                      </ol>

                  </div>

                  <div className={style.rightside}>

                      <div className={style.profile}>
                          <Link  id="toggler" onClick={toggle} style={{ fontSize: '22px' }} ><BiUserCircle /> </Link> 
                          <Modal isOpen={modal} toggle={toggle} className={style.model} >
                              <ModalHeader toggle={toggle} className={style.modelHeader} style={{ fontSize: '14px' }}><BiUserCircle /> Profile </ModalHeader>
                              <ModalBody className={style.modelBody}>
                                 
                                          <div className="udetails">
                                              Hii 
                                              Enjoy your shopping
                                           <br />
                                              <Button color="secondary" onClick={toggle}>
                                                  Cancel
                                              </Button>
                                          </div>
                              </ModalBody>
                             
                          </Modal>
            
                     </div>
                       
                      <div className={style.profile}>
                          <Link to='/addToCart'  style={{fontSize:'20px'}}> <FiShoppingCart> </FiShoppingCart></Link>
                         
                      </div>
                      <div className={style.profile}>
                        {
                              JSON.parse(localStorage.getItem('user')) == null ? (<Link to='/login' >Login</Link>) : (<Link onClick={logout} >Logout</Link>)
                        }
                                     
                      </div>
                      <div className={style.profile}>
                          <Link to='/register' >Sign up</Link>
                      </div>

                      <div className={style.categoryIcon}>
                          <BiMenu style={{ float: 'right', fontSize: '25px',color:'white',marginRight:'15px' }} onClick={showMenu} />
                      </div>
                  </div>
  
                  <div className={style.showMenu} style={{
                      display: isActive ? 'block' : ''
                  }}>
                      <ul>
                          <li>
                              <div className={style.login}>
                                  <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                              </div>
                          </li>
                          <li> <Link className={`${style.profileLogo}`} id="toggler" onClick={toggle} ><BiUserCircle /> Profile </Link> </li>
                          <li> <Link to='/addToCart' className={`${style.profileLogo}`} > <FiShoppingCart/> Cart </Link></li>
                          <li>
                              <div className={style.login}>
                                  {
                                      JSON.parse(localStorage.getItem('user')) == null ? (<Link to='/login' style={{ color: 'white', textDecoration: 'none' }}>Login</Link>) : (<Link to='/logout' style={{ color: 'white', textDecoration: 'none' }}>Logout</Link>)
                                  }
                                              
                              </div>
                          </li>
                          <li>
                             
                          </li>
                      </ul>
                  </div>
              </article>
          </section>

          

    </div>
  )
}

export default Nav
import React, { useContext,useState} from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { BiMenu } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import {Link} from 'react-router-dom'
import style from '../css/nav.module.css'
import { ProductContext } from './context/ProductContext';
import { CartContext } from './context/CartContext';
import { Button,Modal,ModalHeader, ModalBody, } from 'reactstrap';

function Nav() {

    const { updateSearchTerm,searchTerm}=useContext(ProductContext)
    
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
                      <ol>
                          <li><a href="">
                              <img className={style.logo} src={`real-shop.png`} alt="logo"  />
                          </a></li>
                          <li> <Link to='/' >Home</Link></li>
                          <li> <Link to='/'>Mobile</Link></li>
                          <li><Link to='/'>Headphone</Link></li>
                          <li><Link to='/'>Bag</Link></li>
                          <li><Link to='/'>T-shirt</Link></li>
                      </ol>

                  </div>

                  <div className={style.rightside}>
                      <div className={style.search}>
                          <div className={style.searchbox}>
                              <input type="search" placeholder="Search" id="searchField" autoComplete="off" value={searchTerm}
                                  onChange={(e) => updateSearchTerm(e.target.value)} />
                            </div>
                      </div>

                      <div className={style.profile}>
                          <Link className={`${style.profileLogo}`} id="toggler" onClick={toggle} ><CgProfile /> </Link> 
                          <Modal isOpen={modal} toggle={toggle} className={style.model} >
                              <ModalHeader toggle={toggle} className={style.modelHeader}><CgProfile /> Profile </ModalHeader>
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
                          <Link to='/addToCart' className={`${style.profileLogo}`} > <FaShoppingCart> </FaShoppingCart></Link>
                         
                      </div>
                      <div className={style.login}>
                                      <Link to='/login' >Login</Link>
                      </div>
                      <div className={style.login}>
                          <Link to='/register' >Register</Link>
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
                          <li> <Link className={`${style.profileLogo}`} id="toggler" onClick={toggle} ><CgProfile /> Profile </Link> </li>
                          <li> <Link to='/addToCart' className={`${style.profileLogo}`} > <FaShoppingCart/> Cart </Link></li>
                          <li>
                              <div className={style.login}>
                                              <Link  style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
                              </div>
                          </li>
                          <li>
                              <div className={style.searchbox}>
                                  <input type="search" placeholder="Search" id="searchField" autoComplete="off" value={searchTerm}
                                      onChange={(e) => updateSearchTerm(e.target.value)} />
                              </div>
                          </li>
                      </ul>
                  </div>
              </article>
          </section>

          

    </div>
  )
}

export default Nav
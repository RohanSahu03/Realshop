import React from 'react'
import {FaFacebookF,FaTwitter,FaYoutube} from 'react-icons/fa'
import style from '../css/footer.module.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div className={style.outerDiv}>
            <div className={style.innerDiv}>
            <div className="aboutSection">
                        <table>
                          <tbody>
                          <tr><th>ABOUT</th></tr>
              <tr><td><Link to='/contactus' style={{ textDecoration: 'none', color:'rgb(243, 238, 238)'}}>Contact us</Link></td></tr>
                          <tr><td>About us</td></tr>
                          <tr><td>Career</td></tr>
                          <tr><td>Press</td></tr>
                         </tbody>
                        </table>
            </div>
            <div className="helpSection">
                      <table>
                        <tbody>
                          <tr><th>HELP</th></tr>
                          <tr><td>Payments</td></tr>
                          <tr><td>Shipping</td></tr>
                          <tr><td>Cancellation & Returns</td></tr>
              </tbody>
                      </table>
            </div>
            <div className="socialSection">
                      <table>
                        <tbody>
                          <tr><th>SOCIAL</th></tr>
                          <tr><td><FaFacebookF /></td></tr>
                          <tr><td><FaTwitter /></td></tr>
                          <tr><td><FaYoutube /></td></tr>
              </tbody>
                      </table>      
            </div>
            <div className={style.addressSection}>
                      <table>
                        <tbody>
                          <tr><th>ADDRESS</th></tr>
                          <tr><td>1st Cross, 2nd Main Road</td></tr>
                          <tr><td>N S industrial area</td></tr>
                          <tr><td>Bannerghatta Main Road</td></tr>
                          <tr><td>N S Palya, Bengaluru,</td></tr>
                          <tr><td>Karnataka 560076</td></tr>
              </tbody>
                      </table> 
            </div>
        </div>
        <div className={style.hrLine}>
        </div>
              <div className={style.copyRight}>
                <div className="ad">Advertise</div>
                <div className="helpCenter">? Help Center</div>
                <div className="cr">@ 2021-2023 RealShop.com</div>
              </div>
          </div>
    </div>
  )
}

export default Footer
import React, { useState } from 'react'
import style from '../css/login.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegisterUser() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [item, setItem] = useState([])
    const navigate = useNavigate()
    function handleLogin(e) {
        e.preventDefault()
        if (validate()) {
            axios.post('https://realshop-product-api.onrender.com/user', {
                name,email,phone,password
            }).then(() => {
                toast('Registered successfully')
                setTimeout(() => {
                    navigate('/login')
                }, 4000);
              
            }).catch(()=>toast('try again..'))
        }
    }
   


    const validate = () => {
        let result = true;
        if (phone === '' || phone === null || phone.length !== 10) {
            toast("invalid phone");
            return false

        }
        if (password === '' || password === null) {
            toast("Bad credential")
            return false

        }
        return result
    }
    return (
        <div>
            <div className={`${style.container}`}>
                <ToastContainer />
                <div className={`${style.forDesign}`}>
                    <div className={`${style.sideDiv}`}></div>
                    <div className={`${style.innerContainer}`}>

                        <img src="https://images.meesho.com/images/marketing/1661417516766.webp" width="433" height="200" className="lazyload AuthWrapperstyled__StyledPerfImage-sc-1plclw5-9 dSvYWd" alt="banner" />
                        <br />
                        <br />
                        <h4>Sign up</h4>
                        <br />
                        <form onSubmit={handleLogin}>
                            <div className="input-group input-group-sm mb-3 px-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
                                <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" aria-label="Sizing example input" placeholder='jhon doe' aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div className="input-group input-group-sm mb-3 px-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" aria-label="Sizing example input" placeholder='john@email.com' aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div className="input-group input-group-sm mb-3 px-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Phone</span>
                                <input type="tel" onChange={(e) => setPhone(e.target.value)} value={phone} className="form-control" aria-label="Sizing example input" placeholder='10 digit number' aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div className="input-group input-group-sm mb-3 px-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Password</span>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" aria-label="Sizing example input" placeholder='abc123' aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-sm px-5" >Sign up</button>
                        </form>
                    </div>
                    <div className={`${style.sideDiv}`}></div>
                </div>
            </div>
        </div>
    )
}

export default RegisterUser
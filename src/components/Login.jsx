import React, { useState } from 'react'
import style from '../css/login.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [phone,setPhone]=useState("")
  const [password, setPassword] = useState("")
  const [item,setItem]=useState([])
const navigate=useNavigate()
   function handleLogin(e){
    e.preventDefault()
if(validate()){
  axios.get('http://localhost:3000/user/', {
         params: {
           phone: phone,
           password: password
         }
       }).then((resp)=>{
        if(resp.data.length===0){
          toast("enter valid details")
        }
        else{
             
              navigate('/')
          alert("you are logged in")
          
        }
      })
    }
  }
  //    if(validate()){
  //      axios.get('http://localhost:3000/user', {
  //        params: {
  //          phone: phone,
  //          password: password
  //        }
  //      })
  //      .then(resp => {
  //        setItem(resp.data)
  //        console.log(resp.data);
  //        console.log(item);
  //        const count=0
  //        item.map((userData)=>{
  //          if(userData.phone===phone && userData.password===password){
  //          alert(userData.phone)
  //            count++
  //          }
  //        })
  //        if(count>0){
  //         toast("you are logged in")
  //          navigate('/')
  //        }
  //        else{
  //          toast("inter valid credentials")
  //          toast(count)
  //        }
  //      })
  //      .catch(err => console.log(err))
  //   }
  
  // }

      // .then(resp => {
      //   setItem(resp.data)
      //   console.log(item);
      //   let count=0
      //   item.map((userData)=>{
      //     if(userData.phone===phone && userData.password===password){
      //       count++
      //     }
      //   })
      //   if(count===1){
      //     alert("logged in")
      //     navigate('/')
      //   }
      //   else{
      //     alert("enter valid credentials")
      //   }
      // })
      // .catch(err => console.log(err))
    // if(validate()){
    //   axios.get('http://localhost:3000/user/' + phone).then((res) => {
        
    //     console.log(res)
    //   }).then((resp)=>{
    //     if(Object.keys(resp).length===0){
    //       alert("please enter valid username")
    //     }
    //     else{
    //       if(resp.password===password){
    //           alert("you are logged in")
    //           navigate('/')
    //       }else{
    //         alert("please enter valid credentials")
    //       }
    //     }
    //   })
    // }
  

  const validate=()=>{
    let result = true;
    if(phone===''||phone===null||phone.length!==10){
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
          <br />
            <form onSubmit={handleLogin}>
          <div className="input-group input-group-sm mb-3 px-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Phone</span>
            <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} className="form-control" aria-label="Sizing example input" placeholder='10 digit number' aria-describedby="inputGroup-sizing-sm" />
          </div>
            <div className="input-group input-group-sm mb-3 px-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Password</span>
              <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" aria-label="Sizing example input" placeholder='abc123' aria-describedby="inputGroup-sizing-sm" />
          </div>
          <button type="submit" className="btn btn-primary btn-sm px-5" >Login</button>
          </form>
        </div>
        <div className={`${style.sideDiv}`}></div>
        </div>
      </div>
    </div>
  )
}
export default Login
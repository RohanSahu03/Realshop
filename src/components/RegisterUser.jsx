import React, { useState } from 'react'
import { Button,Form,Label,FormGroup,Input,Col,FormFeedback} from 'reactstrap';
import axios from 'axios'


function RegisterUser() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")
    const [validName,setValidName]=useState("")
    const [validEmail, setValidEmail] = useState("")
    const [validPhone, setValidPhone] = useState("")
    const [validPassword, setValidPassword] = useState("")
    const [validGender, setValidGender] = useState("")
    const [boolean,setBoolean]=useState(true)

    const registerUser =()=>{
            if(name===''||name===null){
                    setValidName("field can't be empty")
                setBoolean(false)
            }
             else{
                setValidName("")
                setBoolean(true)
             }
            if (email === '' || email === null) {
            setValidEmail("field can't be empty")
                setBoolean(false)
                
            }
            else {
                 setValidEmail("")
                setBoolean(true)
            }
            if (phone === '' || phone === null||phone.length!==10) {
                setValidPhone("enter valid phone number")
                setBoolean(false)
            }
            else{
                setValidPhone("")
                setBoolean(true)
            } 
            if (password === '' || password === null || password.length >= 6) {
                setValidPassword("enter valid password")
                setBoolean(false)
            }
            else{
                    setValidPassword("")
                setBoolean(true)
            } 
            if(boolean===true){
                let payload={name,email,phone,gender,password}
                axios.post('http://localhost:3000/user', payload)
                    .then(function (response) {
                        console.log(response);
                        if (response.status === 201) {
                            alert("welcome")
                        }
                    })
                    .catch(function (error) {
                        alert("error")
                        console.log(error);
                    });
            }
       
           
    }

    const mystyle={
        "height":"30px"
    }
   
  return (
    <div style={{width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className="container" style={{width:'50%',height:'100%',backgroundColor:'aqua'}}>
              <h3><b>Register</b></h3>
              <Form>
                  <FormGroup  >
                      <Input
                            valid
                          id="exampleName"
                          name="name"
                          placeholder="Name"
                          type="text"
                          className="mb-3"
                            style={mystyle}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                      />
                      <FormFeedback valid>
                         {validName}
                      </FormFeedback>
                      <Label for="exampleName" hidden>
                          Name
                      </Label>
                  </FormGroup>
                  {' '}
                  <FormGroup  >
                      <Input
                          valid
                          style={mystyle}
                          id="exampleEmail"
                          name="Email"
                          placeholder="Email"
                          type="email"
                          className="mb-3"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                      />
                      <FormFeedback valid>
                          {validEmail}
                      </FormFeedback>
                      <Label for="exampleEmail" hidden >
                          Email
                      </Label>
                  </FormGroup>
                  {' '}
                  <FormGroup >
                      <Input
                          valid
                          id="examplePhone"
                          name="phone"
                          placeholder="Phone"
                          type="number"
                          className="mb-3"
                          style={mystyle}
                          value={phone}
                          onChange={(e) =>setPhone(e.target.value)}
                      />
                      <FormFeedback valid>
                          {validPhone}
                      </FormFeedback>
                      <Label for="examplePhone" hidden>
                          Phone
                      </Label>
                  </FormGroup>
                  {' '}
                  <FormGroup
                      row
                      tag="fieldset"
                  >
                      <legend className="col-form-label col-sm-2">
                          Gender
                      </legend>
                      
                      <Col sm={2}>
                          <FormGroup check>
                              <Input
                                  valid
                                  name="radio2"
                                  type="radio"
                                  value={gender}
                                  onSelect={(e) => setGender(e.target.value)}
                                  
                              />
                              <FormFeedback valid>
                                  {validGender}
                              </FormFeedback>
                              {' '}
                              <Label check>
                                  Male
                              </Label>

                          </FormGroup>
                          <FormGroup check>
                              <Input
                                  valid
                                  name="radio2"
                                  type="radio"
                                  value={gender}
                                  onSelect={(e) => setGender(e.target.value)}
                              />
                              <FormFeedback valid>
                                  {validGender}
                              </FormFeedback>
                              {' '}
                              <Label check>
                                  Female
                              </Label>

                          </FormGroup>
                      </Col>
                  </FormGroup>
                  <FormGroup >
                      <Input
                          valid
                          id="examplePassword"
                          name="password"
                          placeholder="Password"
                          type="password"
                          className="mb-3"
                          style={mystyle}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                      />

                      <FormFeedback valid>
                          password should be greater than 5 digit
                      </FormFeedback>
                      <FormFeedback valid>
                          {validPassword}
                      </FormFeedback>
                
                      <Label for="examplePassword" hidden>
                          Password
                      </Label>
                  </FormGroup>
                  {' '}
                  <Button onClick={registerUser}>
                      Submit
                  </Button>
              </Form>
        </div>
    </div>
  )
}

export default RegisterUser
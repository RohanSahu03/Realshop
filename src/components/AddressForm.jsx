import React, { useRef, useState} from 'react'
import { Modal, ModalBody, ModalFooter, Button, ModalHeader, Table, FormGroup, Label, Input, Col} from 'reactstrap'
import { FaPhoneAlt, FaLocationArrow } from 'react-icons/fa'
import style from '../css/cart.module.css'
import axios from 'axios'


function AddressForm(args) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
   

   let name=useRef()
    let phone = useRef()
    let building = useRef()
    let area = useRef()
    let pincode = useRef()
    let city = useRef()
    let state = useRef()

    let handleSubmit=(e)=>{
        e.preventDefault()
        let nameData = name.current.value
        let phoneData = phone.current.value
        let buildingData = building.current.value
        let areaData = area.current.value
        let pincodeData = pincode.current.value
        let cityData = city.current.value
        let stateData = state.current.value
    
        const formData ={
            nameData: nameData,
            phoneData:phoneData,
            buildingData:buildingData,
            areaData:areaData,
            pincodeData:pincodeData,
            cityData:cityData,
            stateData:stateData
        }
        axios.post('http://localhost:3000/address', formData)
            .then(function (response) {
                console.log(response);
                if(response.status===201){
                   alert("address have been saved")
                }
            })
            .catch(function (error) {
                alert("error")
                console.log(error);
            });
       
    }

    const myStyle = {
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
  return (
    <div>
          <div className={`${style.buybtn}`} onClick={toggle} style={{width:'150px'}}>
              <b>Add Address</b>
          </div>

          <Modal isOpen={modal} toggle={toggle} {...args} style={{ width: '300px' }}>
              <form onSubmit={handleSubmit}>
              <ModalHeader toggle={toggle}>Add Delivery Address</ModalHeader>
              <ModalBody>
               
                  <Table borderless style={{ marginBottom: "0px" }}>
                      <thead >
                          <tr>
                              <th>
                                  <FaPhoneAlt />  Contact Details
                              </th>

                          </tr>

                      </thead>

                      <tbody>
                          <tr>
                              <input style={myStyle} type="text" ref={name} placeholder="Name" id="searchField" autoComplete="off" required />
                          </tr>
                          <tr>
                              <input style={myStyle} type="text" ref={phone} placeholder="Contact Number" id="searchField" autoComplete="off" required />
                          </tr>

                      </tbody>

                      <thead >
                          <tr>
                              <th>
                                  <FaLocationArrow /> Address
                              </th>

                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <input style={myStyle} type="text" ref={building} placeholder="House No./Building name" id="searchField" autoComplete="off" required/>
                          </tr>
                          <tr>
                              <input style={myStyle} type="text" ref={area} placeholder="Road name/Area/Colony" id="searchField" autoComplete="off" required />
                          </tr>
                          <tr>
                              <input style={myStyle} type="text" ref={pincode} placeholder="Pincode" id="searchField" autoComplete="off" required/>
                          </tr>
                          <tr>
                              <input style={myStyle} type="text" ref={city} placeholder="City" id="searchField" autoComplete="off" required/>
                          </tr>
                          <tr>
                              <FormGroup row>
                                  <Label
                                      for="exampleSelect"
                                      sm={2}
                                      style={{ fontSize: '12px', color: 'gray' }}
                                  >
                                      State
                                  </Label>
                                  <Col sm={9}>
                                      <Input
                                          id="exampleSelect"
                                          name="select"
                                          type="select"
                                          ref={state} 
                                          bsSize="sm"
                                          required
                                      >
                                          <option disabled>
                                              select
                                          </option>
                                          <option>
                                              Aandhra Pradesh
                                          </option>
                                          <option>
                                              Asam
                                          </option>
                                          <option>
                                              Bihar
                                          </option>
                                          <option>
                                              Chhattisgarh
                                          </option>
                                          <option>
                                              Delhi
                                          </option>
                                          <option>
                                              Karnataka
                                          </option>
                                          <option>
                                              Tamil Nadu
                                          </option>
                                          <option>
                                              Haryana
                                          </option>
                                          <option>
                                              UttarPradesh
                                          </option>
                                      </Input>
                                  </Col>
                              </FormGroup>
                          </tr>
                      </tbody>
                  </Table>

              </ModalBody>
              <ModalFooter style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button color="secondary" type='submit' >
                      Save Address and Continue
                  </Button>
              </ModalFooter>
          </form>
          </Modal>

    </div>
  )
}

export default AddressForm
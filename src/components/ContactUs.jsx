import React from 'react'
import style from '../css/contactus.module.css'
import {FormGroup,Input,Form,Label,Button} from 'reactstrap'

function ContactUs() {
  return (
    <div className={style.mainDiv}>

        <div className={style.heading}>
              <h4>Connect With Us</h4>
              <p>We would love to respond to your queries and help you succeed
                <br />
                  Feel free to get in touch with us
              </p>
             
        </div>

        <div className={style.formOuter}>
            <div className={style.form}>
                  <Form>
                      <FormGroup>
                          <Label for="exampleName">
                              Name
                          </Label>
                          <Input
                              id="exampleName"
                              name="name"
                              placeholder="Name"
                              type="text"
                              bsSize="sm"
                          />
                      </FormGroup>
                      <FormGroup>
                          <Label for="exampleEmail">
                              Email
                          </Label>
                          <Input
                              id="exampleEmail"
                              name="email"
                              placeholder="with a placeholder"
                              type="email"
                              bsSize="sm"
                          />
                      </FormGroup>
                 
                      <FormGroup>
                          <Label for="exampleText">
                              Message
                          </Label>
                          <Input
                              id="exampleText"
                              name="text"
                              type="textarea"
                              bsSize="sm"
                          />
                     </FormGroup>
                      <Button>
                          Submit
                      </Button>
                  </Form>
            </div>
            <div className={style.address}>
                <div className={style.mail}>
                      <div className={style.label}>Email</div>
                      <div className={style.value}>realshop@gmail.com</div>
                </div>

                  <div className={style.phone}>
                      <div className={style.label}>Phone</div>
                      <div className={style.value}>564631235</div>
                  </div>

                  <div className={style.addresssection}>
                      <div className={style.label}>Address</div>
                      <div className={style.value}> 1st Cross, 2nd Main Road <br/>
                          N S industrial area,<br/>
                          Bengaluru</div>
                  </div>
                
            </div>
        </div>
        
        
    </div>
  )
}

export default ContactUs
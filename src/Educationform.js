import React, { Component } from 'react'
import './Educationform.css'

import { Col, Row, Button, Form, FormGroup, Label, Input ,Card, CardImg, CardText, CardBody,Collapse,
    CardTitle, CardSubtitle, CardFooter} from 'reactstrap'

 class Educationform extends Component {
     constructor(props) {
         super(props)

         this.state = {

           row :[
                   {degree:'',university:'',state1:'',year:'',subjects:'',marks:'',division:''}

             ]


         }
     }
     myfunction(){

     }

    render() {

        return (

            <div className="Main">

                <Card className="card1" body inverse style={{ width:'auto', backgroundColor: '#63a4ff', borderColor: '#333' }}>

                      <center>
                      <img src={"./public/user.png"}/><br></br>
                      <label className="Name">Name of User</label><br></br><br></br>
                      <label className="Name">Email-Id</label><br></br>
                </center>
                </Card>


                <CardTitle  className="heading">Educational Qualifications</CardTitle>

                <Card className="card2">
                    <CardBody>
                        <tr id="table">
                   <td><input type="text" placeholder="Degree/couse"  id="deg"></input></td>
                   <td><input type="text" placeholder="university board"id ="uni"></input></td>
                   <td>  <input type="text" placeholder="state" id="state1"></input> </td>
                   <td><input type="text" placeholder="year" id="year"></input></td>
                   <td>  <input type="text" placeholder="Main subjects" id="sub"></input></td>
                   <td>  <input type="text" placeholder="% of marks" id="marks"></input></td>
                   <td> <input type="text" placeholder="division" id="division"></input></td>
                   <td><button className="button1">+</button></td></tr>

                  </CardBody>
                </Card>
                <Card className="card2">
                <button className="button">Submit</button>
                </Card>



  </div>
        )
    }
}

export default Educationform

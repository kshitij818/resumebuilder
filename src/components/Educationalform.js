import React, { Component } from 'react'
import {UncontrolledTooltip, Card,CardBody, InputGroupButtonDropdown,Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Form, FormGroup,InputGroup, InputGroupAddon, InputGroupText, Input,DropdownMenu,DropdownItem,DropdownToggle,Container, Row, Col ,ButtonGroup} from 'reactstrap';
import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";

class Educationalform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:false,
             startDate:new Date()
        }
    }
    showModal=e=>{
        this.setState({
            show:true
        });
    };
    handleChange = date => {
        this.setState({
          startDate: date
        });
      };
    
    render() {
        return (
            <div>
                <Button color="primary" onClick={e=>{this.showModal();}}>CLICK ME</Button>
                <Modal isOpen={this.state.show} size="lg" aria-labelledby="contained-modal-title-vcenter"centered>
                    <ModalHeader>EDUCATIONAL DETAILS</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col sm={{size:"12"}}>
                            <InputGroup>
                              
                              <InputGroupButtonDropdown addonType="append">
                                 <DropdownToggle caret>
                                     Course Status
                                 </DropdownToggle>
                                  <DropdownMenu>
                                        <DropdownItem header>Header</DropdownItem>
                                        <DropdownItem disabled>Action</DropdownItem>
                                        <DropdownItem>Another Action</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Another Action</DropdownItem>
                                  </DropdownMenu>
                              </InputGroupButtonDropdown>
                              <Input placeholder="course details"></Input>
                             </InputGroup>
                                <br />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={{size:"12"}}>
                                <Input placeholder="School/College Name"></Input>
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col sm={{size:"12"}}>
                                <Input placeholder="Umiversity/Board Name"></Input>
                            </Col>
                        </Row><br></br>
                        <Row>
                            <Col sm={{size:"6"}}>
                                {/* <Input placeholder="From Date"> */}
                                <DatePicker placeholderText="From Date"
                                 selected={this.state.startDate}
                                  onChange={this.handleChange}
                                  ></DatePicker>
                                {/* </Input> */}
                            </Col>
                            <Col sm={{size:"6"}}>
                                {/* <Input placeholder="To Date"> */}
                                <DatePicker placeholderText="To Date"
                                 selected={this.state.startDate}
                                  onChange={this.handleChange}
                                  ></DatePicker>
                                {/* </Input> */}
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='secondary ' onClick={e=>{this.closeModal();}}>Cancel</Button>
                        <Button style ={{backgroundColor:"green"}}>SAVE AND ADD MORE</Button>
                        <Button style ={{backgroundColor:"green"}}>SAVE</Button>
                    </ModalFooter>
                </Modal>
                
            </div>
        )
    }
}

export default Educationalform

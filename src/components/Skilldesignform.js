import React, { Component } from 'react'
import {UncontrolledTooltip, Card,CardBody, InputGroupButtonDropdown,Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Form, FormGroup,InputGroup, InputGroupAddon, InputGroupText, Input,DropdownMenu,DropdownItem,DropdownToggle,Container, Row, Col ,ButtonGroup} from 'reactstrap';
import './skilldesign.css'
class Skilldesignform extends Component{
    constructor(props)
    {super(props)
     this.state={
         show:false
          
     }}
     showModal=e=>{
         this.setState({
             show:true
         });
     };
     closeModal=e=>{
        this.setState({
            show:false
        });
     };
     
    render(){
       return(
                <div>
                  <Button color="primary" onClick={e=>{this.showModal();}}>CLICK ME</Button>
                  <Modal isOpen={this.state.show} size="lg" aria-labelledby="contained-modal-title-vcenter"centered>
                    <ModalHeader>Add Skill details</ModalHeader>
                      <ModalBody >       
                          <Card className="scroll"> 
                             <CardBody>  
                                <Row>
                                    <Col  sm={{ size: '5' }}>
                                        <Label>ADD SKILLS</Label>
                                    </Col>
                                    <Col sm={{size:"5"}}>
                                        <Label>ADD RATINGS</Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={{size:'5'}}>
                                         <Input placeholder="skills name" id="skillname"></Input> 
                                           <UncontrolledTooltip placement="right" target="skillname">
                                                  ADD ANY SKILLS
                                           </UncontrolledTooltip>
                                    </Col>
                                    <Col sm={{size:'5'}}>
                                        <Input placeholder="Rating"></Input>
                                    </Col>
                                    <Col sm={{size:"2"}}>
                                        <Button color="danger">SKILLS</Button>
                                    </Col>
                                </Row><br></br>
                                <Row>
                                    <Col sm={{size:'5'}}>
                                         <Input placeholder="skills name"></Input>
                                    </Col>
                                    <Col sm={{size:'5'}}>
                                        <Input placeholder="Rating"></Input>
                                    </Col>
                                    <Col sm={{size:"2"}}>
                                        <Button color="danger">SKILLS</Button>
                                    </Col>
                                </Row><br></br>
                                <Row>
                                    <Col sm={{size:'5'}}>
                                         <Input placeholder="skills name"></Input>
                                    </Col>
                                    <Col sm={{size:'5'}}>
                                        <Input placeholder="Rating"></Input>
                                    </Col>
                                    <Col sm={{size:"2"}}>
                                        <Button color="danger">SKILLS</Button>
                                    </Col>
                                </Row><br></br>
                             </CardBody>   
                          </Card>     
                      </ModalBody>
                    <ModalFooter>
                        <Button color='secondary ' onClick={e=>{this.closeModal();}}>Cancel</Button>
                        <Button style ={{backgroundColor:"green"}}>SAVE</Button>
                    </ModalFooter>
                  </Modal>  






                 </div>
   
   
            )
   }
}
export default Skilldesignform
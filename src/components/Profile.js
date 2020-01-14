import React, { Component } from 'react'
import  './Name.css'
import {Card,CardBody, InputGroupButtonDropdown,Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Form, FormGroup,InputGroup, InputGroupAddon, InputGroupText, Input,DropdownMenu,DropdownItem,DropdownToggle,Container, Row, Col ,ButtonGroup} from 'reactstrap';
import { FaBold,FaUnderline ,FaItalic,FaList} from 'react-icons/fa';
class Profile extends Component {
    constructor(props)
    {super(props)
     this.state={
           dropdown1:false,
           show:false,
           name1:'THIS IS A OBJECTIVE TO JUSTIFY OTHER STUFF TO KN OQ ABOUT EXPERTIZE OF THE AREA OF MOVWMWNT',
           textarea1:""
           
     }}
     toggledropdown1=e=>{
         this.setState({
             dropdown1:true
         });
     };
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
     calling=(e)=>{
         this.setState({
             textarea1:this.state.name1
            
        
         });
     };
     call=()=>{
         console.log(this.state.textarea1);
         
     }
    render() {
        return (
            <div>
                <Button color="primary" onClick={e=>{this.showModal();}}>CLICK ME</Button>
                <Modal isOpen={this.state.show}>
                    <ModalHeader>Profile Description</ModalHeader>
                    <ModalBody  >
                    <Row>

                      
                       <Col sm={{ size: '6'}}>
                          <Card> 
                          <CardBody style={{padding:"0px"}} >
                            <ButtonGroup className="buttonn" style={{border:"solid white 1px"}}>
                            <Button className="buttonn" style={{color:"Black",backgroundColor:"white",border:"solid white 1px"}}><FaBold></FaBold></Button>
                             <Button className="buttonn" style={{color:"Black",backgroundColor:"white",border:"solid white 1px"}}><FaItalic></FaItalic></Button>
                            <Button className="buttonn" style={{color:"Black",backgroundColor:"white",border:"solid white 1px"}}><FaUnderline></FaUnderline></Button>
                            <Button className="buttonn" style={{color:"Black",backgroundColor:"white",border:"solid white 1px"}}><FaList></FaList></Button>
                            </ButtonGroup>
                            </CardBody>
                            </Card>
                        </Col>
                        
                        
                        <Col sm={{ size: '6'}}>
                         <InputGroup>
                                  <Input placeholder="Profession/Functional areas"/>
                                  <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.dropdown1} onClick={e => {this.toggledropdown1();}}  >
                                     <DropdownToggle split outline >
            
                                         </DropdownToggle>
                                      <DropdownMenu   >
                                     <DropdownItem value="play"  >PLAY</DropdownItem>
                                       <DropdownItem value="play">PLAY</DropdownItem>
                                      <DropdownItem value="play">PLAY</DropdownItem>
                                         </DropdownMenu>
                                         </InputGroupButtonDropdown>
                                   </InputGroup>
                                          </Col>
                                 </Row>
                                          <Label>Description</Label> 
                                          
                                          <Row>
                                           
                                          <Col sm={{ size: '6'}}>  
                                             
                                    
                                   <textarea placeholder="Enter Profile"  id="textarea" rows="8" cols="29" wrap="hard">{this.state.textarea1}</textarea>
                                   
                                   </Col>
                                   
                                  
                                
                                   <Col sm={{ size: '6' }}>
                                       <div className="scroll">
                                   <Card>
                                       <CardBody style={{padding:"1px"}}>
                                           <Card>
                                               <CardBody style={{padding:"1px",contentAlign:"center"}}> 
                                               {this.state.name1}
                                               </CardBody>
                                           </Card>
                                           <Button  color="danger"className="btn btn-primary btn-block" onClick= {e=>{this.calling();}}> CLICK ME</Button>
                                           <br></br>
                                           <Card style={{padding:"1px"}}>
                                               <CardBody>{this.state.name1}</CardBody>
                                           </Card> 
                                           <Button color="danger" className="btn btn-primary btn-block" onClick={this.call()} > CLICK ME</Button>
                                           <br></br>
                                   
                                             </CardBody>
                                    </Card>
                                    </div>
                                      </Col>
                                      
                                     </Row>
                                      

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

export default Profile

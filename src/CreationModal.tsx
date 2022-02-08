import axios from "axios";
import React, { Component,useState,useEffect } from "react"
import { 
    Modal,
    Button,
    Col,
    Form,
    ModalBody,
    ModalHeader,
    Row,
    Label,
    Input,
} from "reactstrap";

type MyProps = {
    isOpen : boolean
    toggle
}

interface Student {
    name:""
}

function refreshPage() {
    window.location.reload();
  }
  var rejex =/^[A-Za-z]+$/;

//   function DataFetching(   st: any) {
//     const [page, pageCount] = useState([]);

//     // Similar to componentDidMount and componentDidUpdate:  
//     useEffect(() => {   

//             axios.post(`http://localhost:8080/students/create`, st)
//             .then(res => {
//                 console.log("Request Student :  " + JSON.stringify(st))
//                 // refreshPage();
//                 pageCount(res.data);
//             }).catch(Error)
//             console.log("ERROR :: " + JSON.stringify(st))
        
//     },[]);
// }

export default class CreationModal extends Component<MyProps> {
    state : Student = {
        name:""
    };
    constructor(props: MyProps | Readonly<MyProps>) {
        super(props);
        this.state = {name: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      onChange = (e: { target: { value: string; }; }) => {
        const re = /^[A-Za-z]+$/;
        if (e.target.value === "" || re.test(e.target.value))
          this.setState({ name: e.target.value });
          console.log("Function called")
      };
    
    handleSubmit = (event: { preventDefault: () => void; }) => {

        event.preventDefault()

        const student = {
            name : this.state.name
        }
        if( student.name == '' || undefined)
        {
            console.log("Request Student :  " + JSON.stringify(student))
            alert("Please add valid name :")
        }
        else
        {
            // DataFetching(student);
            axios.post(`http://localhost:8080/students/create`, student)
            .then(res => {
                console.log("Request Student :  " + JSON.stringify(student))
                refreshPage();
            }).catch(Error)
            console.log("ERROR :: " + JSON.stringify(student))
        }
        }
        


    render(){

                return(<Modal isOpen = {this.props.isOpen} toggle={this.props.toggle}>
                    <ModalHeader toggle={this.props.toggle}>
                        Adding new wise student
                    </ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleSubmit} >
                        <Row>
                            <Col>
                            <Label>Name </Label>
                            </Col>
                            <Col>
                            <Input id="default" name = "name" value={this.state.name} 
                                onChange={this.onChange }
                             type="text" />
                            </Col>
                        </Row>
                        <Button data-testId = "button" color="primary" > Create New Student</Button>
                    </Form>

                    </ModalBody>
                
                </Modal>);
        }

}
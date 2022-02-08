import { Component ,useState ,useEffect } from "react";
import { Button, Card, CardBody, CardFooter, CardText, CardTitle, Col, Container, Navbar, NavbarBrand, Row } from "reactstrap";
import { 
    IoSchoolOutline, 
    IoMan,
    IoLayersOutline,
    IoWomanOutline, 
} from "react-icons/io5";
import axios from "axios";
import CreationModal from "./CreationModal";


interface MyState {
    students : [];
    teachers : [];
    subjects : [];
    isOpen : boolean;

}



function refreshPage(this: any) {
    window.location.reload();
    // this.setState((prevState: { isOpen: any; }) => ({ isOpen : !prevState.isOpen}));
  }


function RenderStudent({st}) {
    console.log("st : " + JSON.stringify(st))

    return (
       <Row>
            <Col sm = "12">
               <Card body style={{marginBottom : 10}}>
                   <CardTitle tag = "h5">
                       <IoMan className="font-size-xl"/> {st.name}
                   </CardTitle>
                   <CardBody >
                       <Row>
                           <Col sm = "4" className="text-center">
                               <span className="font-weight-bold">Name </span>
                               <span>{st.name}</span>
                           </Col>
                           <Col sm = "4" className="text-center">
                               <span className="font-weight-bold"> Subject </span>
                               <span> {st.name}</span>
                           </Col>
                           <Col sm = "4" className="text-center">
                               <span className="font-weight-bold"> Teacher </span>
                               <span> {st.name}</span>
                           </Col>
                       </Row>
                   </CardBody>
                   <CardFooter>
                       <Row>
                           <Col sm-6>
                               <Button block outline color="primary">
                                   Edit
                               </Button>
                           </Col>
                           <Col sm-6>
                               <Button data-testid = "Delete-button" block outline color="danger" onClick={() => deleteStudent(st.id)} 
                               onClickCapture={()=> refreshPage()}
                               >
                                   Delete
                               </Button>
                           </Col>
                       </Row>
                   </CardFooter>
               </Card>
           </Col> 
       </Row> 
    );
}


export default class Dashboard extends Component<{}, MyState> {
    state : MyState = {
        isOpen : false,
        students : [],
        teachers : [],
        subjects : [],
    };
    

    constructor(props) {
        super(props);
        // this.renderStudent = this.renderStudent.bind(this);
      }


    componentDidMount(){
        axios.get('http://localhost:8080/students')
        .then(res => {
            const students = res.data
            console.log("students : " + JSON.stringify(students))
            this.setState({students : students})
        })
        axios.get('http://localhost:8080/teachers')
        .then(res => {
            const teachers = res.data
            console.log("Teachers : " + JSON.stringify(teachers))
            this.setState({teachers : teachers})
        })
        axios.get('http://localhost:8080/subjects')
        .then(res => {
            const subjects = res.data
            console.log("Subjects : " + JSON.stringify(subjects))
            this.setState({subjects : subjects})
        })
    }
    
    toggle = () => {
        this.componentDidMount();
        this.setState((prevState) => ({ isOpen : !prevState.isOpen}));
    }

    render(){
        
        return(
            <div>
                <Navbar color="dark" light mb-2>
                    <NavbarBrand className="text-white">
                        <IoSchoolOutline className = "font-size-xxl"/>
                        <span data-testid  = "span-name" className="font-size-l ml-3">School Manager Application</span>

                    </NavbarBrand>
                    
                </Navbar>

                <Container className="mt-3">
                    <Row>
                        <Col sm ='4'>
                            <Card body >
                                <CardTitle tag = "h5">
                                    <IoMan className="font-size-xl"/> {this.state.students.length} Students
                                </CardTitle>
                                <CardText>
                                    With supportking text below as a natural lead in to additional content.
                                </CardText>
                                <Button data-testid = "button-test">Manage Students</Button>
                            </Card>

                        </Col>
                        <Col sm ='4'>

                        <Card body >
                                <CardTitle tag = "h5">
                                    <IoSchoolOutline className="font-size-xl"/> {this.state.teachers.length} Teachers
                                </CardTitle>
                                <CardText>
                                    With supportking text below as a natural lead in to additional content.
                                </CardText>
                                <Button>Manage Teacher</Button>
                            </Card>
                        </Col>
                        <Col sm ='4'>

                        <Card body >
                                <CardTitle tag = "h5">
                                    <IoLayersOutline className="font-size-xl"/> {this.state.subjects.length}  Subjects
                                </CardTitle>
                                <CardText>
                                    With supportking text below as a natural lead in to additional content.
                                </CardText>
                                <Button>Manage Subjects</Button>
                            </Card>
                        </Col>
                    </Row>

                </Container>
                <CreationModal isOpen={this.state.isOpen} toggle={this.toggle}></CreationModal>
                <Container className="mt-4">
                    <Row>
                        <Col sm ='12'>        
                            <Button data-testid = "button" block color ="success" onClick={this.toggle}>
                                <span className="font-size-l">Create New Student </span>
                            </Button>       
                        </Col>    
                    </Row>
                </Container>

                <Container className="mt-4">
                    <h2 title="List Student">All Students List</h2>
                    { this.state.students.length > 0 && this.state.students.map(student => <RenderStudent st={student} />)}
                    {this.toggle}

                </Container>
            </div>
        );
    }



}
function deleteStudent(id: any): void {
    axios.delete(`http://localhost:8080/students/delete/${id}`)
    .then(res => {
        console.log("Delete student : ID :: " + JSON.stringify(id))
        // refreshPage();
    }).catch(Error);
    console.log("ERROR : ID :: " + JSON.stringify(id))
}

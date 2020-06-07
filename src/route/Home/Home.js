import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ListCard from '../../component/ListCard/ListCard';

export default class Home extends Component {
    render() {
        return (
            <body>
                <div>
                    <Navbar  bg="light" expand="lg">
                    <Navbar.Brand href="/">Shop</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/details">Details</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar>
                </div>
                <div><ListCard /></div>
          </body>
        );
    }
};
import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default class CardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            lgShow: false
        }
        this.Example = this.Example.bind(this);
    }

    Example()  {
        return(
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{this.props.product_name}</Card.Title>
                <Card.Text>{this.props.supplier}</Card.Text>
                <Card.Text>{this.props.quantity}</Card.Text>
                <Card.Text>{this.props.unit_cost}</Card.Text>
                <Button variant="primary" onClick={() => this.setState({lgShow: true})}>Details</Button>
            </Card.Body>
        </Card>
        <Modal size="lg" show={this.state.lgShow} onHide={() => this.setState({lgShow: false})} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
            Détails
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{this.props.product_name}</Card.Title>
                <Card.Text>{this.props.supplier}</Card.Text>
                <Card.Text>{this.props.quantity}</Card.Text>
                <Card.Text>{this.props.unit_cost}</Card.Text>
            </Card.Body>
        </Card>
        </Modal.Body>
        </Modal>
        </>
        );
    }

    render () {
        return this.Example();
    }
};
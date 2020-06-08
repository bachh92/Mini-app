import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class CardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            product_name: props.product_name,
            supplier: props.supplier,
            quantity: props.quantity,
            unit_cost: props.unit_cost
        };
    }

    render () {
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.state.product_name}</Card.Title>
                    <Card.Text>{this.state.supplier}</Card.Text>
                    <Card.Text>{this.state.quantity}</Card.Text>
                    <Card.Text>{this.state.unit_cost}</Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        );
    }
};
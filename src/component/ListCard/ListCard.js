import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import CardItem from '../Card/CardItem'


export default class ListCard extends Component {
    constructor(props){
        super(props);
        
    }

    render() {
        return(
            <ListGroup horizontal>
                <ListGroup.Item></ListGroup.Item>
            </ListGroup>
        );
    }


};
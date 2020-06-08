import React, {Component} from 'react';
import CardItem from '../Card/CardItem';
import data from '../../assets/dataset-example.json';
import ListGroup from 'react-bootstrap/ListGroup';


export default class ListCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
        };
        this.searchf = this.searchf.bind(this);
    }

    componentDidMount() {
        const list = data.map((data) => 
            <CardItem key={data._id.$oid} product_name={data.product_name} supplier={data.supplier} quantity={data.quantity} unit_cost={data.unit_cost} /> 
        );
        this.setState({
            list: list
        });
    }

    searchf(data) {
        if ( this.props.search !== "" && data.props.product_name.toLowerCase().indexOf(this.props.search.toLowerCase()) === -1 ) {
            return null;
        }
        return  <CardItem key={data.props.id} product_name={data.props.product_name} supplier={data.props.supplier} quantity={data.props.quantity} unit_cost={data.unit_cost} /> 
    }

    render() {
        return(
            <div>
                <ListGroup horizontal>
                    {
                        this.state.list.map(data => {
                        return this.searchf(data)
                        })
                    }
                </ListGroup>
            </div>
        );
    }


};
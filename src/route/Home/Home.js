import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../assets/nav.css';
import data from '../../assets/dataset-example.json';
import ListGroup from 'react-bootstrap/ListGroup';
import CardItem from '../../component/Card/CardItem';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            list: [],
            increase: false,
            decrease: false
        }
        this.search = this.search.bind(this);
        this.textInput = React.createRef();
        this.handleIChange = this.handleIChange.bind(this);
        this.handleDChange = this.handleDChange.bind(this);
        this.printlist = this.printlist.bind(this);
    }

    componentDidMount() {
        const list = data.map((data) =>
            <CardItem key={data._id.$oid} product_name={data.product_name} supplier={data.supplier} quantity={data.quantity} unit_cost={data.unit_cost} /> 
        );
        this.setState({
            list: list
        });
    }

    search(data, index) {
        if (this.state.decrease === false && this.state.increase === false) {
            if ( this.state.search !== "" && data.props.product_name.toLowerCase().indexOf(this.state.search.toLowerCase()) === -1 ) {
                return null;
            }
            return  <CardItem key={index} product_name={data.props.product_name} supplier={data.props.supplier} quantity={data.props.quantity} unit_cost={data.props.unit_cost} /> 
        }
    }

    onChange = () => {
        this.setState({
            search: this.textInput.current.value
        });
    }

    handleIChange() {
        this.setState({
            list: this.state.list.sort(function (a, b) {
                var tmp = a.props.unit_cost.replace('$', '');
                var tmp2 = b.props.unit_cost.replace('$', '');
                    return parseInt(tmp) - parseInt(tmp2)
                })
        });
    }
    
    handleDChange() {
         this.setState({
            list: this.state.list.sort(function(a, b){
                var tmp = a.props.unit_cost.replace('$', '');
                var tmp2 = b.props.unit_cost.replace('$', '');
                return parseInt(tmp2) - parseInt(tmp);
            }),
            decrease: true
        });
    }

    printlist() {
        this.setState({
            increase: false,
            decrease: false
        });
        return this.state.list;
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <body>
                <div>
                    <Navbar  bg="light" expand="lg">
                    <Navbar.Brand className="Brand" href="/">Shop</Navbar.Brand>
                    <Nav className="mr-auto">
                    <div className="filter">
                        <a>Prix:</a>
                        <Button className="button" variant="outline-success" onClick={() => this.handleIChange()} size="sm">Croissant</Button>
                        <Button className="button" variant="outline-success" onClick={() => this.handleDChange()} size="sm">Décroissant</Button>
                    </div>
                    </Nav>
                    <Form inline onSubmit={this.handleSubmit}>
                        <Form.Control ref={this.textInput} type="text" placeholder="Search" className="mr-sm-2" onChange={this.onChange}/>
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar>
                </div>
                <ListGroup horizontal>
                    {
                          (this.state.decrease === false && this.state.increase === false) ? (this.state.list.map((data, index) => { return  this.search(data, index) })) : this.printlist()
                    }
                </ListGroup>          
                </body>
        );
    }
};
import React, { Component } from 'react';
import Exersise from './Exersise';
class Exersises extends Component {
    state = {
        
            products: [
                {id:1, count:2 , productName: 'laptop'},
                {id:2, count:1 , productName: 'phone'},
                {id:3, count:4 , productName: 'Ipad'},
            ]
        }
    render() {
        return (
            <div>
                {this.state.products.map((product,index) => (
                    <Exersise onDelete={this.handleDelete} key={index} id={product.id} count={product.count} productName={product.productName}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Natus iste voluptatibus error minus ut harum debitis necessitatibus explicabo a?
                    </Exersise>
                ))}
                
            </div>
        );
    }
    handleDelete = (productId) => {
        const newProducts= this.state.products.filter((product) => { return product.id !== productId})
        this.setState({products: newProducts})
        console.log(productId);
    }
}

export default Exersises;
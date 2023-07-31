import React, { Component } from 'react';

import Product from './Product';

class Products extends Component {

    componentDidUpdate(){
        console.log('products - didUpdate');
      }
    render() {
        console.log('products - render');
        return (
            <div>
                <br />
                <h1>Props</h1>
                <button onClick={this.props.onReset} className='btn btn-primary'>Reset</button>
                {this.props.products.map((prod,index) => (
                    <Product onDecrement={this.props.onDecrement} onIncrement={this.props.onIncrement} onDelete={this.props.onDelete} id={prod.id} key={index} productName={prod.productName} count={prod.count}/>
                ))}
                
            </div>
        );
    }
   
}

export default Products;
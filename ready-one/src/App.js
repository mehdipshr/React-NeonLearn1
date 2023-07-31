import React, { Component } from 'react'

import './App.css';
// import Condition from './Neon-learn/ConditionTemplate';
// import Calculator from './Neon-learn/Calculator';
// import Product from './Neon-learn/Product';
import Products from './Neon-learn/Products';
// import Products from './Neon-learn/functionalProduct/Products';
// import Test from './Test';
import Navbar from './Neon-learn/Navbar';

// import Exersises from './Neon-learn/functionalProduct/Exersises';

class App extends Component {

  componentDidUpdate(){
    console.log('app - didUpdate');
  }
  state = {
    products: [
        {id:1, count:2 , productName: 'laptop'},
        {id:2, count:1 , productName: 'phone'},
        {id:3, count:4 , productName: 'Ipad'},
    ],
}; 
  render(){
    console.log('App- render');
    return( 
      <div className="App">
        <Navbar products={this.state.products }
        />
        <Products products={this.state.products }
          onDelete={this.handleDelete} 
          onReset={this.handleReset}
          onIncrement={this.handleIncrement} 
          onDecrement={this.handleDecrement} />
        {/* <Test/> */}
        {/* <Condition/> */}
        {/* <Product/> */}
        <br />
        <br />
        {/* <Exersises/> */}
        {/* <Calculator/> */}
      </div>
    );
  }
  handleIncrement = (productId) => {
      const newProducts = [...this.state.products]; /* yek copy dorost mikonim az products ke dar state gharar dare */
      const index = newProducts.findIndex(prod => prod.id === productId);
      newProducts[index].count += 1;
      this.setState({products : newProducts});
      
  }
  handleDecrement = (productId) => {
      const newProducts = [...this.state.products]; /* yek copy dorost mikonim az products ke dar state gharar dare */
      const index = newProducts.findIndex(prod => prod.id === productId);
      newProducts[index].count -= 1;
      this.setState({products : newProducts});
  }
  handleDelete = (productId) => {
      const newProducts = this.state.products.filter(prod => prod.id !== productId)
      this.setState({products: newProducts});
  }
  handleReset = () => {
      const newProducts = this.state.products.map(prod => {
          prod.count = 0;
          return prod
      });
      this.setState({products: newProducts})
      console.log('reset');
  }
}

export default App;
